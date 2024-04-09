import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useContext } from "react";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from "./Home";
import Login from "./Login";
import Cadastro from "./Cadastro";
import TelaInicial from "./TelaInicial";
import Pagamento from "./Pagamento";
import Premium from "./Premium";

import { UserContext } from './Context/UserContext';


const Tab = createBottomTabNavigator();

export default function Rotas() {

  const { logado } = useContext(UserContext);
  if (logado == false) {
    return (<Login />)
  }
  
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Tab.Screen name="Home" 
        component={Home} 
         options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home-circle-outline" color={color} size={size} />
          ),
        }}
        />
        <Tab.Screen name="TelaInicial" 
        component={TelaInicial} 
         options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="music-circle" color={color} size={size} />
          ),
        }}
        />
        <Tab.Screen name="Pagamento" 
        component={Pagamento} 
         options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cash-fast" color={color} size={size} />
          ),
        }}
        />
         <Tab.Screen name="Premium" 
        component={Premium} 
         options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="motion-play" color={color} size={size} />
          ),
        }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}