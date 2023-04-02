import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #000004;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 130px;
`;

export const Title = styled.Text`
  font-family: 'Raleway-Regular';
  font-style: italic;
  font-weight: 700;
  font-size: 51px;
  line-height: 60px;
  text-align: center;
  text-transform: uppercase;

  width: 200px;
  margin-bottom: -50px;

  color: #ffffff;
`;

export const Description = styled.Text`
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;

  margin-bottom: 52px;
  margin-top: -160px;

  color: #ffffff;
`;

export const TextView = styled.View`
  margin-bottom: 250px;
  margin-top: 50px;
`;

export const ImageContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  margin-bottom: -130px;
`;

export const ElipseImage = styled.Image`
  position: absolute;
`;

export const VectorImage = styled.Image`
  position: absolute;
  right: 140px;
  top: 280px;
`;

export const AvatarImage = styled.Image`
  position: absolute;
`;
