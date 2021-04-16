import React from 'react'
import {View, Text, ImageBackground,StyleSheet,Button} from 'react-native'
import { otrasComidas} from '../components/hamburger.json'
import { ListItem, Avatar } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler'
import firebase from '../database/firebase'

const logoImage = require('../image/patacon.jpg')

function otros(props) {
  
    const tomarPedido = (id,name,price,comida)=>{
        firebase.db.collection('pedido').add({
            id,
            name,
            price,
            comida
        })
    }
    return (
        <ImageBackground source={logoImage} style={styles.container}>
        <ScrollView>

            <View style={styles.overlayContainer}>
                <View style={styles.top}>
                    <Text style={styles.header}>OTRAS COMIDAS</Text>
                </View>
                    {
                        otrasComidas.map(comi=>{
                            return(
                                <ListItem 
                                bottomDivider
                                key={comi.id} 
                                style={styles.listItemContainer}
                                onPress={()=>tomarPedido(comi.id, comi.nombre, comi.precio, comi.comida)}
                                >
                                    <ListItem.Chevron style={styles.listItemChevron}/>
                                    <Avatar
                                        source={logoImage}
                                        rounded
                                    />
                                    <ListItem.Content>
                                         <ListItem.Title>{comi.nombre}</ListItem.Title>
                                         <ListItem.Subtitle>{comi.precio}</ListItem.Subtitle>

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
export default otros
