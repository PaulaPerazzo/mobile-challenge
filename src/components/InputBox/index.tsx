import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { Input } from './style';

interface InputProps {
  placeholder: string;
}

const InputBox: React.FC<InputProps> = ({ placeholder }) => {
  return <Input placeholder={placeholder} />;
};

export default InputBox;
