import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Navbar from '../components/navbar';

export default {
  title: 'Innerbody/Navbar',
  component: Navbar
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;
export const Primary = Template.bind({});

Primary.args = {
  publishedAt: '2021-07-26',
  title: 'Article Title',
  readingTime: '3 m'
};

// export const Secondary = Template.bind({});
// Secondary.args = {
//   title: 'Article Title',
// };
