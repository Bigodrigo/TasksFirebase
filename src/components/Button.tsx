import { Button as ButtonNativeBase, IButtonProps, Text } from 'native-base';
import React from 'react';
import { colors, fonts } from "../styles";

type Props = IButtonProps & {
  title: string;
};

export function Button({ title, ...rest }: Props) {
  return (
    <ButtonNativeBase
      w="full"
      h={16}
      bg= {colors.placeholder_text_color}
      fontFamily= {fonts.regular}
      _pressed={{ bgColor: 'blue.800' }}
      {...rest}>
      <Text color="white" fontSize="md">
        {title}
      </Text>
    </ButtonNativeBase>
  );
}