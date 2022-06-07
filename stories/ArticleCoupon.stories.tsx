import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ArticleCoupon from '../components/article/coupon';

export default {
  title: 'Innerbody/ArticleCoupon',
  component: ArticleCoupon
} as ComponentMeta<typeof ArticleCoupon>;

const Template: ComponentStory<typeof ArticleCoupon> = (args) => <ArticleCoupon {...args} />;
export const Primary = Template.bind({});

Primary.args = {
  percentage: 25,
  couponCode: 'Innerbody25'
};
