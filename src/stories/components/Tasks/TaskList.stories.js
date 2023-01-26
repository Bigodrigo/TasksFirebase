import React from 'react';
import { NativeBaseProvider } from 'native-base'
import { styles } from '../../../styles';
import { TaskList } from './TaskList';
//import * as TaskStories from './Task.stories';

export default {
  title: "app/Componentes/TaskList",
  component: TaskList,
  decorators: [story => <div style={{ padding: '3rem' }}>{story()}</div>],
  argTypes: { 
    title: { description: 'Junção das Tasks.' },
    //iconName: { description: 'Nome do ícone dentro da biblioteca MaterialIcons' },
 },
  parameters: {
    docs: {
      description: {
        component: 'Junção das Tasks.'
      },
    },
  },
};

const Basic = (args) => (
    <NativeBaseProvider>
        <div style={{width:400}}>
            <div style={styles.app}>
                <TaskList {...args} />;
            </div>
        </div>
    </NativeBaseProvider>
);

export const Default = Basic.bind({});
Default.args = {
  // Shaping the stories through args composition.
  // The data was inherited from the Default story in Task.stories.js.
  tasks: [
    // { ...TaskStories.Default.args.task, id: '1', title: 'Task 1' },
    // { ...TaskStories.Default.args.task, id: '2', title: 'Task 2' },
    // { ...TaskStories.Default.args.task, id: '3', title: 'Task 3' },
    {...{id: '1', title: 'Test Task', isFinished: false }},
    {...{id: '2', title: 'Test Task', isFinished: false }},
    {...{id: '3', title: 'Test Task', isFinished: false }},
    // { task: {id: '4', title: 'Test Task', isFinished: false }},
    // { task: {id: '5', title: 'Test Task', isFinished: false }},
    // { task: {id: '6', title: 'Test Task', isFinished: false }},
  ],
};

// export const Finished = Basic.bind({});
// Finished.args = {
//   // Shaping the stories through args composition.
//   // Inherited data coming from the Default story.
//   tasks: [
//     ...Default.args.tasks.slice(0, 5),
//     { id: '6', title: 'Task 6 (finished)', isFinished: true },
//   ],
// };
