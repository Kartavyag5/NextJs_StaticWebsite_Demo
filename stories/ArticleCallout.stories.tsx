import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ArticleCallout from '../components/article/callout';

export default {
  title: 'Innerbody/ArticleCallout',
  component: ArticleCallout,
  argTypes: {
    storybook: {
      control: false
    }
  }
} as ComponentMeta<typeof ArticleCallout>;

const Template: ComponentStory<typeof ArticleCallout> = (args) => <ArticleCallout {...args} />;
export const Primary = Template.bind({});

Primary.args = {
  storybook: true,
  websitelink: 'https://www.google.com',
  buttonColor: 'red',
  hoverbgcolor: 'green',
  saleline: 'Current Deals: Save 30% with code: INNERBODY20',
  image: 'https://innerbody.imgix.net/hellofresh-review-hero.jpg',
  leftCornerTitle:'Our Top Picks',
  children: `**Everlywell is our top choice for at-home food sensitivity testing. It conveniently checks sensitivity to a wide variety of foods and gives a clear report of results**

- CLIA-certified labs
- Free Doctor Consultation with certain test results
- Save 25% on top of competitive pricing`
};
