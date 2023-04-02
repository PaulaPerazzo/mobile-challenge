import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Container, Title, Text, StyledImage } from './styles';
import { InputBox, PrimaryButton, SeconaryButton } from '../../components';
import { LogoPNG } from '../../assets';

const ConfirmEmail: React.FC = () => {
  const { navigate } = useNavigation<any>();

  const handleEmail = () => {
    navigate('Login');
  };

  return (
    <Container>
      <StyledImage source={LogoPNG} />

      <Title>Confirmar e-mail</Title>

      <InputBox placeholder="seu@email.com" title="Código" />

      <PrimaryButton title="Confirmar e-mail" onPress={handleEmail} />

      <Text> Não recebeu o código? </Text>

      <SeconaryButton title="Aguarde x para reeviar" />
    </Container>
  );
};

export default ConfirmEmail;
