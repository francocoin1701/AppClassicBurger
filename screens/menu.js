import React from 'react'
import { View, ImageBackground, Image, StyleSheet, Text, Button } from 'react-native'
const logoImage = require('../image/background/logo.jpg')

export function button() {

}

function menu(props) {
    const hamburguesas = ()=>{
        props.navigation.navigate('hamburguesas')
    }
    const carnes = ()=>{
        props.navigation.navigate('carnes')
    }
    const papas = ()=>{
        props.navigation.navigate('papas')
    }
    const perros = ()=>{
        props.navigation.navigate('perros')
    }
    const otros = ()=>{
        props.navigation.navigate('otros')
    }
    const inventario = ()=>{
        props.navigation.navigate('inventario')
    }
    const vevidas = ()=>{
        props.navigation.navigate('vevidas')
    }
    return (
        <ImageBackground source={logoImage} style={styles.container}>
        <View style={styles.overlayContainer}>
            <View style={styles.top}>
                <Text style={styles.header}>MENU</Text>
            </View>
            <View style={styles.menuContainer}>
                <Button onPress={hamburguesas} title='hamburg' color='black'/>
                <Button onPress={perros} title='perrosC' color='red'/>
                <Button onPress={carnes} title='carnesC' color='black'/>
                <Button onPress={papas} title='papasLo' color='red'/>
                <Button onPress={otros} title='otrasCo' color='black'/>
                <Button onPress={vevidas} title='vevidas' color='red'/>
                <Button onPress={inventario} title='inventario' color='green'/>
            </View>
            

        </View>

    </ImageBackground>
       
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%'
    },
    overlayContainer: {
        flex: 1,
        backgroundColor: 'rgba(47,163,218,.4)'
    },
    top: {
        height: '50%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    header: {
        color: 'black',
        fontSize: 28,
        borderColor: 'red',
        borderWidth: 2,
        padding: 20,
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
export default menu

