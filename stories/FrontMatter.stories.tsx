import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import FrontMatter from '../components/article/front-matter';

export default {
  title: 'Innerbody/FrontMatter',
  component: FrontMatter
} as ComponentMeta<typeof FrontMatter>;

const Template: ComponentStory<typeof FrontMatter> = (args) => <FrontMatter {...args} />;
export const Primary = Template.bind({});

Primary.args = {
  publishedAt: '2021-07-26',
  title: 'Keeps Review: Do Keeps’ Hair Loss Treatments Work?',
  readingTime: '4 min read',
  description:
    'Our experts rate and review all Everlywell tests in terms of accuracy, value, privacy, and customer support + current discount codes.',
  author: {
    advertising_warning: true,
    last_updated: '2020-05-04 16:58:31',
    main_author: 'daniel',
    secondary_author_byline: 'Medically reviewed by: ',
    secondary_authot: 'ayesha'
  }
};
