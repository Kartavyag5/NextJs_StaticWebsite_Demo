import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import CategoryLinkList from '../components/category/link-list';

export default {
  title: 'Innerbody/CategoryLinkList',
  component: CategoryLinkList
} as ComponentMeta<typeof CategoryLinkList>;

const Template: ComponentStory<typeof CategoryLinkList> = (args) => {
  const renderData = (allPosts) => {
    return allPosts.map((post) => {
      return {
        ...post,
        content: `<MainImage imageUrl='${post?.imageUrl}' />`
      };
    });
  };

  return <CategoryLinkList {...args} allPostsData={renderData(args.allPostsData)} />;
};
export const Primary = Template.bind({});

Primary.args = {
  articles: ['/mind-review', '/keeps-review', '/keeps-review', '/keeps-review', '/keeps-review'],
  title: 'ADDITIONAL FOOD & NUTRITION REVIEWS AND RESOURCES',
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
