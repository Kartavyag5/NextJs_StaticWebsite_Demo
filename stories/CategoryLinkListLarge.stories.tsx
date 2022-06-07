import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import CategoryLinkListLarge from '../components/category/link-list-large';

export default {
  title: 'Innerbody/CategoryLinkListLarge',
  component: CategoryLinkListLarge
} as ComponentMeta<typeof CategoryLinkListLarge>;

const Template: ComponentStory<typeof CategoryLinkListLarge> = (args) => {
  const renderData = (allPosts) => {
    return allPosts.map((post) => {
      return {
        ...post,
        content: `<MainImage imageUrl='${post?.imageUrl}' />`
      };
    });
  };

  return <CategoryLinkListLarge {...args} allPostsData={renderData(args.allPostsData)} />;
};
export const Primary = Template.bind({});

Primary.args = {
  articles: [
    { permalink: '/mind-review', watermarkpos: 'left', superTitle: 'Weight lost with BistroMD' },
    { permalink: '/keeps-review', watermarkpos: 'center' },
    { permalink: '/mind-review', watermarkpos: 'right' },
    { permalink: '/keeps-review', watermarkpos: 'left' },
    { permalink: '/keeps-review', watermarkpos: 'center' }
  ],
  title: 'FOOD & NUTRITION',
  allPostsData: [
    {
      ['old-permalink']: '/keeps-review',
      title: 'Keeps Review: Do Keeps’ Hair Loss Treatments Work?',
      meta_description:
        'Our expert review of Keeps tells you everything you need to know about their hair loss treatments, pricing and service.',
      imageUrl: 'https://innerbody.imgix.net/hellofresh-review-hero.jpg'
    },
    {
      ['old-permalink']: '/mind-review',
      title: 'Keeps Review: Do Keeps’ Hair Loss Treatments Work?',
      meta_description:
        'Our expert review of Keeps tells you everything you need to know about their hair loss treatments, pricing and service.',
      imageUrl: 'https://innerbody.imgix.net/gnc-review-hero.jpg'
    },
    {
      ['old-permalink']: '/my-review',
      title: 'My',
      meta_description:
        'My expert review of Keeps tells you everything you need to know about their hair loss treatments, pricing and service.',
      imageUrl: 'https://innerbody.imgix.net/hellofresh-review-hero.jpg'
    },
    {
      ['old-permalink']: '/your-review',
      title: 'Your',
      meta_description:
        'Your expert review of Keeps tells you everything you need to know about their hair loss treatments, pricing and service.',
      imageUrl:
        'https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80'
    },
    {
      ['old-permalink']: '/update-review',
      title: 'Update',
      meta_description:
        'Update expert review of Keeps tells you everything you need to know about their hair loss treatments, pricing and service.',
      imageUrl:
        'https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80'
    }
  ]
};
