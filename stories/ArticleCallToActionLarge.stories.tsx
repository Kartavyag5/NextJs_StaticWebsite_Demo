import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ArticleCallToActionLarge from '../components/article/call-to-action-large';

export default {
  title: 'Innerbody/ArticleCallToActionLarge',
  component: ArticleCallToActionLarge
} as ComponentMeta<typeof ArticleCallToActionLarge>;

const Template: ComponentStory<typeof ArticleCallToActionLarge> = (args) => (
  <ArticleCallToActionLarge {...args} />
);
export const Primary = Template.bind({});

Primary.args = {
  line1: 'Get %50 off Everywell',
  line2: '(Exclusivity for our readers)',
  image: 'https://innerbody.imgix.net/hellofresh-review-hero.jpg',
  buttonText: 'Try Everlywell Now',
  storybook: true
};
