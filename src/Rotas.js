import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useContext } from "react";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useBatteryLevel } from 'expo-battery';


import TelaInicial from "./TelaInicial";
import Login from "./Login";
import Cadastro from "./Cadastro";
import NossasPlantas from "./NossasPlantas";
import CatálogoPlantas from "./CatálogoPlantas";
import { UserContext } from './Context/UserContext';


const Tab = createBottomTabNavigator();

export default function Rotas() {

  const { logado, cadastro } = useContext(UserContext);

  if ( !logado && !cadastro ) {
    return (<Login />)
  }

  if( cadastro && !logado ) {
    return( <Cadastro /> )
  }

  
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false
        }}

        >
        <Tab.Screen name="TelaInicial" 
        component={TelaInicial} 
         options={{
          tabBarLabel: 'Início',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home-circle-outline" color={color} size={size} />
          ),
        }}
        />

        <Tab.Screen name="CatálogoPlantas" 
        component={CatálogoPlantas} 
         options={{
          tabBarLabel: 'Catálogo',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="application-edit-outline" color={color} size={size} />
          ),
        }}
        />

        <Tab.Screen name="NossasPlantas" 
          component={NossasPlantas} 
          options={{
            tabBarLabel: 'Minha Lista',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="book-edit" color={color} size={size} />
          ),
        }}
        />

        <Tab.Screen name="Cadastro" 
        component={Cadastro} 
         options={{
          tabBarLabel: 'Cadastro',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-box" color={color} size={size} />
          ),
        }}
        />

        <Tab.Screen name="Login" 
        component={Login} 
         options={{
          tabBarLabel: 'Login',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
        />

      </Tab.Navigator>
    </NavigationContainer>
  );
}