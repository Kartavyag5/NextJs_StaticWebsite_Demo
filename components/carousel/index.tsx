import React, { FC, useEffect } from 'react';
import SwiperCore, {
  Pagination,
  Keyboard,
  Lazy,
  EffectFade,
  EffectFlip,
  EffectCube,
  EffectCoverflow,
  Navigation
} from 'swiper';
import { Box } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from '@emotion/styled';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

SwiperCore.use([
  Pagination,
  Keyboard,
  Lazy,
  EffectFade,
  EffectFlip,
  EffectCube,
  EffectCoverflow,
  Navigation
]);

type CarouselType = Swiper & { data: Array<unknown> };

const CarouselComponent: FC<CarouselType> = ({ data, ...props }) => {
  useEffect(() => {
    window.addEventListener('load', setPaginationDotsTabbable);
    window.addEventListener('resize', setPaginationDotsTabbable);

    return () => {
      window.removeEventListener('load', setPaginationDotsTabbable);
      window.removeEventListener('resize', setPaginationDotsTabbable);
    };
  }, []);

  const setPaginationDotsTabbable = () => {
    const allPaginationElements = document.getElementsByClassName('swiper-pagination-bullet');
    for (let i = 0; i < allPaginationElements.length; i++) {
      allPaginationElements?.[i]?.setAttribute('tabindex', '0');
      allPaginationElements?.[i]?.setAttribute('data-index', `${i}`);
      allPaginationElements?.[i]?.setAttribute(
        'aria-label',
        `Featured Logo Showcase Position ${i + 1}`
      );
    }
  };

  const movePage = (event: SwiperCore, keyCode) => {
    const nextActive = document.activeElement;
    const currentActive = document.getElementsByClassName('swiper-pagination-bullet-active');
    if (keyCode === 13) {
      if (document.activeElement.classList.contains('swiper-custom-left-arrow')) {
        event.slidePrev();
      }
      if (document.activeElement.classList.contains('swiper-custom-right-arrow')) {
        event.slideNext();
      }
    }
    if (keyCode === 13 && nextActive?.classList?.value?.includes('swiper-pagination-bullet')) {
      const currentActiveIndex = parseInt(currentActive?.[0]?.getAttribute('data-index'));
      const nextActiveIndex = parseInt(nextActive?.getAttribute('data-index'));
      if (nextActiveIndex > currentActiveIndex) {
        for (let i = 0; i < nextActiveIndex - currentActiveIndex; i++) {
          event.slideNext();
        }
      } else if (currentActiveIndex > nextActiveIndex) {
        for (let i = 0; i < currentActiveIndex - nextActiveIndex; i++) {
          event.slidePrev();
        }
      }
    }
  };

  return (
    <StyledCarouselComponent className="styled-carousel-component">
      <Swiper
        onKeyPress={(e: SwiperCore, keyCode) => movePage(e, keyCode)}
        init={true}
        className="homepage-swiper"
        pagination={{
          clickable: true,
          type: 'bullets'
        }}
        slidesOffsetAfter={0}
        slidesOffsetBefore={0}
        keyboard={{
          enabled: true,
          onlyInViewport: true
        }}
        lazy={true}
        preloadImages={false}
        speed={500}
        {...props}>
        {data.map((element, index) => (
          <SwiperSlide key={index}>{element}</SwiperSlide>
        ))}
      </Swiper>
    </StyledCarouselComponent>
  );
};

const StyledCarouselComponent = styled(Box)`
  /* Making this relative for the custom alignment of bullet component */
`;

export default CarouselComponent;
