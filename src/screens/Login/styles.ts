import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: red;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 38px;
  text-align: center;

  color: #ffffff;
`;

export const Description = styled.Text`
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;

  color: #ffffff;
`;

export const Text = styled.Text`
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;

  text-align: center;

  color: #ffffff;
`;
