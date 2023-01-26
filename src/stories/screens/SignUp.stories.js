import React from 'react';
import { Center, NativeBaseProvider } from 'native-base'
import { within, userEvent } from '@storybook/testing-library';

import { styles } from '../../styles'
import { SignUp } from '../../screens/SignUp';
import { UserProvider } from '../../components/Context/User';
//import { NavigationContainer } from '@react-navigation/native';

  export default {
    title: "app/Screens/SignUp",
    component: SignUp,
    decorators: [
      (Story) => (
        <UserProvider>
          <div style={styles.app}>
            <Story />
          </div>
        </UserProvider>
      ),
    ],
    parameters: {
      layout: 'centered',
      docs: {
        description: {
          component: 'Screen contendo a SignUp, onde o usuário pode se inscrever no app.'
        },
      },
    },
  } 
    
  export const Basic = (args) => (
    <NativeBaseProvider  >
        <SignUp />
    </NativeBaseProvider>
  );