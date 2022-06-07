import { Box, Grid, GridItem, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import HomepageCommonHeader from '../common/header';
import Imgix from 'react-imgix';
import { WaterMarkImage } from '../../assets/js/watermarkImage';
import { ChevronRightIcon } from '@chakra-ui/icons';
import Link from 'next/link';

const LinkListLarge = ({ articles, allPostsData, title, titleId }) => {
  const [allBlogsData, setAllBlogsData] = useState([]);

  useEffect(() => {
    fetchBlogsData();
  }, [allPostsData]);

  const fetchBlogsData = async () => {
    const filteredBlogData = allPostsData.map((blog) => {
      const parser = new DOMParser();
      const imageUrl = parser
        ?.parseFromString(blog?.content, 'text/html')
        ?.getElementsByTagName('mainimage')?.[0]
        ?.getAttribute('imageUrl');
      return {
        image: imageUrl,
        title: blog.title,
        desc: blog.meta_description,
        slug: blog?.['old-permalink'],
        superTitle: blog.superTitle
      };
    });
    setAllBlogsData([...filteredBlogData]);
  };

  const getBlogContent = (permalink) => {
    if (allBlogsData?.length > 0) {
      return allBlogsData.find((blog) => blog?.slug?.includes(permalink));
    }
  };

  return (
    <LinkListLargeBox id="FoodAndNutrition">
      <HomepageCommonHeader headerTitle={title?.toUpperCase()} />
      <Grid
        className="list-list-large-cards"
        // templateColumns={{ xs: 'repeat(1, 1fr)', sm2: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }}
        gap={4}>
        {allBlogsData?.length > 0 &&
          articles.map((data, index) => (
            <Link key={index} href={data?.permalink}>
              <a>
                <CardBox
                  watermarkpos={data?.watermarkpos}
                  className="list-list-large-card"
                  key={index}>
                  <Box className="list-list-large-card-image-box">
                    {getBlogContent(data?.permalink)?.image !== undefined && (
                      <>
                        <WaterMarkImage className="list-list-large-card-watermark-img" />
                        <Imgix
                          className="list-list-large-card-image"
                          src={getBlogContent(data?.permalink)?.image}
                          sizes="100vw"
                        />
                      </>
                    )}
                  </Box>
                  <Box className="list-list-large-card-details">
                    <Box className="link-list-large-card-super-title">{data?.superTitle}</Box>

                    {/* <Link href={data?.permalink}> */}
                    {/* <a> */}
                    <Box className="list-list-large-card-title">
                      {getBlogContent(data?.permalink).title}
                    </Box>
                    {/* </a> */}
                    {/* </Link> */}
                    <Text className="list-list-large-card-desc">
                      {getBlogContent(data?.permalink).desc}
                    </Text>
                    <Box className="list-list-large-card-read-more">
                      {/* <Link href="#">
                    <a> */}
                      Read More
                      <ChevronRightIcon boxSize={6} />
                      {/* </a>
                  </Link> */}
                    </Box>
                  </Box>
                </CardBox>
              </a>
            </Link>
          ))}
      </Grid>
    </LinkListLargeBox>
  );
};

const CardBox = styled(GridItem)`
  border: 1px solid #f1f2f4;
  box-shadow: 0px 0px 3px -1px rgba(0, 0, 0, 0.15), inset 0px 0px 2px -1px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  font-family: proxima-nova;

  .list-list-large-card-image-box {
    position: relative;
    height: 198px;
    background: lightgrey;
    .list-list-large-card-watermark-img {
      position: absolute;
      top: 0;
      left: ${(props) =>
        props.watermarkpos === 'left' ? 0 : props.watermarkpos === 'center' ? '50%' : 'auto'};
      transform: ${(props) => props.watermarkpos === 'center' && 'translate(-50%)'};
      right: ${(props) => (props.watermarkpos === 'right' ? 0 : 'auto')};
      width: fit-content;
      height: 100%;
      opacity: 0.5;
      /* ${(props) =>
        props.watermarkpos === 'center'
          ? 'left: 50%; transform: translate(-50%)'
          : props.watermarkpos === 'right'
          ? 'right: 0; left: auto'
          : ''} */
    }
    .list-list-large-card-image {
      min-width: 356px;
      width: 100%;
      height: 198px;
      object-fit: cover;
    }
  }
  .list-list-large-card-details {
    display: flex;
    flex-direction: column;
    padding: 14px;
    .list-list-large-card-badge {
      color: #16a0b7;
      font-size: 14px;
      font-weight: 500;
    }
    .link-list-large-card-super-title {
      font-size: 14px;
      font-weight: bold;
      color: #16a0b7;
      min-height: 25px;
    }
    .list-list-large-card-title {
      font-size: 18px;
      color: #404145;
      font-weight: 600;
    }
    .list-list-large-card-desc {
      font-size: 16px;
      color: #141518;
      padding: 0;
    }
    .list-list-large-card-read-more {
      font-size: 16px;
      color: #e54253;
      cursor: pointer;
      width: fit-content;
      line-height: 0;
    }
  }
`;

const LinkListLargeBox = styled(Box)`
  display: flex;
  flex-direction: column;
  font-family: proxima-nova;
  max-width: 1127px;
  .list-list-large-cards {
    margin: 10px 0 40px 0;
    grid-template-columns: repeat(3, 1fr);
    @media (max-width: 769px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 575px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
  @media (max-width: 1130px) {
    padding: 0px 10px;
  }
`;

export default LinkListLarge;
