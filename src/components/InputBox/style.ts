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
