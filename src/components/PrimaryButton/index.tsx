import React from 'react';
import { Button, SafeAreaView, Text } from 'react-native';
import { StyledButton, StyledText } from './styles';

interface ButtonProps {
  title: string;
}

const PrimaryButton: React.FC<ButtonProps> = ({ title }) => {
  return (
    <StyledButton>
      <StyledText>{title}</StyledText>
    </StyledButton>
  );
};

export default PrimaryButton;
