import styled from 'styled-components/native';

export const StyledButton = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 17px;
  gap: 10px;
  margin-bottom: 24px;

  width: 80%;
  height: 52px;

  background: #ffffff;
  border-radius: 30.5px;

  flex: none;
  flex-grow: 0;
`;

export const StyledText = styled.Text`
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 18px;

  text-align: center;

  color: #000000;
`;
