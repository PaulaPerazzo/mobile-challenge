import React, { useState, useCallback } from 'react';
import { TextInputProps } from 'react-native';
import { Input, TogglePasswordVisibilityButton, Icon } from './style';

interface InputProps extends TextInputProps {
  placeholder: string;
  isPassword?: boolean;
}

const InputBox: React.FC<InputProps> = ({
  isPassword,
  placeholder,
  ...rest
}) => {
  const [visiblePasswaord, setVisiblePasswaord] = useState<boolean>(false);

  const toggle = useCallback(() => {
    setVisiblePasswaord(!visiblePasswaord);
  }, [visiblePasswaord]);

  return (
    <>
      <Input
        placeholder={placeholder}
        secureTextEntry={!visiblePasswaord}
        {...rest}
        placeholderTextOpacity={0.5}
      />

      {isPassword && (
        <TogglePasswordVisibilityButton onPress={toggle}>
          <Icon name={visiblePasswaord ? 'eye' : 'eye-off'} onPress={toggle} />
        </TogglePasswordVisibilityButton>
      )}
    </>
  );
};

export default InputBox;
