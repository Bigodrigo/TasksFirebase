import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Text } from 'react-native';
import Button from '.';

import CenterView from '../../decorators/CenterView';
import { ButtonDescription } from './ButtonDescription';

storiesOf('Button', module)
  .addDecorator(CenterView)
  .addParameters({
    backgrounds: [
      {name: 'vermelho', value: 'red'},
      {name: 'azul', value: 'blue'},
      {name: 'branco', value: 'white', default: true}
    ]
  })
  .add('Description', () => (
    <ButtonDescription />
  ))
  .add('Simple button', () => (
    <Button onPress={action('clicked-text')}>
      <Text>{text('Button text', 'Press')}</Text>
    </Button>
  ), {
    notes: 
    `
      Descrição do componente
    `
  })









/* storiesOf('Button', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('with text', () => (
    <Button onPress={action('clicked-text')}>
      <Text>{text('Button text', 'Hello Button')}</Text>
    </Button>
  ))
  .add('with some emoji', () => (
    <Button onPress={action('clicked-emoji')}>
      <Text>😀 😎 👍 💯</Text>
    </Button>
  ))
  .add('simple', () => (
    <Button>
      <Text>Press</Text>
    </Button>
  ));
 */