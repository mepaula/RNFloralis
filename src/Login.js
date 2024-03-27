import React, { useContext, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import AsynStorage from "@react-native-async-storage/async-storage";
import { UserContext } from './Context/UserContext';


export default function Login({ setLogin }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha]= useState("");
  const [erro, setErro] = useState(false);

  const {Login} = useContext( UserContext );
    
    function realizaLogin()
    {
      Login( email, senha );
    }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Faça o login, para ter acesso ao aplicativo</Text>
      <TextInput
        style={styles.input}
        placeholder='email'
        onChangeText={ (digitado) => setEmail( digitado )}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder='senha'
        onChangeText={ (digitado) => setSenha( digitado )}
        value={senha}
      />
      <TouchableOpacity style={styles.button} onPress={realizaLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      {erro && <Text style={styles.errorMessage}>Email ou senha incorreto</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    width: '80%',
    height: 40,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  errorMessage: {
    color: 'red',
  },

});
