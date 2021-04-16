import React, { useState } from 'react'
import { View, Text, ImageBackground,StyleSheet,Button } from 'react-native'
import { ScrollView} from 'react-native-gesture-handler'
import { ListItem, Avatar } from 'react-native-elements'
import {hamburguesasi }from '../components/hamburger.json'
import logoAvatar from '../image/background/logo.jpg'

function ventasHamburguesas(props) {

    const data = props.route.params.ventasHambur
    
    const dataa = data.filter((elemento)=>{
        console.log(elemento)
        return elemento.typo =='hamburguer_6'
    })
    console.log(dataa)   
    console.log(data)   

    
    return (
        <ImageBackground source={logoAvatar} style={styles.container}>
        <ScrollView>

            <View style={styles.overlayContainer}>
                <View style={styles.top}>
                    <Text style={styles.header}>ventas hamburguesas</Text>
                </View>
                    {
                        hamburguesasi.map(carne=>{
                            return(
                            
                                <ListItem 
                                bottomDivider 
                                key={carne.id} 
                                style={styles.listItemContainer} 
                                onPress={()=> tomarPedido(carne.id, carne.precio, carne.nombre, carne.comida)}
                                >
                                    <ListItem.Chevron style={styles.listItemChevron}/>
                                    <Avatar
                                        source={logoAvatar}
                                        rounded
                                    />
                                    <ListItem.Content>
                                         <ListItem.Title>{carne.nombre}</ListItem.Title>
                                        <ListItem.Subtitle>{carne.precio}</ListItem.Subtitle>
                                    </ListItem.Content>
                                </ListItem>
                               
                            )
                        })
                    }
            </View>
          
       
        </ScrollView>
        <Button title='tomar Pedido' onPress={()=>props.navigation.navigate('tomarPedido')}/>


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
    opacity: 0.5,
},
listItemChevron:{
    borderBottomColor: 'red'
},
overlayContainer: {
    flex: 1,
    backgroundColor: 'rgba(47,163,218,.4)'
},
top: {
    height: '5%',
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
export default ventasHamburguesas
