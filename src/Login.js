import React, { useContext, useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Animated } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { UserContext } from './Context/UserContext';

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState(false);
  const [logoOpacity] = useState(new Animated.Value(0));

  const { TelaInicial, Login, setCadastro } = useContext(UserContext);

  useEffect(() => {
    fadeInLogo();
  }, []);

  const fadeInLogo = () => {
    Animated.timing(logoOpacity, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: false
    }).start();
  };

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require('../assets/logo-floralis.jpeg')}
        style={[styles.logo, { opacity: logoOpacity }]}
      />
      <Text style={styles.title}>Faça login para acessar o aplicativo</Text>
      <TextInput
        style={styles.input}
        placeholder='E-mail'
        placeholderTextColor="#999"
        onChangeText={(digitado) => setEmail(digitado)}
        value={email}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder='Senha'
        placeholderTextColor="#999"
        onChangeText={(digitado) => setSenha(digitado)}
        value={senha}
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.button} onPress={() => Login(email, senha)}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      {erro && <Text style={styles.errorMessage}>Email ou senha incorretos</Text>}
      
      {/* Botão que leva o usuário para a tela de cadastro */}
      <TouchableOpacity style={styles.cadastroButton} onPress={() => setCadastro(true)}>
        <Text style={styles.cadastrarTexto}>Ainda não é cadastrado? Cadastre-se</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',  // Fundo claro
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
    color: '#006400',  // Verde escuro
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#006400',  // Verde escuro nas bordas
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    color: '#333',  // Texto mais escuro
    backgroundColor: '#FFFFFF',  // Fundo branco nos inputs
  },
  button: {
    width: '80%',
    height: 40,
    backgroundColor: '#006400',  // Botão com fundo verde escuro
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: '#FFFFFF',  // Texto branco
    fontSize: 16,
  },
  errorMessage: {
    color: 'red', 
    marginTop: 10,
  },
  cadastrarTexto: {
    color: '#FFFFFF',  // Texto branco no botão de cadastro
    fontSize: 16,
  },
  cadastroButton: {
    width: '80%',
    height: 40,
    backgroundColor: '#006400',  // Botão com fundo verde escuro
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10,
  },
});