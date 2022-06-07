import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ReactMarkdown from 'react-markdown';
import TableScrolling from '../components/article/table-scrolling';
import { compiler } from 'markdown-to-jsx';

export default {
  title: 'Innerbody/ArticleTableScrolling',
  component: TableScrolling,
  argTypes: {
    storybook: {
      control: false
    }
  }
} as ComponentMeta<typeof TableScrolling>;

const Template: ComponentStory<typeof TableScrolling> = (args) => (
  <TableScrolling
    {...args}
    child={compiler(args.children, {
      overrides: {
        table: {
          component: (props) => <table {...props}></table>
        }
      }
    })}
  />
);
export const Primary = Template.bind({});

Primary.args = {
  storybook: true,
  children: `|                  | **Easily Delete your Data** | **Easily Destory your sample** | **Easily Destory your sample** | **Easily Destory your sample** | **Easily Destory your sample** | **Easily Destory your sample** | **Easily Destory your sample** | **Easily Destory your sample** | **Easily Destory your sample** | **Easily Destory your sample** |
| :--------------- | :-------------------------: | :----------------------------: | :----------------------------: | :----------------------------: | :----------------------------: | :----------------------------: | :----------------------------: | :----------------------------: | :----------------------------: | :----------------------------: |
| Nebula Genomics  |          rightIcon          |           rightIcon            |           rightIcon            |           rightIcon            |           rightIcon            |           rightIcon            |           rightIcon            |           rightIcon            |           rightIcon            |           rightIcon            |
| Sequencing.com   |          rightIcon          |           rightIcon            |           rightIcon            |           rightIcon            |           rightIcon            |           rightIcon            |           rightIcon            |           rightIcon            |           rightIcon            |           rightIcon            |
| Toolbox Genomics |          rightIcon          |           rightIcon            |           rightIcon            |           rightIcon            |           rightIcon            |           rightIcon            |           rightIcon            |           rightIcon            |           rightIcon            |           rightIcon            |
| Inside Tracker   |                             |                                |           rightIcon            |           rightIcon            |           rightIcon            |           rightIcon            |           rightIcon            |           rightIcon            |           rightIcon            |           rightIcon            |
| 23andMe          |                             |           rightIcon            |           rightIcon            |           rightIcon            |           rightIcon            |           rightIcon            |           rightIcon            |           rightIcon            |           rightIcon            |           rightIcon            |
| AncestryDNA      |                             |           rightIcon            |           rightIcon            |           rightIcon            |           rightIcon            |           rightIcon            |           rightIcon            |           rightIcon            |           rightIcon            |           rightIcon            |
| Vitagene         |                             |           rightIcon            |           rightIcon            |           rightIcon            |           rightIcon            |           rightIcon            |           rightIcon            |           rightIcon            |           rightIcon            |           rightIcon            |`
};
