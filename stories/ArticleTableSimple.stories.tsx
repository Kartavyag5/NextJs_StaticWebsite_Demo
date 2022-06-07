import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TableSimple from '../components/article/table-simple';
import { compiler } from 'markdown-to-jsx';

export default {
  title: 'Innerbody/ArticleTableSimple',
  component: TableSimple,
  argTypes: {
    storybook: {
      control: false
    }
  }
} as ComponentMeta<typeof TableSimple>;

const Template: ComponentStory<typeof TableSimple> = (args) => {
  return (
    <TableSimple
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
};
export const Primary = Template.bind({});

Primary.args = {
  storybook: true,
  children: `|                  | **Easily Delete your Data** | **Easily Destory your sample** |
| :--------------- | :-------------------------: | :----------------------------: |
| Nebula Genomics  |          rightIcon          |           rightIcon            |
| Sequencing.com   |          rightIcon          |           rightIcon            |
| Toolbox Genomics |          rightIcon          |           rightIcon            |
| Inside Tracker   |                             |                                |
| 23andMe          |                             |           rightIcon            |
| AncestryDNA      |                             |           rightIcon            |
| Vitagene         |                             |           rightIcon            |`
};
