import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import menu from './screens/menu'
import hamburguesas from './screens/hamburguesas'
import perros from './screens/perros'
import papas from './screens/papas'
import carnes from './screens/carnes'
import otros from './screens/otros'
import inventario from './screens/inventario'
import vevidas from './screens/vevidas'
import TomarPedido from './screens/TomarPedido'
import pedidoCosinandose from './screens/PedidosCosinandose'
import ventasHamburguesas from './screens/ventasHamburguesas'

const Stack = createStackNavigator()

const MyStack = ()=>{
  return(
    <Stack.Navigator>
      <Stack.Screen name='menu' component={menu} options={{title: 'menu'}}/>
      <Stack.Screen name='hamburguesas' component={hamburguesas} />
      <Stack.Screen name='perros' component={perros} options={{title: 'perros'}}/>
      <Stack.Screen name='carnes' component={carnes} options={{title: 'carnes'}}/>
      <Stack.Screen name='papas' component={papas} options={{title: 'papas'}}/>
      <Stack.Screen name='otros' component={otros} options={{title: 'otros'}}/>
      <Stack.Screen name='inventario' component={inventario} options={{title: 'inventario'}}/>
      <Stack.Screen name='vevidas' component={vevidas} options={{title: 'inventario'}}/>
      <Stack.Screen name='tomarPedido' component={TomarPedido} options={{title: 'Pedidos'}}/>
      <Stack.Screen name='pedidoCosinandose' component={pedidoCosinandose} options={{title: 'Pedidos'}}/>
      <Stack.Screen name='ventasHamburguesa' component={ventasHamburguesas} options={{title: 'ventas hamburguesas'}}/>

    </Stack.Navigator>
  )
}

export default function App() {
  return (
   <NavigationContainer>
     <MyStack/>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
