import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import HomepageTrust from '../components/common/common-trust';

export default {
  title: 'Innerbody/HomepageTrust',
  component: HomepageTrust
} as ComponentMeta<typeof HomepageTrust>;

const Template: ComponentStory<typeof HomepageTrust> = (args) => <HomepageTrust {...args} />;
export const Primary = Template.bind({});

Primary.args = {
  trustData: {
    title: 'Research & reviews for your most important home health purchases.',
    units: [
      {
        number: '54,067',
        text: 'Hours testing and researching health-related products and services (so you dont have to)'
      },
      {
        number: '7',
        text: 'Hours testing and researching health-related products and services (so you dont haveto)'
      },
      {
        number: '67',
        text: 'Hours testing and researching health-related products and services (so you dont have to)'
      }
    ]
  }
};
