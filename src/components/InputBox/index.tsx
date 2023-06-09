import React, { useState, useCallback } from 'react';
import { TextInputProps } from 'react-native';
import {
  Input,
  TogglePasswordVisibilityButton,
  Icon,
  Title,
  InputContainer,
} from './style';

interface InputProps extends TextInputProps {
  placeholder: string;
  isPassword?: boolean;
  title: string;
}

const InputBox: React.FC<InputProps> = ({
  isPassword,
  placeholder,
  title,
  ...rest
}) => {
  const [visiblePasswaord, setVisiblePasswaord] = useState<boolean>(isPassword);

  const toggle = useCallback(() => {
    setVisiblePasswaord(!visiblePasswaord);
  }, [visiblePasswaord]);

  return (
    <InputContainer>
      <Title>{title}</Title>
      <Input
        placeholder={placeholder}
        secureTextEntry={visiblePasswaord}
        {...rest}
        placeholderTextOpacity={0.5}
      />

      {isPassword && (
        <TogglePasswordVisibilityButton onPress={toggle}>
          <Icon name={visiblePasswaord ? 'eye' : 'eye-off'} onPress={toggle} />
        </TogglePasswordVisibilityButton>
      )}
    </InputContainer>
  );
};

export default InputBox;
