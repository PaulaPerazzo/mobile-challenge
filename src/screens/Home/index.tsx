import React, { useCallback, useEffect, useState } from 'react';
import { Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios, { AxiosResponse } from 'axios';
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
import api from '../../services/api';

const Home: React.FC = ({ route }) => {
  const { navigate } = useNavigation<any>();

  const [userData, setuserdata] = useState<any>();
  const [userId, setUserId] = useState<any>();

  const handleLogout = () => {
    navigate('Login');
  };

  // const { token } = route.params.token;
  const { id } = route.params;
  const { token } = route.params;

  useEffect(() => {
    const getUserData = async () => {
      try {
        const user = await axios.get(
          `https://api.staging.aca.so/user/profile/${userId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );
        setuserdata(user);
      } catch (error) {
        if (error.response && error.status === 404) {
          api.interceptors.response.use(
            (response: AxiosResponse) => response,
            async (error) => {
              if (error.response.status === 404) {
                const userResponse = await api.post(
                  '/user',
                  {
                    nickname: 'User Test',
                    bio: 'string',
                    birthday: '2023-04-05',
                    children_qty: 0,
                    civil_state: 'Solteiro(a)',
                    instagram: 'string',
                    whats_app: 'string',
                    linkedin: 'string',
                    skills_want: [],
                    skills_can: [],
                    hobbies: [],
                  },
                  {
                    headers: {
                      Authorization: `Bearer ${token}`,
                    },
                  },
                );
                setUserId('userResponse.data');
                console.log(userResponse);
              }
              return Promise.reject(error);
            },
          );
        }
      }
    };
    getUserData();
  }, [userId]);

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
      <Text>{userId}</Text>
    </Container>
  );
};

export default Home;
