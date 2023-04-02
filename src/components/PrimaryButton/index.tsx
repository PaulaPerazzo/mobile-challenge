import React from 'react';
import { StyledButton, StyledText } from './styles';

interface ButtonProps {
  title: string;
  onPress?: () => void | Promise<void>;
}

const PrimaryButton: React.FC<ButtonProps> = ({ title, onPress }) => {
  return (
    <StyledButton onPress={onPress}>
      <StyledText>{title}</StyledText>
    </StyledButton>
  );
};

export default PrimaryButton;
