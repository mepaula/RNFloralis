import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('./logopulseplataform.png')} //*imagem adicionada como logo
        style={styles.logo}
      />
      <Text style={styles.title}>A MELHOR PLATAFORMA!</Text>
      <Text style={styles.login}>Fazer login</Text>
      <Button 
        title="LOGIN" 
        onPress={() => navigation.navigate('Login')} 
        style={styles.button} 
        color="#841584" // Cor do botão
      />
      <Text style={styles.cadastro}>É sua primeira vez aqui?</Text>
      <Button 
        title="ME CADASTRAR" 
        onPress={() => navigation.navigate('Cadastro')} 
        style={styles.button} 
        color="#841584" // Cor do botão
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black', // Fundo preto
  },
  logo: {
    width: 200,
    height: 150,
    marginBottom: 20,
    resizeMode: 'contain', // Ajustado ao tamanho da imagem desejado
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white', // Texto branco
    marginBottom: 45,
    width: 300
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
    width: 200, // Largura do botão
    height: 40, // Altura do botão
    marginBottom: 10, // Espaçamento inferior
    borderRadius: 20, // Borda arredondada
    justifyContent: 'center', // Centraliza o texto dentro do botão
    alignItems: 'center', // Centraliza o texto dentro do botão
    backgroundColor: 'white', // Cor de fundo do botão
  }
});

export default Home;