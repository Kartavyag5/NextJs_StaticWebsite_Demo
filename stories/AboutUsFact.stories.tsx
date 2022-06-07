import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import AboutUsFact from '../components/misc/misc-aboutus-fact';

export default {
  title: 'Innerbody/AboutUsFact',
  component: AboutUsFact,
  argTypes: {
    storybook: {
      control: false
    }
  }
} as ComponentMeta<typeof AboutUsFact>;

const Template: ComponentStory<typeof AboutUsFact> = (args) => <AboutUsFact {...args} />;
export const Primary = Template.bind({});

Primary.args = {
  
};
