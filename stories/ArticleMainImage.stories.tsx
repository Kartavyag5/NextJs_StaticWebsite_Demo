import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import MainImage from '../components/article/main-image';

export default {
  title: 'Innerbody/ArticleMainImage',
  component: MainImage
} as ComponentMeta<typeof MainImage>;

const Template: ComponentStory<typeof MainImage> = (args) => <MainImage {...args} />;
export const Primary = Template.bind({});

Primary.args = {
  captionText: 'Photo by InnerBody Research',
  imageUrl: 'https://innerbody.imgix.net/hellofresh-review-hero.jpg'
};
