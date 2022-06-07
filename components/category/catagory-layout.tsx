import React, { useRef, FC } from 'react';
import { Box } from '@chakra-ui/react';
// import FrontMatter from '@/components/article/front-matter';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Footer from '../../components/footer';
import styled from '@emotion/styled';

// @ts-ignore
import footerData from '../../data/global/footer.yml';
// import PageNavigation from './page-navigation';

type Props = {
  children: JSX.Element;
  frontMatter: any;
  setTheme: () => void;
  isLightTheme: boolean;

};

const meta = {
  type: 'website'
};

const CategoryLayout: FC<Props> = ({ children, frontMatter }) => {
  const profileRef = useRef(null);
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Innerbody - {frontMatter.title}</title>
      </Head>
      <CategoryPageBox id="profile" ref={profileRef}>
        <Box className="category-page-data">{children}</Box>
      </CategoryPageBox>
      <Footer footerData={footerData} />
    </>
  );
};

const CategoryPageBox = styled(Box)`
  padding-top: 127px;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  margin: 0px auto;
  position: relative;

  .chakra-button {
    overflow: hidden;
    position: relative;
    transition: 200ms;
    a {
      z-index: 1;
    }
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      color: rgba(0, 0, 0, 0.5);
      background-color: rgba(0, 0, 0, 0.3);
      transition: 400ms;
    }
    &:hover {
      &::before {
        width: 100%;
        pointer-events: none;
      }
    }
  }

  .category-page-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  @media (max-width: 800px) {
    .category-page-data {
      display: flex;
      flex-direction: column;
    }
  }

  .homepage-watermark-img {
    position: absolute;
    z-index: -1;
    top: 50%;
    left: 0;
  }
  &::after {
    content: '';
    background-image: url('');
  }
`;

export default CategoryLayout;
