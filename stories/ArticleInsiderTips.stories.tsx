import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import InsiderTips from '../components/article/insider-tips';
import { markdown } from 'markdown';

export default {
  title: 'Innerbody/ArticleInsiderTips',
  component: InsiderTips
} as ComponentMeta<typeof InsiderTips>;

const Template: ComponentStory<typeof InsiderTips> = (args) => {
  return (
    <InsiderTips {...args}>
      <div dangerouslySetInnerHTML={{ __html: markdown.toHTML(args.child) }}></div>
    </InsiderTips>
  );
};
export const Primary = Template.bind({});

Primary.args = {
  child:
    '**Insider Tip:** Sample collection can be challenging if your bowel movement is too dry. We recommend hydrating thoroughly for at least 24 hours leading up to your intended collection time. That will allow the provided swab to pick up more material in one swipe. We recommend hydrating thoroughly for at least 24 hours leading up to your intended collection time. That will allow the provided swab to pick up more material in one swipe.'
};
