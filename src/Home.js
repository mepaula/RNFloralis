import React, { useContext } from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import { UserContext } from './Context/UserContext';



const Home = ({ navigation }) => {

  const {usuario} = useContext( UserContext );

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/logopulseplataform.png')} //*imagem adicionada como logo
        style={styles.logo}
      />
      <Text style={styles.login}>Bem-vido(a):</Text>
      <Text style={styles.login}>Fazer login</Text>
      <Button 
        title="LOGIN" 
        onPress={() => navigation.navigate('Login')} 
        style={styles.button} 
        color="silver" 
      />
      <Text style={styles.cadastro}>É sua primeira vez aqui?</Text>
      <Button 
        title="ME CADASTRAR" 
        onPress={() => navigation.navigate('Cadastro')} 
        style={styles.button} 
        color="silver" 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black'
  },
  logo: {
    width: 200,
    height: 150,
    marginBottom: 20,
    resizeMode: 'contain'
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 15,
    width: 240,
    height: 50,
    textAlign: 'center'
  },
  login: {
    fontSize: 16,
    marginTop: 20,
    color: 'white',
  },
  cadastro: {
    fontSize: 16,
    marginTop: 20,
    color: 'white'
  },
  button: {
    width: 200, 
    height: 40, 
    marginBottom: 10, 
    borderRadius: 20, 
    justifyContent: 'center', 
    alignItems: 'center',
    color: 'white'
  }
});

export default Home;