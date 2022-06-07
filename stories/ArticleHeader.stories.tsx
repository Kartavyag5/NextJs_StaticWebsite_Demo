import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { markdown } from 'markdown';
import ArticleHeader from '../components/common/mdx-header';

export default {
  title: 'Innerbody/ArticleHeader',
  component: ArticleHeader,
  argTypes: {
    storybook: {
      control: false
    }
  }
} as ComponentMeta<typeof ArticleHeader>;

const Template: ComponentStory<typeof ArticleHeader> = (args) => <ArticleHeader {...args} />;
export const Primary = Template.bind({});

Primary.args = {
  text: 'How we evaluate Keeps, How we evaluate Keeps, How we evaluate Keeps',
  shortText: 'Evaluation'
};
