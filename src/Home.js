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
      <Text style={styles.welcome}>A melhor plataforma de Músicas!</Text>
      <View style={styles.buttonsContainer}>
      <Text style={styles.text}>Deseja ter acesso as msúsicas gratuitas?</Text>
        <Button
          title="Clique aqui"
          onPress={() => navigation.navigate('TelaInicial')}
          color="red"
          style={styles.button}
        />
      </View>
      <View style={styles.buttonsContainer}>
      <Text style={styles.text}>Quer er acesso a versão Premium?</Text>
        <Button
          title="Clique aqui"
          onPress={() => navigation.navigate('Pagamento')}
          color="red"
          style={styles.button}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
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
    fontSize: 25,
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