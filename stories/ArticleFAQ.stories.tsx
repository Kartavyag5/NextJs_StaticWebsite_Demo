import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { markdown } from 'markdown';
import ArticleFrequentlyAskedQuestion from '../components/article/frequently-asked-question';
import { Meta, Story, Canvas, ArgsTable } from '@storybook/addon-docs';

export default {
  title: 'Innerbody/ArticleFrequentlyAskedQuestion',
  component: ArticleFrequentlyAskedQuestion,
  argTypes: {
    storybook: {
      control: false
    }
  }
} as ComponentMeta<typeof ArticleFrequentlyAskedQuestion>;

const Template: ComponentStory<typeof ArticleFrequentlyAskedQuestion> = (args) => (
  <ArticleFrequentlyAskedQuestion {...args}>
    <div
      dangerouslySetInnerHTML={{
        __html: markdown.toHTML(args.children)
      }}></div>
  </ArticleFrequentlyAskedQuestion>
);
export const Primary = Template.bind({});

Primary.args = {
  title: 'How long do I have to wait for gut health test results?',
  storybook: true,
  children: `
**The best way to find out which of** Ombre’s probiotics are right for you is to take their Gut Health Test. However, if you want to try their products, you can choose based on your desired results. Ombre’s probiotics have names that make it easy to figure out which one you might want.

- Gut Health - ideal for anyone with digestive issues
- Metabolic Booster- good for losing weight or maintaining a healthy weight
- Endless Energy - can help improve energy levels and sleep

---

1. Gut Health - ideal for anyone with digestive issues
2. Metabolic Booster- good for losing weight or maintaining a healthy weight
3. Endless Energy - can help improve energy levels and sleep
  
*Ombre also sells a prebiotic called Rise, and it’s suitable for use alongside any of their probiotics.   * 
`
};
