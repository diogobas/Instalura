import React, { useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { View, TextInput, Button, Text, Platform } from 'react-native';
import style from './Login.style';
import logIn from '../../../api/login';

const Login = ({ navigation }) => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const tryLogin = async () => {
    try {
      const token = await logIn(user, password);

      await AsyncStorage.setItem('instalura_token', token);

      // await AsyncStorage.getItem('instalura_token');

      navigation.push('Feed');
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <>
      <View style={style.container}>
        <TextInput
          style={style.inputs}
          placeholder="User"
          onChangeText={text => setUser(text)}
        />
        <TextInput
          style={style.inputs}
          placeholder="Password"
          secureTextEntry
          onChangeText={text => setPassword(text)}
        />
        <Text>{errorMessage}</Text>
      </View>

      <View style={style.buttonView}>
        <Button title="Enter" onPress={tryLogin} />
      </View>
    </>
  );
};

export default Login;
