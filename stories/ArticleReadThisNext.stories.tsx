import React, { useEffect, useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ReadThisNext from '../components/article/read-this-next';

export default {
  title: 'Innerbody/ArticleReadThisNext',
  component: ReadThisNext,
  argTypes: {
    storybook: {
      control: false
    }
  }
} as ComponentMeta<typeof ReadThisNext>;

const Template: ComponentStory<typeof ReadThisNext> = (args: any) => {
  const renderData = (allPosts) => {
    return allPosts.map((post) => {
      return {
        ...post,
        content: `<MainImage imageUrl='${post?.imageUrl}' />`
      };
    });
  };

  return <ReadThisNext {...args} allPostsData={renderData(args.allPosts)} />;
};

export const Primary = Template.bind({});

Primary.args = {
  storybook: true,
  articles: ['/mind-review', '/keeps-review', '/my-review', '/keeps-review', '/my-review'],
  allPosts: [
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
      imageUrl: 'https://innerbody.imgix.net/hellofresh-review-hero.jpg'
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
