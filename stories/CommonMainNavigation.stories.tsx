import React, { useEffect, useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import CommonMainNavigation from '../components/common/main-navigation';

export default {
  title: 'Innerbody/CommonMainNavigation',
  component: CommonMainNavigation,
  argTypes: {
    storybook: {
      control: false
    }
  }
} as ComponentMeta<typeof CommonMainNavigation>;

const Template: ComponentStory<typeof CommonMainNavigation> = (args: any) => {
  return <CommonMainNavigation {...args} />;
};

export const Primary = Template.bind({});
export const Category = Template.bind({});

Primary.args = {
  noOfColumns: 4,
  title: 'Research & reviews for your most important home health purchases.',
  byline:
    "Turn to our experts for everything you need to know about at-home testing and telemedicine.  We do the research so you don't have to.",
  navigationData: [
    {
      link: 'Telehealth',
      image: 'HomepageMainnavFoodNutrition',
      url: 'https://www.google.com'
    },
    {
      link: 'Online Therapy',
      image: 'HomepageMainnavHealthProducts',
      url: 'https://www.google.com'
    },
    { link: 'Home Testing', image: 'HomepageMainnavHomeTesting', url: 'https://www.google.com' },
    {
      link: 'Health Products',
      image: 'HomepageMainnavOnlineTherapy',
      url: 'https://www.google.com'
    },
    { link: 'Food & Nutrition', image: 'HomepageMainnavTelehealth', url: 'https://www.google.com' },
    { link: 'Human Anatomy', image: 'HomepageMainnavAnatomyIll', url: 'https://www.google.com' }
  ],
  fromPage: 'homePage'
};

Category.args = {
  noOfColumns: 4,
  title: 'Health Products & Services',
  byline:
    'All of our guides, recommendations, and comparison tools are written by experts and reviewed by our certified Medical Advisory Board. The science behind many new health products and services is evolving fast. We update our information every month to make sure you are getting the latest information (and the best pricing). Health companies are known for using confusing jargon and obscure pricing models. Our helpful tools allow you to break through the clutter and get the information you need.',
  navigationData: [
    {
      link: 'Food & Nutrition',
      image: 'CategoryFoodIcon',
      url: 'https://www.google.com'
    },
    { link: 'Supplements', image: 'CategorySupplementsIcon', url: 'https://www.google.com' },
    { link: 'Hearing', image: 'CategoryHearingIcon', url: 'https://www.google.com' },
    { link: 'Vision', image: 'CategoryEyeIcon', url: 'https://www.google.com' },
    { link: 'Dental', image: 'CategoryDentalIcon', url: 'https://www.google.com' },
    { link: "Men's Health", image: 'CategoryMenHealthIcon', url: 'https://www.google.com' },
    { link: "Women's Health", image: 'CategoryWomenHealthIcon', url: 'https://www.google.com' },
    { link: 'Misc Products', image: 'CategoryMoreIcon', url: 'https://www.google.com' }
  ]
};
