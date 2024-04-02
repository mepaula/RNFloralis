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
      <Text style={styles.welcome}>Bem-vindo(a) ao Pulse Platform</Text>
      <View style={styles.buttonsContainer}>
        <Button
          title="LOGIN"
          onPress={() => navigation.navigate('Login')}
          color="red"
          style={styles.button}
        />
        <Text style={styles.text}>Já tem uma conta? Faça login!</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <Button
          title="ME CADASTRAR"
          onPress={() => navigation.navigate('Cadastro')}
          color="red"
          style={styles.button}
        />
        <Text style={styles.text}>É sua primeira vez aqui?</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 150,
    marginBottom: 40,
    resizeMode: 'contain',
  },
  welcome: {
    fontSize: 24,
    color: '#FFFFFF',
    marginBottom: 20,
    textAlign: 'center',
  },
  text: {
    fontSize: 18,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  buttonsContainer: {
    width: '80%',
    marginBottom: 20,
  },
  button: {
    marginBottom: 10,
    borderRadius: 20,
    height: 50,
  },
});

export default Home;