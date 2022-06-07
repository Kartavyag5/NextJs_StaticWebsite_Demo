import React from 'react';
import { Box, Grid, GridItem, HStack, Text, Stack } from '@chakra-ui/react';
import styled from '@emotion/styled';
import Image from 'next/image';
import { FeaturedHeader } from '../../assets/js/featuredHeader';
import FeaturedComponent282 from '../../assets/Component282.svg';
import FeaturedGroup550 from '../../assets/Group550.svg';
import FeaturedDiscount from '../../assets/discount.svg';
import Sample from '../../assets/Logo_mockup.jpg';
import HomepageCommonHeader from './header';
import Imgix from 'react-imgix';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import 'lazysizes/plugins/attrchange/ls.attrchange';

const HomepageTrust = ({ trustData }) => {
  return (
    <TrustBox>
      <Box className="trustbox-header">
        <HomepageCommonHeader headerTitle={trustData?.title} />
      </Box>
      <Grid
        className="trustbox-details"
        display={'grid'}
        marginTop={'-40px'}
        templateColumns={{ lg: 'repeat(3, 1fr)', md: 'repeat(1, 1fr)' }}
        templateRows={{ lg: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }}
        gap={'20px'}>
        {trustData?.units?.map((data, index) => (
          <CustomizeGridItem indexinner={index} className="trustbox-grid-item" key={index}>
            <Box className="trustbox-card">
              <Stack className="trustbox-card-top">
                <FeaturedIcon
                  quality={100}
                  index={index}
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif"
                />
                <Text className="trustbox-card-heading">{data?.number}</Text>
              </Stack>
              <Text className="trustbox-card-description">{data?.text}</Text>
            </Box>
          </CustomizeGridItem>
        ))}
      </Grid>
    </TrustBox>
  );
};

export const FeaturedIcon = (props: any) => {
  let newProps;

  if (props.index === 0) {
    newProps = {
      ...props,
      width: 48,
      height: 48,
      src: FeaturedComponent282
    };
  } else if (props.index === 1) {
    newProps = {
      ...props,
      width: 45,
      height: 47,
      src: FeaturedGroup550
    };
  } else {
    newProps = {
      ...props,
      width: 55,
      height: 48,
      src: FeaturedDiscount
    };
  }
  
  return <Image {...newProps} src={ !newProps?.src?.src ? newProps?.src : {...newProps?.src, src:`/${newProps?.src?.src}`}} />
};

const CustomizeGridItem = styled(GridItem)`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 0px;
  padding-top: 0px;
  border-left: ${(props) => props?.indexinner !== 0 && '2px solid #ecf0f1'};
  justify-content: initial;
  .trustbox-card {
    align-items: flex-start;
    .trustbox-card-description {
      text-align: left;
    }
    .trustbox-card-top {
      flex-direction: row;
      .trustbox-card-heading {
        margin-left: 25px;
        font-size: 52px;
      }
    }
  }

  @media (max-width: 992px) {
    justify-content: center;
    border-left: 0px;
    border-top: ${(props) => props?.indexinner !== 0 && '2px solid #ecf0f1'};
    padding-top: ${(props) => props?.indexinner !== 0 && '45px'};

    .trustbox-card {
      align-items: center;
      .trustbox-card-description {
        text-align: center;
      }
      .trustbox-card-top {
        flex-direction: column;
        .trustbox-card-heading {
          margin-left: 0px;
        }
      }
    }
  }
  .trustbox-card {
    padding: 0px 30px;
    display: flex;
    flex-direction: column;
    img {
      min-height: 50px;
      min-width: 50px;
      background-size: contain !important;
      background-repeat: no-repeat !important;
      filter: blur(0px) !important;
      @media (max-width: 960px) {
        background-position: 50% 0%;
      }
    }
  }
`;

const TrustBox = styled(Box)`
  // width: 70vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 0px;
  padding-bottom: 35px;
  font-family: proxima-nova;
  color: #404145;
  min-height: 350px;

  @media (max-width: 992px) {
    width: 100vw;
  }
  .trustbox-header {
    letter-spacing: 3px;
    font-size: 16px;
    font-weight: 600;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .trustbox-details {
    margin: 20px 0px;
    min-height: 160px;
    max-width: 980px;

    .trustbox-grid-item {
      /* display: flex;
      flex-direction: column;
      align-items: center;
      .trustbox-card {
        padding: 0px 30px;
        display: flex;
        flex-direction: column;
        img {
          min-height: 50px;
          min-width: 50px;
          background-size: contain !important;
          background-repeat: no-repeat !important;
          filter: blur(0px) !important;
          @media (max-width: 960px) {
            background-position: 50% 0%;
          }
        }
      } */
    }
  }
`;

export default HomepageTrust;
