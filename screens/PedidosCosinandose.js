import React,{useEffect, useState} from 'react'
import {View, Text, Button} from 'react-native'
import firebase from '../database/firebase'
import { ScrollView } from 'react-native-gesture-handler'
import { ListItem, Avatar } from 'react-native-elements'

const logoImage = require('../image/hambur.jpg')


function PedidosCosinandose(props) {

    const [pedidosCosina, setPedidosC] = useState([])

    useEffect(()=>{
        firebase.db.collection('pedidosCosinando').onSnapshot((querySnapshot)=>{
            const data = [];
            querySnapshot.docs.forEach(doc=>{
                const {name,price,typo, comida}= doc.data()
                data.push({
                    id: doc.id,
                    name,
                    price,
                    typo,
                    comida
                })
            })
            setPedidosC(data)

        })
       
    },[])
    const pedidoEntregado = async(typo,name,price,id, comida)=>{
        await firebase.db.collection('ventas').add({
            typo,
            name,
            price,
            comida
        })
        const refDb = firebase.db.collection('pedidosCosinando').doc(id)
        await refDb.delete()
        
    }
    const eliminarPedido = async(id)=>{
        const dbRef = firebase.db.collection('pedidosCosinando').doc(id)
        await dbRef.delete()
    }
    return (
      <ScrollView>
          {
              pedidosCosina.map(pedi=>{
                  return(
                    <ListItem key={pedi.id}>
                    <Avatar
                        source={logoImage}
                        rounded
                    />
                    <ListItem.Content>
                        <ListItem.Title>{pedi.name}</ListItem.Title>
                        <ListItem.Subtitle>{pedi.price}</ListItem.Subtitle>
                    </ListItem.Content>
                    <View>
                        <Button title="x" onPress={()=>eliminarPedido(pedi.id)}/>
                        <Button title='listo' onPress={()=>{pedidoEntregado(pedi.typo, pedi.name, pedi.price,pedi.id,pedi.comida)}} color='green'/>                
                    </View>
                    </ListItem>
                  )
              })
          }
      </ScrollView>
    )
}

export default PedidosCosinandose
