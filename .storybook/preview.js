// .storybook/preview.js

import React from 'react';
import {NativeBaseProvider} from 'native-base';

import { ThemeProvider } from 'styled-components';

export const decorators = [
  (Story) => (
    <NativeBaseProvider>
      {Story()}
    </NativeBaseProvider>
  ),
];