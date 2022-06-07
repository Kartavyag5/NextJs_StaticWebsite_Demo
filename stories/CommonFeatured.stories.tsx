import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {
  Subtitle,
  Description,
  Stories,
  Title,
  ArgsTable,
  PRIMARY_STORY
} from '@storybook/addon-docs';
import HomepageFeatured from '../components/common/common-featured';

export default {
  title: 'Innerbody/HomepageFeatured',
  component: HomepageFeatured,
  docs: {
    storyDescription: 'test'
  },
  argTypes: {
    storybook: {
      control: false
    },
    title: {
      description: 'Header title of block',
      table: {
        type: { summary: 'string' }
      }
    },
    featuredData: {
      description: 'Array of image refrences and alt text for carosel',
      table: {
        type: { summary: 'Array<{alt_text: string; image: string;}>' }
      }
    },
    carouselProps: {
      description: 'Props for the Carousel compnent',
      table: {
        type: { summary: 'Partial<Swiper>' }
      }
    }
  },
  parameters: {
    componentSubtitle:
      'Displays ainteractive touch supported carsel of logos for featured companies, configurable using yml by editors. Colour icons on hover, configurable using yaml by editors, keyboard accessible and WCAG compliant. ',
    docs: {
      // eslint-disable-next-line react/display-name
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Stories includePrimary={true} title="" />
          <ArgsTable story={PRIMARY_STORY} />
        </>
      )
    }
  }
} as ComponentMeta<typeof HomepageFeatured>;

const Template: ComponentStory<typeof HomepageFeatured> = (args) => <HomepageFeatured {...args} />;
export const Primary = Template.bind({});

Primary.args = {
  storybook: true,
  title: 'BUT HOW DOES INNERBODY ACTUALLY WORK',
  featuredData: [
    {
      image: 'FeaturedHarvard',
      alt_text: 'Featured in Harvard'
    },
    {
      image: 'FeaturedLifehacker',
      alt_text: 'Featured in Lifehacker'
    },
    {
      image: 'FeaturedLos_angeles_times_logo',
      alt_text: 'Featured in Los Angeles Times'
    },
    {
      image: 'FeaturedMenSJournal',
      alt_text: "Featured in Men's Journal"
    },
    {
      image: 'FeaturedNational_public_radio_logo',
      alt_text: 'Featured in NPR'
    },
    {
      image: 'FeaturedNewyorktimes',
      alt_text: 'Featured in New York Times'
    },
    {
      image: 'FeaturedOprah',
      alt_text: 'Featured in Oprah'
    }
  ],
  carouselProps: {
    slidesPerView: 3,
    spaceBetween: 42,
    breakpoints: {
      320: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      480: {
        slidesPerView: 3,
        spaceBetween: 22
      },
      640: {
        slidesPerView: 4,
        spaceBetween: 28
      },
      992: {
        slidesPerView: 7,
        spaceBetween: 42
      }
    }
  }
};

Primary.parameters = {
  docs: {
    // The story now contains a description
    storyDescription: '7 Logos supported by default.'
  }
};
