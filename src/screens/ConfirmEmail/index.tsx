import React from 'react';
import { Container, Title, Description, Text, StyledImage } from './styles';
import { InputBox, PrimaryButton, SeconaryButton } from '../../components';
import { Logo, LogoPNG } from '../../assets';

const ConfirmEmail: React.FC = () => {
  console.log('inside ConfirmEmail screen');

  return (
    <Container>
      <StyledImage source={LogoPNG} />

      <Title>Confirmar e-mail</Title>

      <InputBox placeholder="seu@email.com" title="Código" />

      <PrimaryButton title="Confirmar e-mail" />

      <Text> Não recebeu o código? </Text>

      <SeconaryButton title="Aguarde x para reeviar" />
    </Container>
  );
};

export default ConfirmEmail;
