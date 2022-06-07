import React, { FC } from 'react';
import dynamic from 'next/dynamic';
import { Box, Flex } from '@chakra-ui/react';
import styled from '@emotion/styled';
import FeaturedDarkHarvard from '../../assets/featuredDarkHarvard.svg';
import FeaturedDarkHarvard_hover from '../../assets/featuredDarkHarvard_hover.svg';
import FeaturedDarkLifehacker from '../../assets/featuredDarkLifehacker.svg';
import FeaturedDarkLifehacker_hover from '../../assets/featuredDarkLifehacker_hover.svg';
import FeaturedDarkLos_angeles_times_logo from '../../assets/featuredDarkLosAngelesTimesLogo.svg';
import FeaturedDarkLos_angeles_times_logo_hover from '../../assets/featuredDarkLosAngelesTimesLogo_hover.svg';
import FeaturedDarkMenSJournal from '../../assets/featuredDarkMenSJournal.svg';
import FeaturedDarkMenSJournal_hover from '../../assets/featuredDarkMenSJournal_hover.svg';
import FeaturedDarkNational_public_radio_logo from '../../assets/featuredDarkNationalPublicRadioLogo.svg';
import FeaturedDarkNational_public_radio_logo_hover from '../../assets/featuredDarkNationalPublicRadioLogoHover.svg';
import FeaturedDarkNewyorktimes from '../../assets/featuredDarkNewYorkTimes.svg';
import FeaturedDarkNewyorktimes_hover from '../../assets/featuredDarkNewYorkTimes_hover.svg';
import FeaturedDarkOprah from '../../assets/featuredDarkOprah.svg';
import FeaturedDarkOprah_hover from '../../assets/featuredDarkOprah_hover.svg';
import { Swiper } from 'swiper/swiper-react';
import Image from 'next/image';
import HomepageCommonHeader from './header';
import { useEffect } from 'react';
const CarouselComponent = dynamic(() => import('../carousel'), { ssr: false });

type CommonFeaturedType = {
  /* `title` will use for the main header of the component */
  title: string;
  featuredData: Array<{ alt_text: string; image: string }>;
  carouselProps?: Partial<Swiper>;
  storybook: boolean | undefined;
};

const CommonFeatured: FC<CommonFeaturedType> = ({ title, featuredData, carouselProps = {}, storybook }) => {
  const hoverImage = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, imageName: string) => {
    const imageElement = document.querySelector(`#${imageName}`);
    let imageData;
    if (imageName === 'FeaturedNewyorktimes') imageData = FeaturedDarkNewyorktimes_hover;
    if (imageName === 'FeaturedNational_public_radio_logo')
      imageData = FeaturedDarkNational_public_radio_logo_hover;
    if (imageName === 'FeaturedLifehacker') imageData = FeaturedDarkLifehacker_hover;
    if (imageName === 'FeaturedHarvard') imageData = FeaturedDarkHarvard_hover;
    if (imageName === 'FeaturedMenSJournal') imageData = FeaturedDarkMenSJournal_hover;
    if (imageName === 'FeaturedOprah') imageData = FeaturedDarkOprah_hover;
    if (imageName === 'FeaturedLos_angeles_times_logo')
      imageData = FeaturedDarkLos_angeles_times_logo_hover;
    imageElement?.setAttribute('src', imageData?.src);
    imageElement?.setAttribute('srcset', storybook ? imageData : "");
  };

  const originalImage = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    imageName: string
  ) => {
    const imageElement = document.querySelector(`#${imageName}`);
    let imageData;
    if (imageName === 'FeaturedNewyorktimes') imageData = FeaturedDarkNewyorktimes;
    if (imageName === 'FeaturedNational_public_radio_logo')
      imageData = FeaturedDarkNational_public_radio_logo;
    if (imageName === 'FeaturedLifehacker') imageData = FeaturedDarkLifehacker;
    if (imageName === 'FeaturedHarvard') imageData = FeaturedDarkHarvard;
    if (imageName === 'FeaturedMenSJournal') imageData = FeaturedDarkMenSJournal;
    if (imageName === 'FeaturedOprah') imageData = FeaturedDarkOprah;
    if (imageName === 'FeaturedLos_angeles_times_logo')
      imageData = FeaturedDarkLos_angeles_times_logo;
    imageElement?.setAttribute('src', imageData?.src);
    imageElement?.setAttribute('srcset', storybook ? imageData : "");
  };

  return (
    <FeaturedBox marginBottom={12} width="100%">
      <Flex
        alignItems="center"
        justifyContent="center"
        marginBottom={0}
        marginTop={0}
        marginLeft={15}
        marginRight={15}
        flexDirection="column">
        <HomepageCommonHeader headerTitle={title} />
      </Flex>
      <Box backgroundColor="#FAFAFA" minH={'120px'}>
        <Box margin="auto">
          <CarouselComponent
            {...carouselProps}
            data={featuredData.map((valueInner, index) => (
              <StyledFeaturedIconBox
                key={index}
                onMouseEnter={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
                  hoverImage(e, valueInner?.image)
                }
                onMouseLeave={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
                  originalImage(e, valueInner?.image)
                }
                className="swiper-lazy">
                <FeaturedIcon
                  id={valueInner?.image}
                  name={valueInner?.image}
                  alt={valueInner?.alt_text}
                  title={valueInner?.alt_text}
                  quality={100}
                  index={index}
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif"
                />
              </StyledFeaturedIconBox>
            ))}
          />
        </Box>
      </Box>
    </FeaturedBox>
  );
};

/**
 * @requires `FeatureIcons` as children for adding styling
 * Rather than importing the files for the hover, its better to update
 * the fill and stroke properity of the svg. As this reduce the footprint
 * of js.
 */
export const FeaturedIcon = (props: any) => {
  const { name } = props;

  let newProps: any;

  if (name === 'FeaturedNewyorktimes')
    newProps = {
      ...props,
      src: FeaturedDarkNewyorktimes,
      height: '82px',
      width: '145px'
    };
  if (name === 'FeaturedNational_public_radio_logo')
    newProps = {
      ...props,
      src: FeaturedDarkNational_public_radio_logo,
      height: '25px',
      width: '77px'
    };
  if (name === 'FeaturedLifehacker')
    newProps = {
      ...props,
      src: FeaturedDarkLifehacker,
      height: '26px',
      width: '105px'
    };
  if (name === 'FeaturedHarvard')
    newProps = {
      ...props,
      src: FeaturedDarkHarvard,
      height: '32px',
      width: '125px'
    };
  if (name === 'FeaturedMenSJournal')
    newProps = {
      ...props,
      src: FeaturedDarkMenSJournal,
      height: '20px',
      width: '95px'
    };
  if (name === 'FeaturedOprah')
    newProps = {
      ...props,
      src: FeaturedDarkOprah,
      height: '76px',
      width: '61px'
    };
  if (name === 'FeaturedLos_angeles_times_logo')
    newProps = {
      ...props,
      src: FeaturedDarkLos_angeles_times_logo,
      height: '41px',
      width: '146px'
    };

  delete newProps?.index;
  delete newProps?.name;

  return (
    <Image
      {...newProps}
      src={
        !newProps?.src?.src ? newProps?.src : { ...newProps?.src, src: `/${newProps?.src?.src}` }
      }
    />
  );
};

const StyledFeaturedIconBox = styled(Box)`
  & {
    display: flex;
    align-items: center;
    justify-content: center;
    width: fit-content;
    height: 120px;
  }

  img {
    background-size: contain !important;
    background-repeat: no-repeat !important;
    filter: blur(0px) !important;
    @media (max-width: 960px) {
      background-position: 50% 50%;
    }
  }
`;

const FeaturedBox = styled(Box)`
  .styled-carousel-component {
    position: relative;
    padding: 0px 20px;
    .swiper-container {
      max-width: 980px;
      position: unset;
      @media (min-width: 992px) {
        display: flex;
        justify-content: center;
      }
      .swiper-wrapper {
        width: auto !important;
        .swiper-slide {
          display: flex;
          justify-content: center;
          @media (min-width: 992px) {
            margin-right: 37px !important;
            width: auto !important;
          }
        }
      }
    }
    .swiper-pagination.swiper-pagination-bullets {
      bottom: -45px;

      .swiper-pagination-bullet {
        margin-right: 20px;
        background: #d5d7db;
        opacity: 1;
        width: 11px;
        height: 11px;
        &.swiper-pagination-bullet-active {
          background: #7e8085;
        }
      }
    }
  }
`;

export default CommonFeatured;
