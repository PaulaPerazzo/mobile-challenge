import React from 'react';
import { StyledButton, StyledText } from './styles';

interface ButtonProps {
  title: string;
  onPress?: () => void | Promise<void>;
  disabled?: boolean;
}

const PrimaryButton: React.FC<ButtonProps> = ({ title, onPress, disabled }) => {
  return (
    <StyledButton onPress={onPress} disabled={disabled}>
      <StyledText>{title}</StyledText>
    </StyledButton>
  );
};

export default PrimaryButton;
