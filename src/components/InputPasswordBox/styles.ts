import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#fff',
  placeholderTextOpacity: 0.5,
})`
  width: 80%;
  height: 50px;
  padding: 10px;
  margin-bottom: 24px;

  background: #1e1f2f;
  border-radius: 6px;

  font-family: 'Raleway';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;

  color: #fff;
`;

export const TogglePasswordVisibilityButton = styled.TouchableOpacity`
  /* top: 55%;
  right: 6%;
  position: absolute; */
`;

export const Icon = styled(Feather)`
  font-size: 20px;
  position: relative;
`;

export const Title = styled.Text`
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;

  margin-bottom: 8px;
  align-items: flex-start;

  color: #ffffff;
`;

export const InputContainer = styled.View`
  flex: 1;
  flex-direction: column;

  width: 100%;
  justify-content: center;
  align-items: flex-start;
  margin-right: -90px;
`;

export const StyledImage = styled.Image`
  position: absolute;
  left: 275px;
  bottom: 43px;
`;
