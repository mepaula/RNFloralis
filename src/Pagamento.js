import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Premium = () => {
  const navigation = useNavigation();
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handleBuyPremium = () => {
    if (cardNumber && expiryDate && cvv) {
      Alert.alert('Parabéns!', 'Você comprou a versão premium com sucesso!', [
        { text: 'OK', onPress: () => navigation.navigate('VersaoPremium') }
      ]);
    } else {
      Alert.alert('Erro', 'Por favor, preencha todas as informações do cartão para continuar.');
    }
  };

  return (
    <View style={styles.container}>
        <Image
        source={require('../assets/escutamusica.png')} //*imagem adicionada como logo
        style={styles.imagem}
      />
      <Text style={styles.title}>Obtenha acesso à versão Premium!</Text>
      <Text style={styles.subtitle}>Por apenas 26,90 por mês</Text>
      <TextInput
        style={styles.input}
        placeholder="Número do Cartão"
        value={cardNumber}
        onChangeText={setCardNumber}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Data de Validade (MM/YY)"
        value={expiryDate}
        onChangeText={setExpiryDate}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="CVV"
        value={cvv}
        onChangeText={setCvv}
        keyboardType="numeric"
        secureTextEntry
      />
      <TouchableOpacity onPress={handleBuyPremium} style={styles.button}>
        <Text style={styles.buttonText}>Comprar Premium</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    width: '80%',
    paddingVertical: 15,
    backgroundColor: 'black',
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
  },
  subtitle: {
    fontSize: 20,
    color: 'gray',
    fontStyle: 'italic',
    marginBottom: 10,
  },
  image: {
    width: 200,
    height: 50,
    marginBottom: 10,
  },
  imagem: {
    width: 200,
    height: 200,
    marginBottom: 10,
  }
});

export default Premium;