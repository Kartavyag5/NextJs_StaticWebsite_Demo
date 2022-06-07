import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import SimpleButton from '../components/article/simple-button';

export default {
  title: 'Innerbody/ArticleSimpleButton',
  component: SimpleButton
} as ComponentMeta<typeof SimpleButton>;

const Template: ComponentStory<typeof SimpleButton> = (args) => <SimpleButton {...args} />;
export const Primary = Template.bind({});

Primary.args = {
  title: 'Shop GNC',
  link: '/recommends',
  bgColor: 'red',
  hoverbgcolor: 'yellow'
};
