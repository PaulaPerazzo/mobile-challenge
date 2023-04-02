import React from 'react';
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
