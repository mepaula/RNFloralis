import React, { useContext } from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import { UserContext } from './Context/UserContext';

const Home = ({ navigation }) => {
  const { usuario } = useContext(UserContext);

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/logopulseplataform.png')}
        style={styles.logo}
      />
      <Text style={styles.welcome}>Bem-vindo(a) ao Pulse Plataform</Text>
      <Text style={styles.login}>Já tem uma conta? Faça login!</Text>
      <Button
        title="LOGIN"
        onPress={() => navigation.navigate('Login')}
        style={styles.button}
        color="red"
      />
      <Text style={styles.signup}>É sua primeira vez aqui?</Text>
      <Button
        title="ME CADASTRAR"
        onPress={() => navigation.navigate('Cadastro')}
        style={styles.button}
        color="red"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000',
  },
  logo: {
    width: 200,
    height: 150,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  welcome: {
    fontSize: 24,
    color: '#FFFFFF',
    marginBottom: 20,
    textAlign: 'center',
    borderColor: 'red',
  },
  login: {
    fontSize: 18,
    color: '#FFFFFF',
    marginBottom: 20,
    borderColor: 'red',
  },
  signup: {
    fontSize: 18,
    color: '#FFFFFF',
    marginBottom: 20,
    borderColor: 'red',
  },
  button: {
    width: 200,
    height: 40,
    marginBottom: 10,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'red',
  },
});

export default Home;