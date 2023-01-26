import React from 'react';
import { NativeBaseProvider } from 'native-base'
import { UserProvider } from '../../components/Context/User';
//Estilos
import { styles } from '../../styles'
import { Header } from '../../components/Header';

export default {
  title: "app/Componentes/Header",
  component: Header,
  argTypes: { 
    title: { description: 'Header da Home, permite a Adição de Tasks e Logout.' },
    //iconName: { description: 'Nome do ícone dentro da biblioteca MaterialIcons' },
 },
  parameters: {
    docs: {
      description: {
        component: 'Header da Home, permite a Adição de Tasks e Logout.'
      },
    },
  },
} 

export const Basic = (args) => (
  <NativeBaseProvider>
        <div style={{width:400}}>
            <div style={styles.app}>
                <UserProvider>    
                    <Header 
                        //_pressed={{ bgColor: 'gray.300' }}
                        //_hover={{ bgColor: 'white' }}
                        {...args} 
                    />
                </UserProvider>
            </div>
        </div>
  </NativeBaseProvider>
);

Basic.args = {
  //title: 'ENTRAR',
  //iconLib: MaterialIcons, 
  //iconName: 'star'
};