import React, { useContext, useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Animated } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { UserContext } from './Context/UserContext';

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState(false);
  const [logoOpacity] = useState(new Animated.Value(0));

  const { TelaInicial, Login } = useContext(UserContext);

  useEffect(() => {
    fadeInLogo();
  }, []);

  const fadeInLogo = () => {
    Animated.timing(logoOpacity, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true
    }).start();
  }
  return (
    <View style={styles.container}>
      <Animated.Image
        source={require('../assets/logo-usuario.png')}
        style={[styles.logo, { opacity: logoOpacity }]}
      />
      <Text style={styles.title}>Faça login para acessar o aplicativo</Text>
      <TextInput
        style={styles.input}
        placeholder='E-mail'
        onChangeText={(digitado) => setEmail(digitado)}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder='Senha'
        onChangeText={(digitado) => setSenha(digitado)}
        value={senha}
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.button} onPress={Login( email, senha )}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      {erro && <Text style={styles.errorMessage}>Email ou senha incorretos</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 35,
  },
  title: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
    color: 'red', 
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    color: 'white', 
  },
  button: {
    width: '80%',
    height: 40,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  errorMessage: {
    color: 'red', 
    marginTop: 10,
  },
});



