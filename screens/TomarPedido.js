import React, { useEffect, useState } from 'react'
import { View, Text, Button, ScrollView } from 'react-native'
import firebase from '../database/firebase'
import { ListItem, Avatar } from 'react-native-elements'

const logoImage = require('../image/hambur.jpg')


function TomarPedido(props) {

   const [pedido, setPedido] = useState([])


   useEffect(()=>{
    firebase.db.collection('pedido').onSnapshot((querySnapshot) => {
        const pedidos = [];
        querySnapshot.docs.forEach(resultado => {
            const { id, name, price, comida } = resultado.data();
            pedidos.push({
                identificador: resultado.id,
                id,
                name,
                price,
                comida
            })
        })
        setPedido(pedidos)
    })
   
   },[])



    

    const cocina = async(typo,name,price,comida,id) => {
       
        firebase.db.collection('pedidosCosinando').add({
            typo,
            name,
            price,
            comida,
        })  
    
        const dbRef = firebase.db.collection('pedido').doc(id)
        await dbRef.delete()
       console.log(pedido)
    }

    return (
        <ScrollView>
            {
                pedido.map(articulo => {
                    return (
                        <ListItem key={articulo.identificador}>
                            <ListItem.Chevron />
                            <Avatar
                                source={logoImage}
                                rounded
                            />
                            <ListItem.Content>
                                <ListItem.Title>{articulo.name}</ListItem.Title>
                                <ListItem.Subtitle>{articulo.price}</ListItem.Subtitle>
                            </ListItem.Content>
                            <Button title='x' onPress={()=>cocina(articulo.id,articulo.name, articulo.price, articulo.comida,articulo.identificador)}/>

                        </ListItem>
                    )
                })

            }
        <Button title="tomar Pedido" onPress={()=> props.navigation.navigate('pedidoCosinandose')} />
        </ScrollView>
    )
}

export default TomarPedido
