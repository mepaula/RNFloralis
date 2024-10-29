import React, { useContext, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Alert, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserContext } from './Context/UserContext';

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
      await AsyncStorage.setItem('email', email);
      await AsyncStorage.setItem('senha', senha);

      const { Login } = useContext(UserContext);

    } catch (error) {
      console.error('Erro ao cadastrar:', error);
      Alert.alert('Erro ao cadastrar. Por favor, tente novamente.');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require('../assets/logo-floralis.jpeg')}
        style={styles.logo}
      />
      <Text style={styles.titulo}>CADASTRO</Text>

      <Text style={styles.label}>Nome:</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite aqui"
        onChangeText={text => setNome(text)}
        value={nome}
        placeholderTextColor="#999"
      />

      <Text style={styles.label}>Email:</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite aqui"
        onChangeText={text => setEmail(text)}
        value={email}
        keyboardType="email-address"
        placeholderTextColor="#999"
      />

      <Text style={styles.label}>Telefone:</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite aqui"
        onChangeText={text => setTelefone(text)}
        value={telefone}
        keyboardType="phone-pad"
        placeholderTextColor="#999"
      />

      <Text style={styles.label}>Data de Nascimento:</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite aqui"
        onChangeText={text => setNascimento(text)}
        value={nascimento}
        keyboardType="numeric"
        placeholderTextColor="#999"
      />

      <Text style={styles.label}>Senha:</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite aqui"
        onChangeText={text => setSenha(text)}
        value={senha}
        secureTextEntry={true}
        placeholderTextColor="#999"
      />

      <Text style={styles.label}>Confirmação de senha:</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite aqui"
        onChangeText={text => setConfirmacao(text)}
        value={confirmacao}
        secureTextEntry={true}
        placeholderTextColor="#999"
      />

      <Button style={styles.button}
        title="CADASTRAR"
        onPress={cadastrar}
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
    backgroundColor: '#F5F5F5',  // Fundo claro para contraste
  },
  logo: {
    width: 90,
    height: 70,
    marginBottom: 20,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#006400', // Verde escuro para consistência
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    color: '#333',  // Tom de cinza para legibilidade
    marginBottom: 5,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#006400', // Verde escuro nas bordas
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
    color: '#333',  // Texto mais escuro
    backgroundColor: '#FFFFFF',  // Fundo branco para inputs
  },
  button: {
    backgroundColor: '#006400',
    color: '#FFFFFF', // Botão com fundo verde escuro e texto branco
  },
});

export default Cadastro;