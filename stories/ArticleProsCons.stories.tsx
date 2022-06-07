import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ProsCons from '../components/article/pros-cons';

export default {
  title: 'Innerbody/ArticleProsCons',
  component: ProsCons
} as ComponentMeta<typeof ProsCons>;

const Template: ComponentStory<typeof ProsCons> = (args) => <ProsCons {...args} />;
export const Primary = Template.bind({});

Primary.args = {
  pros: [
    'Easy, painless sample collection methods you do from home',
    'CLIA-certified lab facilities',
    'Discreet packaging',
    'CLIA-certified lab facilities',
    'Free physician consultation if your results are positive for specific tests',
    'In-depth resources to understand and address your results',
    'Innerbody Research readers receive 15% off (use code INNERBODY5)'
  ],
  cons: [
    'Tests unavailable in New York (except the COVID-19 test)',
    'Some tests lend themselves to home testing (vs. in-lab) better than others',
    'It takes longer to get your results than an in-person doctor visit and lab test',
    'Occasionally some tests are out of stock'
  ]
};
