// import { MaterialIcons } from "@expo/vector-icons"; 
// import {  Icon  } from 'native-base'
import React from 'react';
import { NativeBaseProvider } from 'native-base'

//Estilos
import { styles } from '../../styles'
import { Input } from '../../components/Input';

export default {
  title: "app/Componentes/Input",
  component: Input,
  argTypes: { 
    title: { description: 'Texto do botão' },
    //iconName: { description: 'Nome do ícone dentro da biblioteca MaterialIcons' },
 },
  parameters: {
    docs: {
      description: {
        component: 'Componente utilizado para o padrão de botões.'
      },
    },
  },
} 

export const Basic = (args) => (
  <NativeBaseProvider >
    <div style={{width:400}}>
      <div style={styles.input}>
        <div style={styles.container}>
        <Input 
        //_pressed={{ bgColor: 'gray.300' }}
        //_hover={{ bgColor: 'white' }}
        {...args} 
        />
        </div>
      </div>
    </div>
  </NativeBaseProvider>
);

Basic.args = {
  title: 'ENTRAR',
  //iconLib: MaterialIcons, 
  //iconName: 'star'
};

/* 
src/components/Button.js src/components/ItemsBox.js src/stories/Button.jsx src/stories/Button.stories.jsx src/stories/Header.jsx src/stories/UploadImage.stories.js src/stories/UserData.stories.js src/stories/ButtonHome.stories.js src/stories/ItemsBox.stories.js src/stories/SearchBar.stories.js src/stories/ServiceItems.stories.js
 */