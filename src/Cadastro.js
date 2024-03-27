import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const Cadastro = ({ navigation }) => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [nascimento, setNascimento] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmacao, setConfirmacao] = useState('');

  const cadastrar = () => {
    if (!nome || !email || !telefone || !nascimento || !senha || !confirmacao) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    if (senha !== confirmacao) {
      alert('As senhas não coincidem.');
      return;
    }

    // Aqui você pode adicionar a lógica para enviar os dados do usuário para o servidor ou armazenar localmente
    console.log('Nome:', nome);
    console.log('Email:', email);
    console.log('Telefone:', telefone);
    console.log('Data de Nascimento:', nascimento);
    console.log('Senha:', senha);
    console.log('Confirmação de senha:', confirmacao);

    // Após o cadastro, você pode redirecionar o usuário para outra tela, por exemplo:
    // navigation.navigate('TelaInicial', { nome, email });
  };

  return (
    <View style={styles.container}>
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
      <Button title="Cadastrar" onPress={cadastrar} style={styles.button} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  },
  button: {
    backgroundColor: 'red',
  }
});

export default Cadastro;