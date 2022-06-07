import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ContactForm from '../components/misc/aboutus-contact-form';

export default {
  title: 'Innerbody/ContactForm',
  component: ContactForm,
  argTypes: {
    storybook: {
      control: false
    }
  }
} as ComponentMeta<typeof ContactForm>;

const Template: ComponentStory<typeof ContactForm> = (args) => <ContactForm {...args} />;
export const Primary = Template.bind({});

Primary.args = {
  
};
