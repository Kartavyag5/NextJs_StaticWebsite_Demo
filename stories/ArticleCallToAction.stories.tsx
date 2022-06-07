import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ArticleCallToAction from '../components/article/call-to-action';

export default {
  title: 'Innerbody/ArticleCallToAction',
  component: ArticleCallToAction
} as ComponentMeta<typeof ArticleCallToAction>;

const Template: ComponentStory<typeof ArticleCallToAction> = (args) => (
  <ArticleCallToAction {...args} />
);
export const Primary = Template.bind({});

Primary.args = {
  buttonText: 'Sign Up',
  children: '*Special Offer:* Get %20 off your order with special code: *INNERBODY20*',
  storybook: true
};
