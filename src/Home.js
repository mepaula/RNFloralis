import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { UserContext } from './Context/UserContext';

const Home = ({ navigation }) => {
  const { usuario } = useContext(UserContext);

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/logopulseplataform.png')}
        style={styles.logo}
      />
      <Text style={styles.welcome}>Bem-Vindo ao Pulse Platform</Text>
      
      <View style={styles.buttonContainer}>
        <Text style={styles.text}>Acesse nossas músicas gratuitas</Text>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#FF5050' }]}
          onPress={() => navigation.navigate('TelaInicial')}
        >
          <Text style={styles.buttonText}>Acessar Gratuitamente</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.buttonContainer}>
        <Text style={styles.text}>Experimente a versão Premium</Text>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#FF5050ed' }]}
          onPress={() => navigation.navigate('Pagamento')}
        >
          <Text style={styles.buttonText}>Experimentar Premium</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 250,
    height: 125,
    marginBottom: 40,
    resizeMode: 'contain',
  },
  welcome: {
    fontSize: 28,
    color: '#FFF',
    marginBottom: 20,
    textAlign: 'center',
    fontFamily: 'Roboto', 
  },
  text: {
    fontSize: 18,
    color: '#FFF',
    marginBottom: 10,
    textAlign: 'center',
    fontFamily: 'Roboto', 
  },
  buttonContainer: {
    marginBottom: 20,
    width: '80%',
  },
  button: {
    borderRadius: 25,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8, 
  },
  buttonText: {
    fontSize: 18,
    color: '#FFF',
    fontFamily: 'Roboto', 
  },
});

export default Home;


