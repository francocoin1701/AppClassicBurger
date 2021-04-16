import React from 'react'
import {View, Text,ImageBackground,StyleSheet, Button} from 'react-native'
import { papasLocas } from '../components/hamburger.json'
import { ListItem, Avatar } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler'
import firebase from '../database/firebase'

const logoImage = require('../image/papasLocas.jpg')

function papas(props) {
    const tomarPedido = (id,name,price,comida)=>{
        let fecha = new Date()
        firebase.db.collection('pedido').add({
            id,
            name,
            price,
            comida
        })
        console.log(fecha)
    }
    return (
        <ImageBackground source={logoImage} style={styles.container}>
        <ScrollView>

            <View style={styles.overlayContainer}>
                <View style={styles.top}>
                    <Text style={styles.header}>PAPAS LOCAS</Text>
                </View>
                    {
                        papasLocas.map(hambur=>{
                            return(
                                <ListItem 
                                bottomDivider 
                                key={hambur.id} 
                                style={styles.listItemContainer}
                                onPress={()=> tomarPedido(hambur.id, hambur.nombre, hambur.precio, hambur.comida)}
                                >
                                    <ListItem.Chevron style={styles.listItemChevron}/>
                                    <Avatar
                                        source={logoImage}
                                        rounded
                                    />
                                    <ListItem.Content>
                                         <ListItem.Title>{hambur.nombre}</ListItem.Title>
                                         <ListItem.Subtitle>{hambur.precio}</ListItem.Subtitle>
                                    </ListItem.Content>
                                </ListItem>
                            )
                        })
                    }

            </View>
            <Button title='tomar pedido' onPress={()=>props.navigation.navigate('tomarPedido')}/>
       
        </ScrollView>

    </ImageBackground>
)
}
const styles = StyleSheet.create({
container: {
    flex: 1,
    width: '100%',
    height: '100%',
},
listItemContainer:{
    opacity: 0.57,
},
listItemChevron:{
    borderBottomColor: 'red'
},
overlayContainer: {
    flex: 1,
    backgroundColor: 'rgba(47,163,218,.4)'
},
top: {
    height: '10%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 2
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
}
})
export default papas
