import { Badge, Box, Button, Spacer, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';
import React, { FC, useEffect } from 'react';
import CarouselComponent from '../carousel';
import HomepageCommonHeader from '../common/header';
import { ChevronRightIcon, ChevronLeftIcon } from '@chakra-ui/icons';
import Imgix from 'react-imgix';
import Link from 'next/link';

type Props = {
  title: string;
  data: DataProps[];
  buttonColor: string;
  hoverbgcolor: string;
};

type DataProps = {
  imageUrl: string;
  tag: TagProp;
  title: string;
  price: number;
  priceWithDiscount: number;
  codeText: string;
  descText: string;
  imageAlt: string;
  buttonText: string;
  url: string;
};

type TagProp = {
  tagBgColor: string;
  tagColor: string;
  tagText: string;
};

const ExpandedCallout: FC<Props> = ({ title, data, buttonColor, hoverbgcolor }) => {
  useEffect(() => {
    const paginationContainer = document.getElementById('pagination-container');
    const leftArrow = document.getElementsByClassName('swiper-custom-left-arrow');
    const swiperPagination = document.getElementsByClassName('swiper-pagination')?.[0];
    const rightArrow = document.getElementsByClassName('swiper-custom-right-arrow');
    paginationContainer.appendChild(leftArrow?.[0]);
    paginationContainer.appendChild(swiperPagination);
    paginationContainer.appendChild(rightArrow?.[0]);
    const swiperContainer = document.getElementsByClassName('swiper-container');
    swiperContainer?.[0]?.insertBefore(paginationContainer, swiperContainer?.[0]?.children?.[0]);
  }, []);

  return (
    <ExpandedCalloutBox
      datalength={data?.length}
      bgdcolor={buttonColor}
      hoverbgcolor={hoverbgcolor}
      className="expanded-callout-main">
      <HomepageCommonHeader headerTitle={title} />
      <CarouselComponent
        breakpoints={{
          0: {
            slidesPerView: 'auto'
            // slidesPerGroup: 1,
          },
          430: {
            slidesPerView: 'auto'
            // slidesPerGroup: 2
          },
          560: {
            slidesPerView: 'auto'
            // slidesPerGroup: 2
          },
          1150: {
            slidesPerView: 3
            // slidesPerGroup: 3,
            // spaceBetween: 5
          }
        }}
        navigation={{
          prevEl: '.swiper-custom-left-arrow',
          nextEl: '.swiper-custom-right-arrow'
        }}
        data={data.map((valueInner, index) => (
          <Box key={index} className="swiper-lazy">
            <ProductCardBox>
              <Box className="expanded-callout-image-container">
                {/* <Image
                  src={valueInner?.imageUrl}
                  alt={valueInner?.title}
                  width={'262px'}
                  height={'183px'}
                  quality={100}
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif"
                /> */}
                <Imgix src={valueInner?.imageUrl} alt={valueInner?.imageAlt} sizes="100vw"></Imgix>
              </Box>
              <Badge
                bgColor={valueInner?.tag?.tagBgColor}
                color={valueInner?.tag?.tagColor}
                className="expanded-callout-tag">
                {valueInner?.tag?.tagText}
              </Badge>
              <Text as="span" className="expanded-callout-title">
                {valueInner?.title}
              </Text>
              {valueInner?.descText && (
                <Box className="expanded-callout-description">{valueInner?.descText}</Box>
              )}
              {valueInner?.price && (
                <Box className="expanded-callout-price-container">
                  <Text as="span" className="expanded-callout-discount-price">
                    ${valueInner?.priceWithDiscount}
                  </Text>
                  {valueInner?.priceWithDiscount && (
                    <>
                      <Text as="span" className="expanded-callout-price">
                        ${valueInner?.price}
                      </Text>
                    </>
                  )}
                </Box>
              )}
              <Spacer />
              <Link href={valueInner.url}>
                <Button tabIndex={0} className="expanded-callout-button">
                  <a tabIndex={-1}>{valueInner.buttonText ? valueInner.buttonText : 'Buy Now'}</a>
                </Button>
              </Link>
            </ProductCardBox>
          </Box>
        ))}
      />
      <ChevronLeftIcon tabIndex={0} className="swiper-custom-left-arrow" />
      <ChevronRightIcon tabIndex={0} className="swiper-custom-right-arrow" />
      <Box id="pagination-container" className="pagination-container" />
    </ExpandedCalloutBox>
  );
};

const ExpandedCalloutBox = styled(Box)`
  display: flex;
  max-width: 100vw;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 30px 10px;
  border-bottom: 2px solid #eaebed;
  border-top: 2px solid #eaebed;
  padding-bottom: 80px;
  padding-top: 25px;
  font-family: proxima-nova;
  overflow: hidden;

  button {
    margin-top: 10px;
    width: 100%;
    color: white;
    background: ${(props) => (props?.bgdcolor ? props?.bgdcolor : '#e54253')};
    &::before {
      background-color: ${(props) =>
        props?.hoverbgcolor ? props?.hoverbgcolor : 'rgba(0, 0, 0, 0.3);'} !important;
    }
    &:hover {
      background: ${(props) => (props?.bgdcolor ? props?.bgdcolor : '#e54253')};
    }
  }

  img {
    background-size: contain !important;
    background-repeat: no-repeat !important;
    filter: blur(0px) !important;
    @media (max-width: 960px) {
      background-position: 50% 50%;
    }
  }

  @media (max-width: 800px) {
    margin-right: 0px;
    margin-left: 0px;
  }

  .swiper-custom-left-arrow,
  .swiper-custom-right-arrow {
    display: ${(props) => (props.datalength === 3 ? 'none' : 'inline')};
    border-radius: 4px;
    background: #ecf0f1;
    color: #404145;
    width: 25px;
    height: 25px;
    margin: 0 10px;
    cursor: pointer;
    @media (max-width: 1149px) {
      display: inline;
    }
  }

  .pagination-container {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    position: absolute;
    bottom: -50px;
    left: 50%;
    transform: translateX(-50%);
    margin: 0px auto;
    .swiper-button-disabled {
      color: #d5d7db;
    }
    @media (max-width: 800px) {
      bottom: -60px;
      max-width: 90vw;
      width: 100%;
    }
  }

  .styled-carousel-component {
    position: relative;
    width: 100%;
    .swiper-container {
      position: unset;
      margin: 0px;
      display: flex;
      width: auto !important;

      @media (max-width: 430px) {
        padding-left: 10px;
      }
      .swiper-slide {
        display: flex;
        justify-content: center;
        height: auto;
        min-width: 279px;
        max-width: 279px;
      }
    }
  }

  .swiper-pagination.swiper-pagination-bullets {
    display: flex;
    position: unset;
    flex-wrap: wrap;
    /* max-width: 100px; */

    .swiper-pagination-bullet {
      margin: 4px 10px;
      background: #d5d7db;
      opacity: 1;
      width: 11px;
      height: 11px;

      &.swiper-pagination-bullet-active {
        background: #e54253;
      }
    }
  }
`;

const ProductCardBox = styled(Box)`
  max-width: 262px;
  display: flex;
  flex-direction: column;
  padding: 25px 15px 15px;
  border: 1px solid #e0e0e0;
  box-shadow: 0px 0px 3px -1px rgba(0, 0, 0, 0.15), inset 0px 0px 2px -1px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  height: 100%;

  .expanded-callout-image-container {
    margin-bottom: 7px;
    img {
      width: 262px;
      height: 183px;
      /* width: 100%; */
      object-fit: cover;
    }
  }
  .expanded-callout-tag {
    border-radius: 4px;
    width: max-content;
    /* margin-bottom: 7px; */
  }
  .expanded-callout-title {
    font-size: 24px;
    font-weight: bold;
  }
  .expanded-callout-price-container {
    display: flex;
    align-items: center;
    .expanded-callout-discount-price {
      color: #16a0b7;
      font-size: 32px;
      font-weight: bold;
    }
    .expanded-callout-price {
      color: #9fa1a6;
      font-size: 22px;
      text-decoration: line-through;
      margin-left: 10px;
    }
  }
  .expanded-callout-description {
    font-size: 16px;
  }
  .expanded-callout-button {
    a {
      height: fit-content;
    }
  }
`;

export default ExpandedCallout;
