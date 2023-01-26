import React from 'react';
import { NativeBaseProvider } from 'native-base'

//Estilos
import { styles } from '../../../styles';
import { Task } from './Task';

export default {
  title: "app/Componentes/Task",
  component: Task,
  argTypes: { 
    title: { description: 'Corpo das Tasks.' },
    //iconName: { description: 'Nome do ícone dentro da biblioteca MaterialIcons' },
 },
  parameters: {
    docs: {
      description: {
        component: 'Corpo das Tasks.'
      },
    },
  },
} 

const Basic = (args) => (
    <NativeBaseProvider>
        <div style={{width:400}}>
            <div style={styles.app}>
                <Task {...args} />
            </div>
        </div>
    </NativeBaseProvider>
);

export const Default = Basic.bind({});
Default.args = {
  task: {
    id: '1',
    title: 'Test Task',
    isFinished: false,
  },
};
export const Finished = Basic.bind({});
Finished.args = {
  task: {
    ...Default.args.task,
    isFinished: true,
  },
};