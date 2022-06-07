import React, { useRef, FC, useEffect, useState } from 'react';
import { Box } from '@chakra-ui/react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Footer from '../../components/footer';
import styled from '@emotion/styled';
// @ts-ignore
import footerData from '../../data/global/footer.yml';
import PageNavigation from '../article/page-navigation';
import { markdown } from 'markdown';

type Props = {
  children: JSX.Element;
  frontMatter: any;
  setTheme: () => void;
  isLightTheme: boolean;
  allPostsData: any;
};

const meta = {
  type: 'website'
};

const MiscLayout: FC<Props> = ({ children, allPostsData, frontMatter }) => {
  const profileRef = useRef(null);
  const [ECVisible, setECVisible] = useState<boolean | undefined>(false);
  const [currentUrl, setCurrentUrl] = useState<string | undefined>();
  const [mainAuthorFullName, setMainAuthorFullName] = useState<string>('');
  const [metaFaqData, setMetaFaqData] = useState<any>();
  const router = useRouter();

  const renderExpandedCallouts = () => {
    const allExpandedCallouts = document.getElementsByClassName('expanded-callout-main');
    const expandedCalloutVisible = [];
    for (let i = 0; i < allExpandedCallouts?.length; i++) {
      const rect = allExpandedCallouts?.[i].getBoundingClientRect();
      expandedCalloutVisible?.push(
        rect.top >= 0 - document.documentElement.clientHeight &&
          rect.bottom <= window.innerHeight + document.documentElement.clientHeight
      );
    }
    setECVisible(expandedCalloutVisible?.includes(true));
  };

  // const renderFAQs = () => {
  //   const currentPageContnet = allPostsData?.find(
  //     (data) => data?.['old-permalink'] === router.asPath
  //   );
  //   console.log(document.getElementsByClassName('faq-main'));

  //   // const allElements = parser.parseFromString(currentPageContnet?.content, 'text/html');
  //   // console.log('currentPageContnet', allElements);

  //   return 'data';
  // };

  // const renderMainAuthor = () => {
  //   return frontMatter?.author?.secondary_authot
  //     ? `
  //     "reviewBy": {
  //       "@type": "Person",
  //       "name": "${mainAuthorFullName}"
  //     }`
  //     : '';
  // };

  const renderAllFAQs = () => {
    const faqArr = [];
    const parser = new DOMParser();
    const thisPageData = allPostsData?.find((data) => data?.['old-permalink'] === router?.asPath);
    const thisPageContent = parser.parseFromString(thisPageData?.content, 'text/html');
    const thisPageAllFaqs = thisPageContent?.getElementsByTagName('frequentlyaskedquestion');

    for (let i = 0; i < thisPageAllFaqs?.length; i++) {
      faqArr?.push({
        '@type': 'Question',
        name: thisPageAllFaqs?.[i]?.getAttribute('title'),
        acceptedAnswer: {
          '@type': 'Answer',
          text: markdown.toHTML(thisPageAllFaqs?.[i]?.innerHTML)
        }
      });
    }
    setMetaFaqData(`{
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': ${JSON.stringify(faqArr)}
    }`);
  };

  return (
    <>
      <Head>
        <title>Innerbody - {frontMatter.title}</title>
      </Head>
      <MiscPageBox id="profile" ref={profileRef}>
        <Box className="misc-page-data">
          <Box className="misc-page-right">{children}</Box>
        </Box>
      </MiscPageBox>
      <Footer footerData={footerData} />
    </>
  );
};
const MiscPageBox = styled(Box)`
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
  .misc-heading {
    font-size: 32px !important;
    font-family: proxima-nova !important;
    color: #404145;
    margin-left: 15px;
  }
  .misc-page-right h3 {
    font-size: 22px !important;
    font-family: proxima-nova !important;
    margin-left: 15px;
    color: #404145;
  }
  .misc-page-right h4 {
    font-size: 18px !important;
    font-family: proxima-nova !important;
    margin-left: 15px;
    color: #404145;
  }
  .misc-page-right .chakra-link {
    color: #e54253 !important;
    text-decoration: underline !important;
  }
  .chakra-button {
    overflow: hidden;
    position: relative;
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
      background-color: rgba(0, 0, 0, 0.3);
      transition: 400ms;
    }
    &:hover {
      &::before {
        width: 100%;
        background-color: rgba(0, 0, 0, 0.3);

        pointer-events: none;
      }
    }
  }
  .misc-page-data {
    display: flex;
    width: 100%;
    .misc-page-right {
      min-width: 100%;
      > ul {
        padding-left: 40px;
        margin: 10px 0px;
        position: relative;
        li {
          position: relative;
          &::marker {
            opacity: 0;
            color: transparent;
            display: none;
          }
          &::before {
            content: '•';
            color: #16a0b7;
            width: 4px;
            height: 4px;
            line-height: 0;
            font-size: 36px;
            position: absolute;
            top: 11px;
            left: -25px;
          }
        }
      }
      > ol {
        margin: 10px 0px;
        padding-left: 35px;
      }
    }
  }
  @media (max-width: 800px) {
    .misc-page-data {
      display: flex;
      .misc-page-left {
        min-width: 0%;
        display: none;
      }
      .misc-page-right {
        min-width: 100%;
      }
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

export default MiscLayout;
