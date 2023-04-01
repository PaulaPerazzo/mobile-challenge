import React from 'react';
import { Container, Title, Description, Text } from './styles';
import { InputBox, PrimaryButton, SeconaryButton } from '../../components';

const Login: React.FC = () => {
  console.log('inside login');

  return (
    <Container>
      <Title>Login</Title>

      <Description>E-mail</Description>
      <InputBox placeholder="seu@email.com" />

      <Description>Senha</Description>
      <InputBox placeholder="********" />

      <PrimaryButton title="Entrar" />

      <Text> Não possui uma conta em aca.so? </Text>

      <SeconaryButton title="Criar uma conta" />
    </Container>
  );
};

export default Login;
