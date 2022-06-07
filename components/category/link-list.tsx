import { Box, Grid, GridItem, Heading, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';
import React, { FC, useEffect, useState } from 'react';
import Imgix from 'react-imgix';
import Link from 'next/link';

type Props = {
  articles: string[];
  title: string;
  allPostsData: any;
};

const LinkList: FC<Props> = ({ articles, title, allPostsData }) => {
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
        slug: blog?.['old-permalink']
      };
    });
    setAllBlogsData([...filteredBlogData]);
  };  

  const getBlogContent = (permalink) => {
    if (allBlogsData?.length > 0) {
      return allBlogsData.find((blog) => blog.slug?.includes(permalink));
    }
  };

  return (
    <LinklistBox>
      <Heading>{title?.toUpperCase()}</Heading>
      <Box className="link-list-cards">
        <Grid className="link-lists-card-grid" gap={4}>
          {allBlogsData?.length > 0 &&
            articles.map((permalink, index) => (
              <GridItem className="link-list-card" key={index} w="100%">
                <Link href={permalink}>
                  <a>
                    <Box className="link-list-image-box">
                      <Imgix
                        className="link-list-image"
                        src={getBlogContent(permalink)?.image}
                        sizes="100vw"
                      />
                    </Box>
                  </a>
                </Link>
                <Box className="link-list-details-box">
                  <Link href={permalink}>
                    <a>
                      <Heading className="link-list-details-heading">
                        {getBlogContent(permalink)?.title}
                      </Heading>
                    </a>
                  </Link>
                  <Text as="span" className="link-list-details-desc">
                    {getBlogContent(permalink)?.desc}
                  </Text>
                </Box>
              </GridItem>
            ))}
        </Grid>
      </Box>
    </LinklistBox>
  );
};

const LinklistBox = styled(Box)`
  margin: 20px 0px;
  max-width: 1127px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  font-family: proxima-nova;
  > h2 {
    font-size: 18px;
    letter-spacing: 2.88px;
  }
  .link-list-cards {
    width: 100%;
    margin: 15px 0px;
    height: auto;
    .link-lists-card-grid {
      grid-template-columns: repeat(2, 1fr);
      @media (max-width: 769px) {
        grid-template-columns: repeat(1, 1fr);
      }
      .link-list-card {
        border: 1px solid #f1f2f4;
        box-shadow: 0px 0px 3px -1px rgba(0,0,0,0.15),inset 0px 0px 2px -1px rgba(0,0,0,0.1);
        border-radius: 4px;
        padding: 10px;
        display: flex;
        .link-list-image-box {
          min-width: 125px;
          width: 125px;
          height: 125px;
          .link-list-image {
            border-radius: 4px;
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
        .link-list-details-box {
          display: flex;
          flex-direction: column;
          margin: 0px 10px;
          .link-list-details-heading {
            font-size: 18px;
          }
          .link-list-details-desc {
            margin-top: 3px;
            font-size: 14px;
          }
        }
      }
    }
  }
  @media (max-width: 1127px) {
    padding: 10px;
  }
  @media (max-width: 769px) {
    padding: 10px;
    > h2 {
      font-size: 16px;
    }
    .link-list-cards {
      .link-list-card {
        .link-list-image-box {
          min-width: 95px;
          width: 95px;
          height: 95px;
        }
      }
    }
  }
`;

export default LinkList;
