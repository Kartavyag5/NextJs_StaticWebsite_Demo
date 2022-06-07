import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import HomepageExtendedInfo from '../components/homepage/homepage-extended-info';

export default {
  title: 'Innerbody/HomepageExtendedInfo',
  component: HomepageExtendedInfo
} as ComponentMeta<typeof HomepageExtendedInfo>;

const Template: ComponentStory<typeof HomepageExtendedInfo> = (args) => (
  <HomepageExtendedInfo {...args} />
);
export const Primary = Template.bind({});

Primary.args = {
  extendedData: {
    title: 'BUT HOW DOES INNERBODY ACTUALLY WORK',
    points: [
      {
        title: 'Experienced researchers and medical pros',
        paragraph:
          'Our researchers and writers focus entirely on relkated products and services.  A board od experiences medical professionals review out content so you can completely trust it.  Helping you make the most of your healthcare decision has been our bussiness for the last 20 years.'
      },
      {
        title: 'Experienced researchers and medical pros',
        paragraph:
          'Our researchers and writers focus entirely on relkated products and services.  A board od experiences medical professionals review out content so you can completely trust it.  Helping you make the most of your healthcare decision has been our bussiness for the last 20 years.'
      },
      {
        title: 'Experienced researchers and medical pros',
        paragraph:
          'Our researchers and writers focus entirely on relkated products and services.  A board od experiences medical professionals review out content so you can completely trust it.  Helping you make the most of your healthcare decision has been our bussiness for the last 20 years.'
      }
    ]
  }
};
