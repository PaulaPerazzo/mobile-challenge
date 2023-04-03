/* eslint-disable no-console */
import React, { useState } from 'react';
import { Alert, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { Container, Title, StyledImage } from './styles';
import {
  InputBox,
  PrimaryButton,
  SeconaryButton,
  InputPasswordBox,
} from '../../components';
import { Logo, LogoPNG } from '../../assets';

interface Props {
  onChangeEmail: (email: string) => void;
  onChangeFirstName: (email: string) => void;
  onChangeLastName: (email: string) => void;
  onChangePassword: (email: string) => void;
  onChangeSecondPassword: (email: string) => void;
}

const SignUp: React.FC = () => {
  const { navigate } = useNavigation<any>();

  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [secondPassword, setSecondPassword] = useState('');

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
  };

  const handleSecondPasswordChange = (passwordText: string) => {
    setSecondPassword(passwordText);
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
        navigate('ConfirmEmail');
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
      />

      <InputPasswordBox
        placeholder="********"
        title="Confirme sua senha *"
        onChangeText={handleSecondPasswordChange}
      />

      <PrimaryButton
        title="Criar sua conta em aca.so"
        onPress={handleCreateAccount}
      />

      <SeconaryButton title="Voltar ao login" onPress={handleBack} />
    </Container>
  );
};

export default SignUp;
