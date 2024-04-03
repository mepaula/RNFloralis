import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';



const Cadastro = ({ navigation }) => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [nascimento, setNascimento] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmacao, setConfirmacao] = useState('');

  const cadastrar = async () => {
    if (!nome || !email || !telefone || !nascimento || !senha || !confirmacao) {
      Alert.alert('Por favor, preencha todos os campos.');
      return;
    }

    if (senha !== confirmacao) {
      Alert.alert('As senhas não coincidem.');
      return;
    }

    try {
      // Supondo que o cadastro seja bem-sucedido, armazene as credenciais
      await AsyncStorage.setItem('email', email);
      await AsyncStorage.setItem('senha', senha);
      
      // Navegue para a tela de login após o cadastro
      navigation.navigate('Login');
    } catch (error) {
      console.error('Erro ao cadastrar:', error);
      Alert.alert('Erro ao cadastrar. Por favor, tente novamente.');
    }
  };
  
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>CADASTRE-SE PARA TER ACESSO AO NOSSO SITE:</Text>
      <Text style={styles.label}>Nome:</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite aqui"
        onChangeText={text => setNome(text)}
        value={nome}
      />
      <Text style={styles.label}>Email:</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite aqui"
        onChangeText={text => setEmail(text)}
        value={email}
        keyboardType="email-address"
      />
      <Text style={styles.label}>Telefone:</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite aqui"
        onChangeText={text => setTelefone(text)}
        value={telefone}
        keyboardType="phone-pad"
      />
      <Text style={styles.label}>Data de Nascimento:</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite aqui"
        onChangeText={text => setNascimento(text)}
        value={nascimento}
        keyboardType="numeric"
      />
      <Text style={styles.label}>Senha:</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite aqui"
        onChangeText={text => setSenha(text)}
        value={senha}
        secureTextEntry={true}
      />
      <Text style={styles.label}>Confirmação de senha:</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite aqui"
        onChangeText={text => setConfirmacao(text)}
        value={confirmacao}
        secureTextEntry={true}
      />
      <Button
        title="CADASTRAR"
        onPress={cadastrar}
        color="red"
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'black',
    color: 'white'
  },
  label: {
    marginBottom: 5,
    fontSize: 16,
    color: 'white'
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    color: 'white' 
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
    textAlign: 'center'
  },
});

export default Cadastro;
