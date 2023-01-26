//Acho válido modificar essa Home para uma fake mas visual para o SB!!
import React from 'react';
import { Center, NativeBaseProvider } from 'native-base'
import { within, userEvent } from '@storybook/testing-library';

import { styles } from '../../styles'
import { Home } from '../../screens/Home';
import { UserProvider } from '../../components/Context/User';
//import { NavigationContainer } from '@react-navigation/native';

  export default {
    title: "app/Screens/Home",
    component: Home,
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
          component: 'Screen contendo a Home, onde o usuário pode ter acesso a todos os serviços.'
        },
      },
    },
  } 
    
  export const Basic = (args) => (
    <NativeBaseProvider  >
        <Home />
    </NativeBaseProvider>
  );
