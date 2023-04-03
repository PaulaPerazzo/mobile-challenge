import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import { StyledButton, StyledText } from './styles';

interface ButtonProps {
  onPress?: () => void | Promise<void>;
  disabled?: boolean;
}

const TimerButton: React.FC<ButtonProps> = ({ onPress, disabled }) => {
  const [disabledUntil, setDisabledUntil] = useState(dayjs().add(2, 'minute'));
  const [countdown, setCountdown] = useState(
    disabledUntil.diff(dayjs(), 'second'),
  );

  useEffect(() => {
    if (disabledUntil.isAfter(dayjs())) {
      const interval = setInterval(() => {
        const newCountdown = disabledUntil.diff(dayjs(), 'second');

        if (newCountdown <= 0) {
          clearInterval(interval);
          setDisabledUntil(dayjs().subtract(2, 'minute'));
          setCountdown(disabledUntil.diff(dayjs(), 'second'));
        } else {
          setCountdown(newCountdown);
        }
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [disabledUntil]);

  const onPressButton = () => {
    if (disabledUntil.isBefore(dayjs())) {
      setDisabledUntil(dayjs().add(2, 'minute'));
      setCountdown(120);
      onPress();
    }
  };

  return (
    <StyledButton
      onPress={onPressButton}
      disabled={disabled || disabledUntil.isAfter(dayjs())}
    >
      <StyledText>
        {disabledUntil.isAfter(dayjs())
          ? `Aguarde ${disabledUntil.diff(dayjs(), 'second')} segundos`
          : 'Reenviar código'}
      </StyledText>
    </StyledButton>
  );
};

export default TimerButton;
