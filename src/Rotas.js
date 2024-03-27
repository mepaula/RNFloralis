import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useContext } from "react";

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
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Login" component={Login} />
        <Tab.Screen name="Cadastro" component={Cadastro} />
        <Tab.Screen name="TelaInicial" component={TelaInicial} />
        <Tab.Screen name="Pagamento" component={Pagamento} />
        <Tab.Screen name="Premium" component={Premium} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}