import React from 'react';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  Container,
  Title,
  Description,
  TextView,
  ImageContainer,
  ElipseImage,
  VectorImage,
  AvatarImage,
} from './styles';
import { PrimaryButton } from '../../components';
import { Galaxy, Elipse, Vector, Avatar } from '../../assets';

const Home: React.FC = () => {
  const { navigate } = useNavigation<any>();

  const handleLogout = () => {
    navigate('Login');
  };

  return (
    <Container>
      <ImageContainer>
        <Image source={Galaxy} />
        <ElipseImage source={Elipse} />
        <AvatarImage source={Avatar} />
        <VectorImage source={Vector} />
      </ImageContainer>
      <TextView>
        <Title style={{ fontWeight: 'bold' }}> João </Title>
        <Title> Carlos </Title>
      </TextView>
      <Description> Ativo há pelo menos x minutos </Description>
      <PrimaryButton title="Sair de aca.so" onPress={handleLogout} />
    </Container>
  );
};

export default Home;
