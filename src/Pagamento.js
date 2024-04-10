//SÓ DANDO UM BREVE AVISO QUE ESSA PARTE É FEITA ATÉ QUANDO NÃO FOR COLOCADO 
//DADOS DO CARTÃO, POR CONTA DA PRIVACIDADE, MAS SE FOSSE PARA SER REALMENTE UM 
//APLICATIVO FUNCIONAL, O USUÁRIO SERIA OBRIGADO Á COLOCAR OS DADOS DO CARTÃO

import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import Premium from './Premium'; 

import { useBatteryLevel } from 'expo-battery';

const Pagamento = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [paymentConfirmed, setPaymentConfirmed] = useState(false);
  const batteryLevel = useBatteryLevel();

  const handlePayment = () => {
    // Verificar a bateria antes do pagamento
    if (batteryLevel !== null && batteryLevel < 0.15) {
      Alert.alert('Atenção', 'A bateria do dispositivo está abaixo de 15%. O pagamento será processado após um minuto.');
      setTimeout(() => {
        processPayment();
      }, 60000); // 1 minuto de atraso
    } else {
      processPayment(); // Processa o pagamento imediatamente se a bateria estiver acima de 15%
    }
  };

  const processPayment = () => {
    // Simulando um pagamento bem-sucedido
    setTimeout(() => {
      Alert.alert('Pagamento Confirmado', 'Cobrança realizada com sucesso!');
      setPaymentConfirmed(true); // Define que o pagamento foi confirmado
    }, 2000);
  };

  if (paymentConfirmed) {
    return <Premium />; // Se o pagamento estiver confirmado, exibe a tela premium
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Deseja ter acesso a nova versão? Pague apenas R$25,00 por mês!</Text>
      <Text style={styles.title}>Informe os dados do cartão</Text>
      <TextInput
        style={styles.input}
        placeholder="Número do Cartão"
        keyboardType="numeric"
        value={cardNumber}
        onChangeText={setCardNumber}
      />
      <TextInput
        style={styles.input}
        placeholder="Data de Validade (MM/YY)"
        keyboardType="numeric"
        value={expiryDate}
        onChangeText={setExpiryDate}
      />
      <TextInput
        style={styles.input}
        placeholder="CVV"
        keyboardType="numeric"
        value={cvv}
        onChangeText={setCvv}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={handlePayment}
      >
        <Text style={styles.buttonText}>Confirmar Pagamento</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'red',
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    color: 'white',
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    color: 'white'
  },
  button: {
    width: '100%',
    padding: 10,
    backgroundColor: 'black',
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  titulo: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
    color: 'white',
  },
});

export default Pagamento;


