import React from 'react';
import { ScrollView } from 'react-native';
import { Container, Title, Description, Text, StyledImage } from './styles';
import {
  InputBox,
  PrimaryButton,
  SeconaryButton,
  InputPasswordBox,
} from '../../components';
import { Logo, LogoPNG } from '../../assets';

const SignUp: React.FC = () => {
  console.log('inside SignUp');

  return (
    <Container
      contentContainerStyle={{ alignItems: 'center', justifyContent: 'center' }}
    >
      <StyledImage source={LogoPNG} />

      <Title>Cadastro</Title>

      <InputBox placeholder="seu@email.com" title="E-mail * " />

      <InputBox placeholder="Primeiro nome" title="Primeiro nome * " />

      <InputBox placeholder="Último nome" title="Último nome *" />

      <InputPasswordBox placeholder="********" title="Senha *" />

      <InputPasswordBox placeholder="********" title="Confirme sua senha *" />

      <PrimaryButton title="Criar sua conta em aca.so" />

      <SeconaryButton title="Voltar ao login" />
    </Container>
  );
};

export default SignUp;
