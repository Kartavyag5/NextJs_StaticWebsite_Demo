import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import OurFindings from '../components/article/our-findings';

export default {
  title: 'Innerbody/ArticleOurFindings',
  component: OurFindings
} as ComponentMeta<typeof OurFindings>;

const Template: ComponentStory<typeof OurFindings> = (args) => <OurFindings {...args} />;
export const Primary = Template.bind({});

Primary.args = {
  ratings: 3.75,
  heading: 'Our Findings',
  ratingText: "Editor's Rating"
};
