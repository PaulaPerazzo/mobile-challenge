import React, { useState, useCallback } from 'react';
import { TextInputProps, Image } from 'react-native';
import {
  Input,
  TogglePasswordVisibilityButton,
  Title,
  InputContainer,
  StyledImage,
} from './styles';
import { View } from '../../assets';

interface InputProps extends TextInputProps {
  placeholder: string;
  isPassword?: boolean;
  title: string;
}

const InputPasswordBox: React.FC<InputProps> = ({
  isPassword,
  placeholder,
  title,
  ...rest
}) => {
  const [visiblePasswaord, setVisiblePasswaord] = useState<boolean>(false);

  const toggle = useCallback(() => {
    setVisiblePasswaord(!visiblePasswaord);
  }, [visiblePasswaord]);

  return (
    <InputContainer>
      <Title>{title}</Title>
      <Input
        placeholder={placeholder}
        secureTextEntry={!visiblePasswaord}
        {...rest}
        placeholderTextOpacity={0.5}
      />

      {isPassword && (
        <TogglePasswordVisibilityButton onPress={toggle}>
          <StyledImage source={View} />
        </TogglePasswordVisibilityButton>
      )}
    </InputContainer>
  );
};

export default InputPasswordBox;
