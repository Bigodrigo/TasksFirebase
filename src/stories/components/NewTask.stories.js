import React from 'react';
import { NativeBaseProvider } from 'native-base'

//Estilos
import { styles } from '../../styles'
import { NewTask } from '../../components/NewTask';

export default {
  title: "app/Componentes/NewTask",
  component: NewTask,
  argTypes: { 
    title: { description: 'Função de adição de novas tarefas.' },
    //iconName: { description: 'Nome do ícone dentro da biblioteca MaterialIcons' },
 },
  parameters: {
    docs: {
      description: {
        component: 'Componente utilizado adicionar tasks novas a partir do header.'
      },
    },
  },
} 

export const Basic = (args) => (
    <NativeBaseProvider>
        <div style={{width:400}}>
            <div style={styles.app}>
                <NewTask 
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