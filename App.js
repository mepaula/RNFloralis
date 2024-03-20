import 'react-native-gesture-handler';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Home from "./src/Home";
import Login from "./src/Login";
import Cadastro from "./src/Cadastro";
import TelaInicial from "./src/TelaInicial";

const Tab = createBottomTabNavigator();


export default function App() {
  return (
    <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Login" component={Login} />
      <Tab.Screen name="Cadastro" component={Cadastro} />
      <Tab.Screen name="TelaInicial" component={TelaInicial} />
    </Tab.Navigator>
  </NavigationContainer>
  );
}