import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  background-color: #030446;
  padding-bottom: 260px;
`;

export const Title = styled.Text`
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 38px;
  text-align: center;

  margin-top: 85px;
  margin-bottom: 100px;
  width: 200px;

  color: #ffffff;
`;

export const Description = styled.Text`
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;

  margin-right: 60%;
  margin-bottom: 8px

  color: #ffffff;
`;

export const Text = styled.Text`
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;

  text-align: center;
  margin-bottom: 10px;
  margin-top: -5px;

  color: #ffffff;
`;

export const StyledImage = styled.Image`
  margin-top: 70px;
`;
