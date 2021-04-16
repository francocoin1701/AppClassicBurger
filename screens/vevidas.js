import React from 'react'
import { View, Text,ImageBackground,StyleSheet} from 'react-native'
const logoImage = require('../image/background/banner.jpg')


function vevidas() {
    return (
        <ImageBackground source={logoImage} style={styles.container}>
        <View style={styles.overlayContainer}>
            <View style={styles.top}>
                <Text style={styles.header}>HAMBURGER</Text>
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
    }
})

export default vevidas
