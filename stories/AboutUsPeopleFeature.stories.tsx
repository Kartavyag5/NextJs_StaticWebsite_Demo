import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import AboutUsPeopleFeature from '../components/misc/aboutus-people-feature';

export default {
  title: 'Innerbody/AboutUsPeopleFeature',
  component: AboutUsPeopleFeature,
  argTypes: {
    storybook: {
      control: false
    }
  }
} as ComponentMeta<typeof AboutUsPeopleFeature>;

const Template: ComponentStory<typeof AboutUsPeopleFeature> = (args) => <AboutUsPeopleFeature {...args} />;
export const Primary = Template.bind({});

Primary.args = {
    title:"MEET OUR TEAM",
    people:['daniel', 'ayesha','daniel', 'ayesha','daniel', 'ayesha']
};