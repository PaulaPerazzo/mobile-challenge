import React from 'react';
import { ScrollView } from 'react-native';
import { Container, Title, Description, Text, StyledImage } from './styles';
import { InputBox, PrimaryButton, SeconaryButton } from '../../components';
import { Logo, LogoPNG } from '../../assets';

const SignUp: React.FC = () => {
  console.log('inside SignUp');

  return (
    <Container
      contentContainerStyle={{ alignItems: 'center', justifyContent: 'center' }}
    >
      <StyledImage source={LogoPNG} />

      <Title>Cadastro</Title>

      <Description>E-mail* </Description>
      <InputBox placeholder="seu@email.com" />

      <Description>Primeiro nome* </Description>
      <InputBox placeholder="Primeiro nome" />

      <Description>Último nome* </Description>
      <InputBox placeholder="Último nome" />

      <Description>Senha</Description>
      <InputBox placeholder="********" />

      <Description>Confirme sua senha</Description>
      <InputBox placeholder="********" />

      <PrimaryButton title="Criar sua conta em aca.so" />

      <SeconaryButton title="Voltar ao login" />
    </Container>
  );
};

export default SignUp;
