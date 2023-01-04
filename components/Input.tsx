import {
    Input as NativeBaseInput,
    IInputProps,
    FormControl,
  } from 'native-base';
import React from 'react';
import { colors } from '../src/styles';
import { fonts } from '../src/styles';
  
  type Props = IInputProps & {
    errorMessage?: string | null;
  }
  
  export function Input({ errorMessage = null, isInvalid, ...rest }: Props) {
    const invalid = !!errorMessage || isInvalid;
  
    return (
      <FormControl mb={4} isInvalid={invalid} >
        <NativeBaseInput
          fontSize="md"
          isInvalid={invalid}
          borderWidth= {1}
          borderColor={colors.placeholder_text_color}
          borderRadius= {7}
          width= 'full'
          fontFamily= {fonts.regular}
          padding= {5}
          color= {colors.placeholder_text_color}
          backgroundColor= {colors.background_input}
          _focus={{
            bg: "gray.400",
            borderWidth: 2,
            
          }}
          _invalid={{
            borderWidth: 2,
            borderColor: "red.500"
          }}
          {...rest}
        />
        <FormControl.ErrorMessage>{errorMessage}</FormControl.ErrorMessage>
      </FormControl>
    );
  }