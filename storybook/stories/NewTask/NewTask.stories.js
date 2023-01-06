// NewTask.stories.js|jsx
import React from 'react';
import { NewTask } from '../../../src/components/NewTask';
//SB
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import { Text } from 'react-native';
import { CenterView } from "../CenterView"

async function addNewTask(content) {   
  const taskObject = { 
    content: content,
    //date: serverTimestamp(),
    //id: randomKey(),
    isFinished: false,
  };
};

storiesOf('NewTask', module)
.addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
.add('to Storybook', () => (
  <NewTask addNewTask={addNewTask} />
  ))
  //showApp={linkTo('Button')} dentro do newtask
