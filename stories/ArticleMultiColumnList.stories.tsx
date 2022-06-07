import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import MultiColumnList from '../components/article/multi-column-list';

export default {
  title: 'Innerbody/ArticleMultiColumnList',
  component: MultiColumnList
} as ComponentMeta<typeof MultiColumnList>;

const Template: ComponentStory<typeof MultiColumnList> = (args) => <MultiColumnList {...args} />;
export const Primary = Template.bind({});

Primary.args = {
  heading: 'Everlywell currently offer the following mini-tests',
  numColumns: 4,
  data: [
    'Vitamins',
    'Folate',
    'Skin Health',
    'Recovery & Renewal',
    'Caffeine Tolerance',
    'Metabolism',
    'Hair',
    'Skin Aging',
    'Hunger & Weight',
    'Joint Care'
  ]
};
