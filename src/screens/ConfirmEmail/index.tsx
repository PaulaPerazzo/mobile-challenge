import React, { useState } from 'react';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import axios from 'axios';
import { Container, Title, Text, StyledImage } from './styles';
import { InputBox, PrimaryButton, SeconaryButton } from '../../components';
import { LogoPNG } from '../../assets';

type Props = {
  userEmail: string;
};

const ConfirmEmail = ({ route, navigation }) => {
  const { navigate } = useNavigation<any>();

  const [token, setToken] = useState('');

  const handleTokenChange = (tokenText: string) => {
    setToken(tokenText);
  };

  const userEmail = route.params;

  const handleEmail = () => {
    axios.post('https://api.staging.aca.so/auth/confirm-sign-up', {
      // email: userEmail,
      email: 'mpperazzosampaio@gmail.com',
      confirmation_code: token,
    });
    navigate('Login');
  };

  return (
    <Container
      contentContainerStyle={{ alignItems: 'center', justifyContent: 'center' }}
    >
      <StyledImage source={LogoPNG} />

      <Title>Confirmar e-mail</Title>

      <InputBox
        placeholder="Digite o código recebido..."
        title="Código"
        onChangeText={handleTokenChange}
      />

      <PrimaryButton title="Confirmar e-mail" onPress={handleEmail} />

      <Text> Não recebeu o código? </Text>

      <SeconaryButton title="Aguarde x para reeviar" />
    </Container>
  );
};

export default ConfirmEmail;
