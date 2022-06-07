import React from 'react';
import { Box, Flex, Grid, GridItem, Link, Spacer, Text } from '@chakra-ui/react';
import { FeaturedHeader } from '../../assets/js/featuredHeader';
import Imgix from 'react-imgix';
import styled from '@emotion/styled';
import { WaterMarkImage } from '../../assets/js/watermarkImage';
import { IoIosArrowForward } from 'react-icons/io';
import HomepageCommonHeader from '../common/header';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const HomepageLinkUnit = ({ linksData }) => {
  return (
    <Box mb={10} minH={'1000px'}>
      <Flex direction="column" alignItems="center">
        <Flex
          alignItems="center"
          justifyContent="center"
          marginBottom={0}
          marginTop={0}
          marginLeft={15}
          marginRight={15}
          flexDirection="column">
          <HomepageCommonHeader headerTitle={linksData?.title} />
        </Flex>
        <Grid
          display="grid"
          templateColumns={{ lg: 'repeat(2, 1fr)', md: 'repeat(1, 1fr)' }}
          templateRows={'repeat(1,1fr)'}
          gap="26px 36.5px">
          {linksData.link_units.map((value, index) => {
            return (
              <GridItem key={index} fontFamily={'proxima-nova'} fontWeight={700}>
                <CardBox>
                  <Box className="card-top">
                    <WaterMarkImage
                      className="watermark-img"
                      watermarkpos={value.watermark_position}
                    />
                    <Imgix
                      className="card-img"
                      src={value.image}
                      sizes="100vw"
                      alt={value?.title}
                    />
                  </Box>
                  <Box
                    h={58}
                    display={'flex'}
                    alignItems={'center'}
                    bg={'#F2F2F2'}
                    color={'hsla(228, 4%, 26%, 1)'}
                    fontSize={'22px'}
                    px={17}>
                    {value.title}
                  </Box>
                  <Box p={'16px'} className="card-details">
                    {value.links.map((valueInner, indexInner) => {
                      return (
                        <Link
                          display={'block'}
                          key={indexInner}
                          href="{value.url}"
                          className="unit-url">
                          <Box
                            // key={indexInner}
                            h={'32px'}
                            borderBottom={
                              indexInner !== value?.links?.length - 1 &&
                              '2px solid hsla(216, 12%, 92%, 1)'
                            }
                            fontSize={'16px'}
                            display={'flex'}
                            alignItems={'center'}
                            m={1}>
                            {valueInner.link}
                            <Spacer />
                            <IoIosArrowForward className="right-arrow" />
                          </Box>
                        </Link>
                      );
                    })}
                  </Box>
                </CardBox>
              </GridItem>
            );
          })}
        </Grid>
      </Flex>
    </Box>
  );
};

const CardBox = styled(Box)`
  min-height: 444px;
  width: 474px;
  background: #ffffff;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 3px;
  overflow: hidden;

  @media (max-width: 500px) {
    width: 335px;
  }

  .card-top {
    position: relative;
    overflow: hidden;

    .card-img {
      height: 198px;
      width: 100%;
      object-fit: cover;
    }

    .watermark-img {
      position: absolute;
      width: 20%;
      height: auto;
      opacity: 0.5;
      top: ${(props) => {
        if (props?.children?.[0]?.props?.children?.[0]?.props?.watermarkpos === 'left') {
          return '20px';
        } else if (props?.children?.[0]?.props?.children?.[0]?.props?.watermarkpos === 'right') {
          return 'auto';
        } else {
          return '0px';
        }
      }};
      left: ${(props) => {
        if (props?.children?.[0]?.props?.children?.[0]?.props?.watermarkpos === 'left') {
          return '0px';
        } else if (props?.children?.[0]?.props?.children?.[0]?.props?.watermarkpos === 'right') {
          return 'auto';
        } else {
          return '50%';
        }
      }};
      bottom: ${(props) => {
        if (props?.children?.[0]?.props?.children?.[0]?.props?.watermarkpos === 'left') {
          return 'auto';
        } else if (props?.children?.[0]?.props?.children?.[0]?.props?.watermarkpos === 'right') {
          return '20px';
        } else {
          return 'auto';
        }
      }};
      right: ${(props) => {
        if (props?.children?.[0]?.props?.children?.[0]?.props?.watermarkpos === 'left') {
          return 'auto';
        } else if (props?.children?.[0]?.props?.children?.[0]?.props?.watermarkpos === 'right') {
          return '0px';
        } else {
          return 'auto';
        }
      }};
      transform: ${(props) => {
        if (props?.children?.[0]?.props?.children?.[0]?.props?.watermarkpos === 'middle') {
          return 'translateX(-50%)';
        } else {
          return 'auto';
        }
      }};
    }
  }

  .card-details {
    font-weight: normal;
    .unit-url {
      cursor: pointer;
      &:hover {
        color: hsla(189, 79%, 40%, 1);
        .right-arrow {
          color: hsla(189, 79%, 40%, 1);
        }
      }
    }

    .right-arrow {
      color: hsla(351, 78%, 53%, 1);
      font-weight: bold;
      cursor: pointer;
    }
  }
`;

export default HomepageLinkUnit;
