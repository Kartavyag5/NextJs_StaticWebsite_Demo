import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import HomepageCommonHeader from '../common/header';
import Imgix from 'react-imgix';
import Link from 'next/link';

const ReadThisNext = ({ articles, allPostsData, storybook }) => {
  const [allBlogsData, setAllBlogsData] = useState([]);

  useEffect(() => {
    fetchBlogsData();
  }, []);

  useEffect(() => {
    fetchBlogsData();
  }, [allPostsData]);

  const fetchBlogsData = async () => {
    const filteredBlogData = allPostsData.map((blog, index) => {
      const contentArr = blog?.content && blog?.content?.split('\n');
      const contentImageIndex = contentArr?.findIndex((data) => data?.includes('<MainImage'));
      let finalIndex: string | undefined;
      if (storybook) {
        finalIndex = '-1';
      } else {
        for (let i = 0; !contentArr?.[i + contentImageIndex]?.includes('imageUrl'); i++) {
          finalIndex = i + contentImageIndex;
        }
      }
      return {
        image:
          contentArr[parseInt(finalIndex) + 1]?.split('"')?.[1] ??
          contentArr[parseInt(finalIndex) + 1]?.split("'")?.[1],
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
    <Flex
      flexDirection={'column'}
      w={'auto'}
      m={'10px'}
      borderTop={'2px solid #eaebed'}
      py={'30px'}>
      <HomepageCommonHeader headerTitle="READ THIS NEXT" />
      <CardContainer>
        {allBlogsData?.length > 0 &&
          articles?.map((permalink, index) => (
            <BlogCardBox key={index}>
              <Link href={permalink}>
                <a>
                  <Imgix
                    className="rtn-card-image"
                    src={getBlogContent(permalink)?.image}
                    sizes="100vw"
                    alt={getBlogContent(permalink)?.title}
                  />
                </a>
              </Link>
              <Heading className="rtn-card-title" as={'h2'}>
                <Link href={permalink}>
                  <a>{getBlogContent(permalink)?.title}</a>
                </Link>
              </Heading>
              <Text className="rtn-card-desc">{getBlogContent(permalink)?.desc}</Text>
            </BlogCardBox>
          ))}
      </CardContainer>
    </Flex>
  );
};

const CardContainer = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 800px) {
    justify-content: space-between;
  }
`;

const BlogCardBox = styled(Box)`
  font-family: proxima-nova;
  min-width: 246px;
  width: 31.5%;
  height: auto;
  border: 1px solid #e0e0e0;
  box-shadow: 0px 0px 3px -1px rgba(0,0,0,0.15),inset 0px 0px 2px -1px rgba(0,0,0,0.1);
  border-radius: 4px;
  margin: 5px;
  overflow: hidden;

  @media (max-width: 1130px) {
    width: 48%;
  }

  @media (max-width: 540px) {
    width: 100%;
  }
  .rtn-card-image {
    height: 180px;
    width: 100%;
    object-fit: fill;
  }
  .rtn-card-title {
    font-size: 21px;
    margin: 15px;
  }
  .rtn-card-desc {
    margin: 15px;
    margin-top: 0px;
    font-size: 14px;
    line-height: 1.3;
    padding: 0px;
  }
`;

export default ReadThisNext;


// articles paths which passed in MDX, that doesn't exists:
// articles={[
//   '/home-health-tests/letsgetchecked-review',
//   '/home-health-tests/everlywell-review',
//   '/home-health-tests/metabolism-test',
//   '/home-health-tests/food-sensitivity-tests'
// ]}
