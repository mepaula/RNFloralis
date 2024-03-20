import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image
        style={styles.logo}
        source={require('./fotousuário.png')}
      />

      <Text style={styles.title}>FAZER LOGIN</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Insira seu Email:"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.textInput}
        placeholder="Insira sua senha:"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button 
        title="ENTRAR" 
        onPress={handleLogin} 
        style={styles.button} 
        color="#841584" // Cor do botão
      />
      <Text style={styles.registerText}>Não é Cadastrado ainda? Cadastre-se</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black'
  },
  textInput: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    color: 'black'
  },
  registerText: {
    marginTop: 20,
    color: "#841584",
  },
});

export default Login;