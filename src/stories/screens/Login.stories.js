import React from 'react';
import { Center, NativeBaseProvider } from 'native-base'
import { within, userEvent } from '@storybook/testing-library';

import { styles } from '../../styles'
import { Login } from '../../screens/Login';
import { UserProvider } from '../../components/Context/User';
//import { NavigationContainer } from '@react-navigation/native';

  export default {
    title: "screens/Login",
    component: Login,
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
          component: 'Screen contendo a Login, onde o usuário pode ter acesso a todos os serviços.'
        },
      },
    },
  } 
    
  export const Basic = (args) => (
    <NativeBaseProvider  >
        <Login />
    </NativeBaseProvider>
  );
