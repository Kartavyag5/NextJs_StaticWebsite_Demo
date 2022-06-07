import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { markdown } from 'markdown';
import AboutHeader from '../components/misc/aboutus-header';

export default {
  title: 'Innerbody/AboutHeader',
  component: AboutHeader,
  argTypes: {
    storybook: {
      control: false
    }
  }
} as ComponentMeta<typeof AboutHeader>;

const Template: ComponentStory<typeof AboutHeader> = (args) => (
  <AboutHeader {...args}>
    <div
      dangerouslySetInnerHTML={{
        __html: markdown.toHTML(args.children)
      }}>
      </div>
  </AboutHeader>
);
export const Primary = Template.bind({});

Primary.args = {
  storybook: true,
  children: `
** There Are No More Important Decisions In Life Than Those That Affect Your Health.**

We are researchers, doctors, nurses, health enthusiasts, and scientists with a shared mission:

**Provide objective, science-based advice to help you make more informed health-related purchasing decisions so that you can enjoy a healthier, happy life.**

With each passing week, new health products and services are introduced and make various claims. Which claims can you trust and which are wishful thinking? Out of all your choices for a particular product or service, which is best for you? Which choice offers the best value? Our experienced research team tests and analyzes thousands of products and services each month to help answer these questions and more.
`
};
