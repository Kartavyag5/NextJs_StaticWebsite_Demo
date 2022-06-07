import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ArticleExpandedCallout from '../components/article/expanded-callout';

export default {
  title: 'Innerbody/ArticleExpandedCallout',
  component: ArticleExpandedCallout
} as ComponentMeta<typeof ArticleExpandedCallout>;

const Template: ComponentStory<typeof ArticleExpandedCallout> = (args) => (
  <ArticleExpandedCallout {...args} />
);
export const Primary = Template.bind({});

Primary.args = {
  data: [
    {
      imageUrl: 'https://i.pinimg.com/originals/b4/bf/fd/b4bffd4008803a321411fc7ada27be05.jpg',
      tag: {
        tagColor: '#0D2C30',
        tagBgColor: '#5CEFFF',
        tagText: 'Best food sensitivity test'
      },
      title: 'Everlywell',
      price: 99,
      priceWithDiscount: 74,
      codeText: 'REFER25',
      imageAlt: 'Alt text Example',
      buttonText: 'But now test',
      url: 'https://www.google.com'
    },
    {
      imageUrl: 'https://webmeup.com/upload/blog/lead-image-105.png',
      tag: {
        tagColor: '#0D2C30',
        tagBgColor: '#D0F7FC',
        tagText: 'Best food sensitivity test'
      },
      title: 'Everlywell',
      price: 199,
      priceWithDiscount: 174,
      codeText: 'REFER25',
      descText:
        'For those trying to lose weight, our review assesses bistromd membership plans for weightloss meal delivery ',
      imageAlt: 'Alt text Example',
      buttonText: 'But now test',
      url: 'https://www.google.com'
    },
    {
      imageUrl: 'https://i.pinimg.com/originals/b4/bf/fd/b4bffd4008803a321411fc7ada27be05.jpg',
      tag: {
        tagColor: '#0D2C30',
        tagBgColor: '#5CEFFF',
        tagText: 'Best food sensitivity test'
      },
      title: 'Everlywell',
      price: 99,
      priceWithDiscount: 74,
      codeText: 'REFER25',
      imageAlt: 'Alt text Example',
      buttonText: 'But now test',
      url: 'https://www.google.com'
    },
    {
      imageUrl: 'https://webmeup.com/upload/blog/lead-image-105.png',
      tag: {
        tagColor: '#0D2C30',
        tagBgColor: '#D0F7FC',
        tagText: 'Best food sensitivity test'
      },
      title: 'Everlywell',
      price: 199,
      priceWithDiscount: 174,
      codeText: 'REFER25',
      descText:
        'For those trying to lose weight, our review assesses bistromd membership plans for weightloss meal delivery ',
      imageAlt: 'Alt text Example',
      buttonText: 'But now test',
      url: 'https://www.google.com'
    },
    {
      imageUrl: 'https://i.pinimg.com/originals/b4/bf/fd/b4bffd4008803a321411fc7ada27be05.jpg',
      tag: {
        tagColor: '#0D2C30',
        tagBgColor: '#5CEFFF',
        tagText: 'Best food sensitivity test'
      },
      title: 'Everlywell',
      price: 99,
      priceWithDiscount: 74,
      codeText: 'REFER25',
      imageAlt: 'Alt text Example',
      buttonText: 'But now test',
      url: 'https://www.google.com'
    },
    {
      imageUrl: 'https://webmeup.com/upload/blog/lead-image-105.png',
      tag: {
        tagColor: '#0D2C30',
        tagBgColor: '#D0F7FC',
        tagText: 'Best food sensitivity test'
      },
      title: 'Everlywell',
      price: 199,
      priceWithDiscount: 174,
      codeText: 'REFER25',
      descText:
        'For those trying to lose weight, our review assesses bistromd membership plans for weightloss meal delivery ',
      imageAlt: 'Alt text Example',
      buttonText: 'But now test',
      url: 'https://www.google.com'
    },
    {
      imageUrl: 'https://i.pinimg.com/originals/b4/bf/fd/b4bffd4008803a321411fc7ada27be05.jpg',
      tag: {
        tagColor: '#0D2C30',
        tagBgColor: '#5CEFFF',
        tagText: 'Best food sensitivity test'
      },
      title: 'Everlywell',
      price: 99,
      priceWithDiscount: 74,
      codeText: 'REFER25',
      imageAlt: 'Alt text Example',
      buttonText: 'But now test',
      url: 'https://www.google.com'
    },
    {
      imageUrl: 'https://webmeup.com/upload/blog/lead-image-105.png',
      tag: {
        tagColor: '#0D2C30',
        tagBgColor: '#D0F7FC',
        tagText: 'Best food sensitivity test'
      },
      title: 'Everlywell',
      price: 199,
      priceWithDiscount: 174,
      codeText: 'REFER25',
      descText:
        'For those trying to lose weight, our review assesses bistromd membership plans for weightloss meal delivery ',
      imageAlt: 'Alt text Example',
      buttonText: 'But now test',
      url: 'https://www.google.com'
    },
    {
      imageUrl: 'https://i.pinimg.com/originals/b4/bf/fd/b4bffd4008803a321411fc7ada27be05.jpg',
      tag: {
        tagColor: '#0D2C30',
        tagBgColor: '#5CEFFF',
        tagText: 'Best food sensitivity test'
      },
      title: 'Everlywell',
      price: 99,
      priceWithDiscount: 74,
      codeText: 'REFER25',
      imageAlt: 'Alt text Example',
      buttonText: 'But now test',
      url: 'https://www.google.com'
    },
    {
      imageUrl: 'https://webmeup.com/upload/blog/lead-image-105.png',
      tag: {
        tagColor: '#0D2C30',
        tagBgColor: '#D0F7FC',
        tagText: 'Best food sensitivity test'
      },
      title: 'Everlywell',
      price: 199,
      priceWithDiscount: 174,
      codeText: 'REFER25',
      descText:
        'For those trying to lose weight, our review assesses bistromd membership plans for weightloss meal delivery ',
      imageAlt: 'Alt text Example',
      buttonText: 'But now test',
      url: 'https://www.google.com'
    },
    {
      imageUrl: 'https://i.pinimg.com/originals/b4/bf/fd/b4bffd4008803a321411fc7ada27be05.jpg',
      tag: {
        tagColor: '#0D2C30',
        tagBgColor: '#5CEFFF',
        tagText: 'Best food sensitivity test'
      },
      title: 'Everlywell',
      price: 99,
      priceWithDiscount: 74,
      codeText: 'REFER25',
      imageAlt: 'Alt text Example',
      buttonText: 'But now test',
      url: 'https://www.google.com'
    },
    {
      imageUrl: 'https://webmeup.com/upload/blog/lead-image-105.png',
      tag: {
        tagColor: '#0D2C30',
        tagBgColor: '#D0F7FC',
        tagText: 'Best food sensitivity test'
      },
      title: 'Everlywell',
      price: 199,
      priceWithDiscount: 174,
      codeText: 'REFER25',
      descText:
        'For those trying to lose weight, our review assesses bistromd membership plans for weightloss meal delivery ',
      imageAlt: 'Alt text Example',
      buttonText: 'But now test',
      url: 'https://www.google.com'
    },
    {
      imageUrl: 'https://i.pinimg.com/originals/b4/bf/fd/b4bffd4008803a321411fc7ada27be05.jpg',
      tag: {
        tagColor: '#0D2C30',
        tagBgColor: '#5CEFFF',
        tagText: 'Best food sensitivity test'
      },
      title: 'Everlywell',
      price: 99,
      priceWithDiscount: 74,
      codeText: 'REFER25',
      imageAlt: 'Alt text Example',
      buttonText: 'But now test',
      url: 'https://www.google.com'
    }
  ]
};
