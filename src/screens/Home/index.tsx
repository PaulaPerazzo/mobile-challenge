import React from 'react';
import { Image } from 'react-native';
import {
  Container,
  Title,
  Description,
  TextView,
  ImageContainer,
  ElipseImage,
  VectorImage,
} from './styles';
import { PrimaryButton } from '../../components';
import { Galaxy, Elipse, Vector } from '../../assets';

const Home: React.FC = () => {
  console.log('inside ConfirmEmail screen');

  return (
    <Container>
      <ImageContainer>
        <Image source={Galaxy} />
        <ElipseImage source={Elipse} />
        <VectorImage source={Vector} />
      </ImageContainer>
      <TextView>
        <Title style={{ fontWeight: 'bold' }}> João </Title>
        <Title> Carlos </Title>
      </TextView>
      <Description> Ativo há pelo menos x minutos </Description>
      <PrimaryButton title="Sair de aca.so" />
    </Container>
  );
};

export default Home;
