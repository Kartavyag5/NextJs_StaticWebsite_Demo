import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

// import HomepageExtendedInfo from '../components/homepage/homepage-extended-info';
import HomepageCommonHeader from '../components/common/header';

export default {
  title: 'Innerbody/HomepageCommonHeader',
  component: HomepageCommonHeader
} as ComponentMeta<typeof HomepageCommonHeader>;

const Template: ComponentStory<typeof HomepageCommonHeader> = (args) => (
  <HomepageCommonHeader {...args} />
);
export const Primary = Template.bind({});

Primary.args = {
  headerTitle: 'BUT HOW DOES INNERBODY ACTUALLY WORK'
};
