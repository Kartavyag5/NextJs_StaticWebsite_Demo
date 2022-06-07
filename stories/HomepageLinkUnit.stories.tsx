import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import HomepageLinkUnit from '../components/homepage/homepage-link-unit';

export default {
  title: 'Innerbody/HomepageLinkUnit',
  component: HomepageLinkUnit,
} as ComponentMeta<typeof HomepageLinkUnit>;

const Template: ComponentStory<typeof HomepageLinkUnit> = (args) => <HomepageLinkUnit {...args} />;
export const Primary = Template.bind({});

Primary.args = {
  linksData:{
    title: "BUT HOW DOES INNERBODY ACTUALLY WORK",
    link_units: [
            { 
              title: 'Best Smart Health Devices', 
              image: 'https://innerbody.imgix.net/hpn-hearing-aid.png?w=450&auto=format',
              links: [
                {
                  link: "Home Health Test Kits",
                  url: "https://www.test.com",
                },
                {
                  link: "Home Health Test Kits",
                  url: "https://www.test.com",
                },
                {
                  link: "Home Health Test Kits",
                  url: "https://www.test.com",
                },
                {
                  link: "Home Health Test Kits",
                  url: "https://www.test.com",
                },
              ]
            },
            { 
              title: 'Best Smart Health Devices', 
              image: 'https://innerbody.imgix.net/hpn-hearing-aid.png?w=450&auto=format',
              links: [
                {
                  link: "Home Health Test Kits",
                  url: "https://www.test.com",
                },
                {
                  link: "Home Health Test Kits",
                  url: "https://www.test.com",
                },
                {
                  link: "Home Health Test Kits",
                  url: "https://www.test.com",
                },
                {
                  link: "Home Health Test Kits",
                  url: "https://www.test.com",
                },
              ]
            },
            { 
              title: 'Best Smart Health Devices', 
              image: 'https://innerbody.imgix.net/hpn-hearing-aid.png?w=450&auto=format',
              links: [
                {
                  link: "Home Health Test Kits",
                  url: "https://www.test.com",
                },
                {
                  link: "Home Health Test Kits",
                  url: "https://www.test.com",
                },
                {
                  link: "Home Health Test Kits",
                  url: "https://www.test.com",
                },
                {
                  link: "Home Health Test Kits",
                  url: "https://www.test.com",
                },
              ]
            },
            { 
              title: 'Best Smart Health Devices', 
              image: 'https://innerbody.imgix.net/hpn-hearing-aid.png?w=450&auto=format',
              links: [
                {
                  link: "Home Health Test Kits",
                  url: "https://www.test.com",
                },
                {
                  link: "Home Health Test Kits",
                  url: "https://www.test.com",
                },
                {
                  link: "Home Health Test Kits",
                  url: "https://www.test.com",
                },
                {
                  link: "Home Health Test Kits",
                  url: "https://www.test.com",
                },
              ]
            },
          ]
  }
};