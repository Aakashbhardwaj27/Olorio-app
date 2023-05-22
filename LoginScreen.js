import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import SignupScreen from './SignupScreen';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const [loginForm,setLoginForm]=useState(true)
  const handleLogin = () => {
    // Implement your login logic here
    // For this example, we'll just navigate to the home screen
    // navigation.navigate('Home');
  };

  return (
    loginForm?
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.link} onPress={() => setLoginForm(false)}>
        <Text>Don't have an account? Sign up here</Text>
      </TouchableOpacity>
    </View>:<SignupScreen handleSwitch={()=>{setLoginForm(true)}} />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:'100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 10,
    width: '80%',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#D1B000',
    padding: 10,
    borderRadius: 4,
    width:'80%'
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
  link: {
    marginTop: 20,
  },
});
