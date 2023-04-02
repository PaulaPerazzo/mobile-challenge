import React from 'react';
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Container, Title, StyledImage } from './styles';
import {
  InputBox,
  PrimaryButton,
  SeconaryButton,
  InputPasswordBox,
} from '../../components';
import { Logo, LogoPNG } from '../../assets';

const SignUp: React.FC = () => {
  const { navigate } = useNavigation<any>();

  const handleCreateAccount = () => {
    navigate('ConfirmEmail');
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

      <InputBox placeholder="seu@email.com" title="E-mail * " />

      <InputBox placeholder="Primeiro nome" title="Primeiro nome * " />

      <InputBox placeholder="Último nome" title="Último nome *" />

      <InputPasswordBox placeholder="********" title="Senha *" />

      <InputPasswordBox placeholder="********" title="Confirme sua senha *" />

      <PrimaryButton
        title="Criar sua conta em aca.so"
        onPress={handleCreateAccount}
      />

      <SeconaryButton title="Voltar ao login" onPress={handleBack} />
    </Container>
  );
};

export default SignUp;
