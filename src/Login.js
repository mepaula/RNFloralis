import React, { useContext, useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Animated } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { UserContext } from './Context/UserContext';

export default function Login({ setLogin }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState(false);
  const [logoOpacity] = useState(new Animated.Value(0));

  const { Login } = useContext(UserContext);

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

  const realizaLogin = () => {
    if (email && senha) {
      // Aqui você pode fazer a validação do email e senha antes de chamar o método de login
      Login(email, senha);
    } else {
      setErro(true);
    }
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
        secureTextEntry={true} // Para ocultar a senha enquanto o usuário digita
      />
      <TouchableOpacity style={styles.button} onPress={realizaLogin}>
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
    color: 'red', // Texto em vermelho
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    color: 'white', // Texto em branco
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
    color: 'red', // Texto em vermelho
    marginTop: 10, // Adiciona um espaço entre o botão e a mensagem de erro
  },
});

