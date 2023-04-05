import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Container, Title, Description, Text, StyledImage } from './styles';
import {
  InputBox,
  PrimaryButton,
  SeconaryButton,
  InputPasswordBox,
} from '../../components';
import { Logo, LogoPNG } from '../../assets';

const Login = () => {
  const { navigate } = useNavigation<any>();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (emailText: string) => {
    setEmail(emailText);
  };

  const handlePasswordChange = (passwordText: string) => {
    setPassword(passwordText);
  };

  const handlePressLogin = async () => {
    try {
      await axios
        .post('https://api.staging.aca.so/auth/login', {
          email,
          password,
        })
        .then((res) => {
          // const id = res.data.user.id;
          const token = res.data.token.id_token;
          AsyncStorage.setItem('token', token);
          navigate('Home', {
            token: res.data.token.id_token,
            id: res.data.user.id,
          });
        });
    } catch (error) {
      console.log(error);
    }
  };

  const handlePressSignUp = () => {
    navigate('SignUp');
  };

  return (
    <Container
      contentContainerStyle={{ alignItems: 'center', justifyContent: 'center' }}
    >
      <StyledImage source={LogoPNG} />

      <Title>Login</Title>

      <InputBox
        placeholder="seu@email.com"
        title="E-mail"
        onChangeText={handleEmailChange}
      />

      <InputPasswordBox
        placeholder="********"
        isPassword
        title="Senha"
        onChangeText={handlePasswordChange}
      />

      <PrimaryButton title="Entrar" onPress={handlePressLogin} />

      <Text> Não possui uma conta em aca.so? </Text>

      <SeconaryButton title="Criar uma conta" onPress={handlePressSignUp} />
    </Container>
  );
};

export default Login;
