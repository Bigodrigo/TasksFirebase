import React from 'react';
import { NativeBaseProvider } from 'native-base'

//Estilos
import { styles } from '../../styles'
import { Loading } from '../../components/Loading';

export default {
  title: "app/Componentes/Loading",
  component: Loading,
  argTypes: { 
    title: { description: 'Spinner de espera' },
    //iconName: { description: 'Nome do ícone dentro da biblioteca MaterialIcons' },
 },
  parameters: {
    docs: {
      description: {
        component: 'Componente utilizado para dar tempo de o context agir e a pessoa clicar no botão de fetch.'
      },
    },
  },
} 

export const Basic = (args) => (
  <NativeBaseProvider>
    <div style={{width:400}}>
      <div style={styles.app}>
        <Loading 
        //_pressed={{ bgColor: 'gray.300' }}
        //_hover={{ bgColor: 'white' }}
        {...args} 
        />
      </div>
    </div>
  </NativeBaseProvider>
);

Basic.args = {
  //title: 'ENTRAR',
  //iconLib: MaterialIcons, 
  //iconName: 'star'
};