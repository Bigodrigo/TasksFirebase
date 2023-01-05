// NewTask.stories.js|jsx
import React from 'react';
import { NewTask } from './NewTask';

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'NewTask',
  component: NewTask,
  
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <NewTask {...args} />;

export const Primary = Template.bind({});
Primary.decorators = [
  (Story) => (
    <div style={{ margin: '3em' }}>
      {Story()}
    </div>
  ),
];