import React,{useState, useEffect} from 'react'
import {View, Text, StyleSheet, Button, ImageBackground} from 'react-native'
import firebase from '../database/firebase'


const logoImage = require('../image/background/baner2.jpg')


function inventario(props) {
   
    const [state, setState] = useState([])
    const [hamburgers, setHmaburgers] = useState([])
    const [hotDogs, setHotDogs] = useState([])
    const [crasyPotates, setPotates] = useState([])
    const [meats, setMeats] = useState([])
    const [comidas, setComidas] = useState([])


    useEffect(()=>{
        firebase.db.collection('ventas').onSnapshot((querySnapshot)=>{
            const estado = [];
            querySnapshot.docs.forEach(result =>{
                const {comida, name, price, typo} = result.data()
                estado.push({
                    indice: result.id,
                    comida,
                    name,
                    price,
                    typo                    
                })
            })
            setState(estado)
            getHamburguers(estado);
            getHotDogs(estado);
            getPapasLocas(estado);
            getComidas(estado);
            getCarnes(estado);
    
        })
       
    },[])
   
    // totales de las ventas con el metodo reduce
    const totalVentas = state.reduce((precio, comidas)=>comidas.price + precio,0)
    const ventasHamburguesas = hamburgers.reduce((ventas, hambur)=> hambur.price + ventas, 0)
    const ventasPerros = hotDogs.reduce((ventas, perros)=> perros.price + ventas, 0)
    const ventasPapas = crasyPotates.reduce((ventas, papas)=> papas.price + ventas, 0)
    const ventasComidas = comidas.reduce((ventas, comida)=> comida.price + ventas, 0)
    const ventasCarnes = meats.reduce((ventas, carnes)=> carnes.price + ventas, 0)

    const getHamburguers = (state)=>{
        const cantiHambur = [] 
        state.map((pedido)=>{
           if(pedido.comida === 'hamburguesa'){
            cantiHambur.push(pedido)
           }
        })
        setHmaburgers(cantiHambur)
    }
    const getHotDogs = (state)=>{
        const cantiPerros = [];
        state.map((numeroPerros)=>{
            if(numeroPerros.comida === 'perro'){
                cantiPerros.push(numeroPerros)
            }
        })
        setHotDogs(cantiPerros)

    }
    const getPapasLocas = (state)=>{
        const cantiPapasL = [];
        state.map((numeroPapasL)=>{
            if(numeroPapasL.comida === 'papas'){
                cantiPapasL.push(numeroPapasL)
            }
        })
        setPotates(cantiPapasL)
    }
    const getCarnes = (state)=>{
        const cantiPerros = [];
        state.map((numeroPerros)=>{
            if(numeroPerros.comida === 'carnes'){
                cantiPerros.push(numeroPerros)
            }
        })
        setMeats(cantiPerros)
    }
    const getComidas = (state)=>{
        const cantiPerros = [];
        state.map((numeroPerros)=>{
            if(numeroPerros.comida === 'otros'){
                cantiPerros.push(numeroPerros)
            }
        })
        setComidas(cantiPerros)
    }


    return (
        <ImageBackground source={logoImage} style={styles.container}>
        <View style={styles.overlayContainer}>
            <View style={styles.top}>
                <Text style={styles.header}>INVENTARIO</Text>
            </View>
            <Text>total ventas: {totalVentas}</Text>
           <View style={styles.comidas}>
                <Text>hamburguesas vendidas: {hamburgers.length}</Text>
                <Text>total hamburguesas: {ventasHamburguesas}</Text>
                <Button title="inventarioHamburguesas" color='black' onPress={()=>props.navigation.navigate('ventasHamburguesa',{ventasHambur: hamburgers})}/>
           </View>
         
           <View style={styles.comidas}>
                <Text>perros vendidos: {hotDogs.length}</Text>
                <Text>total perros: {ventasPerros}</Text>
                <Button title="inventarioPerros" color="red" onPress={()=>getHotDogs(state)}/>
           </View>
          
           <View style={styles.comidas}>
                <Text>papasLocas vendidas: {crasyPotates.length}</Text>
                <Text>total papaslocas: {ventasPapas}</Text>
                <Button title="inventariopapas" color="black" onPress={()=>getPapasLocas(state)}/>
           </View>
           
           <View style={styles.comidas}>
                <Text>carnes vendidas: {meats.length}</Text>
                <Text>total carnes: {ventasCarnes}</Text>
                <Button title="inventarioCarnes" color="red" onPress={()=>getCarnes(state)}/>
           </View>           

           <View style={styles.comidas}>
                <Text>comidas vendidas: {comidas.length}</Text>
                <Text>total otrasComidas: {ventasComidas}</Text>
                <Button title="inventarioComidas" color="black" onPress={()=>getComidas(state)}/>
           </View>
           
        </View>

    </ImageBackground>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    overlayContainer: {
        flex: 1,
        backgroundColor: 'rgba(47,163,218,.4)'
    },
    top: {
        height: '10%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    header: {
        color: 'red',
        fontSize: 28,
        borderColor: 'black',
        borderWidth: 2,
        paddingRight: 40,
        paddingLeft: 40,
        backgroundColor: 'rbga(255,255,255,.1)'

    },
    menuContainer: {
        flex: 1,
        height: '10%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center'
    },
    comidas: {
        marginTop: '10%'
    }
})
export default inventario
