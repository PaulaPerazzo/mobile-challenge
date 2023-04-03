/* eslint-disable no-console */
import React, { useState } from 'react';
import { Alert, ScrollView, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { Container, Title, StyledImage, ErrorText } from './styles';
import {
  InputBox,
  PrimaryButton,
  SeconaryButton,
  InputPasswordBox,
} from '../../components';
import { Logo, LogoPNG } from '../../assets';

type Props = {
  userEmail: string;
};

const SignUp = ({ userEmail }: Props) => {
  const { navigate } = useNavigation<any>();

  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [secondPassword, setSecondPassword] = useState('');
  const [matchPassword, setMatchPassword] = useState(true);
  const [error, setError] = useState(false);

  const handleEmailChange = (emailText: string) => {
    setEmail(emailText);
  };

  const handleFirstNameChange = (firstNameText: string) => {
    setFirstName(firstNameText);
  };

  const handleLastNameChange = (lastNameText: string) => {
    setLastName(lastNameText);
  };

  const handlePasswordChange = (passwordText: string) => {
    setPassword(passwordText);
    setError(false);

    if (passwordText !== secondPassword) {
      setMatchPassword(false);
      setError(true);
    } else {
      setMatchPassword(true);
      setError(false);
    }
  };

  const handleSecondPasswordChange = (passwordText: string) => {
    setSecondPassword(passwordText);
    setError(false);

    if (password !== passwordText) {
      setMatchPassword(false);
      setError(true);
    } else {
      setMatchPassword(true);
      setError(false);
    }
  };

  const handleCreateAccount = () => {
    axios
      .post('https://api.staging.aca.so/auth/sign-up', {
        email,
        first_name: firstName,
        last_name: lastName,
        password,
      })
      .then((res) => {
        console.log(res);
        navigate('ConfirmEmail', { userEmail: email });
      });
  };

  const handleBack = () => {
    navigate('Login');
  };

  return (
    <Container
      contentContainerStyle={{ alignItems: 'center', justifyContent: 'center' }}
    >
      <StyledImage source={LogoPNG} />

      <Title>Cadastro</Title>

      <InputBox
        placeholder="seu@email.com"
        title="E-mail * "
        onChangeText={handleEmailChange}
      />

      <InputBox
        placeholder="Primeiro nome"
        title="Primeiro nome * "
        onChangeText={handleFirstNameChange}
      />

      <InputBox
        placeholder="Último nome"
        title="Último nome *"
        onChangeText={handleLastNameChange}
      />

      <InputPasswordBox
        placeholder="********"
        title="Senha *"
        onChangeText={handlePasswordChange}
        error={error}
      />

      {!matchPassword && <ErrorText> senhas não coincidem </ErrorText>}

      <InputPasswordBox
        placeholder="********"
        title="Confirme sua senha *"
        onChangeText={handleSecondPasswordChange}
        error={error}
      />

      {!matchPassword && <ErrorText> senhas não coincidem </ErrorText>}

      <PrimaryButton
        title="Criar sua conta em aca.so"
        onPress={handleCreateAccount}
        disabled={!matchPassword}
      />

      <SeconaryButton title="Voltar ao login" onPress={handleBack} />
    </Container>
  );
};

export default SignUp;
