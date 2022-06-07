import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import SplitList from '../components/article/split-list';

export default {
  title: 'Innerbody/ArticleSplitList',
  component: SplitList,
  argTypes: {
    storybook: {
      control: false
    }
  }
} as ComponentMeta<typeof SplitList>;

const Template: ComponentStory<typeof SplitList> = (args) => <SplitList {...args} />;
export const Primary = Template.bind({});

Primary.args = {
  storybook: true,
  title: 'Hair Loss',
  position: 'top',
  children:
    '_Free Consultation._ Keeps has some of the most competitive prices in the business. Their products come in three-month supplies that renew and ship automatically, so you don’t have to worry about running out of anything you use. The price you see on the page is lower than those of competitive products, but it’s also worth noting that the prices of their products by volume are also lower. One ounce of their shampoo, for example, is cheaper than one ounce from another company. Innerbody Research readers also get 50% off their first order with our promo code.'
};
