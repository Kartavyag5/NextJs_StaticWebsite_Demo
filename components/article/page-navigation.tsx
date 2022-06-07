import { Box, Heading, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import RedTriangle from '../../assets/red-triangle.svg';
import { useRouter } from 'next/router';

const PageNavigation = ({ childrenData, allTitles }) => {
  const [allHeadings, setAllHeadings] = useState<any>([]);
  const [scrollPos, setScrollPos] = useState(0);
  const [title, setTitle] = useState<string>('');
  const router = useRouter();

  useEffect(() => {
    const pageContent = childrenData?.find(
      (data) => data?.['old-permalink'] === router.asPath
    )?.content;
    const parser = new DOMParser();
    const allElements = parser.parseFromString(pageContent, 'text/html');
    const TOCElement = allElements.getElementsByTagName('tableofcontents')?.[0];
    setTitle(TOCElement?.getAttribute('title'));
  }, []);

  useEffect(() => {
    onPageLoad();

    window.addEventListener('load', onPageLoad);
    window.addEventListener('scroll', () => setScrollPos(window.scrollY));
    return () => {
      window.removeEventListener('load', onPageLoad);
      window.removeEventListener('scroll', () => setScrollPos(window.scrollY));
    };
  }, [router.asPath]);

  const onPageLoad = () => {
    // const TOCTitle = document.getElementById('sticky-table-of-contents')?.title;
    // setTitle(TOCTitle);
    const totalHeadings = document.querySelectorAll(`[data-name="article-heading"]`);
    const duplicateHeadings = [];
    for (let i = 0; i < totalHeadings.length; i++) {
      duplicateHeadings.push(totalHeadings[i]);
    }

    setAllHeadings([...duplicateHeadings]);
  };

  return (
    <PageNaviagtionBox>
      <Heading as="h2" fontSize={'22px'} mb={'20px'}>
        {title ? title : 'In this Review'}
      </Heading>
      {allHeadings?.length > 0
        ? allHeadings.map((heading, index) => (
            <Box
              key={index}
              className="article-page-navigation-heading-container"
              onClick={() => {
                // if (index === 0) {
                //   window.scrollTo({
                //     top: 0,
                //     behavior: 'smooth'
                //   });
                // }
                // else {

                if (heading?.className === 'faq-title css-1eziwv') {
                  window.scrollTo({
                    top: scrollPos === 0 ? heading.offsetTop - 60 : heading.offsetTop - 75,
                    behavior: 'smooth'
                  });
                } else {
                  window.scrollTo({
                    top: scrollPos === 0 ? heading.offsetTop - 160 : heading.offsetTop - 80,
                    behavior: 'smooth'
                  });
                }
                // }
              }}>
              <Box minW={'24px'} lineHeight={0}>
                {index === 0 &&
                scrollPos >= 0 &&
                scrollPos < allHeadings[index + 1]?.offsetTop - 200 ? (
                  <Image src={RedTriangle} alt="red-right-arrow" />
                ) : allHeadings.length - 1 === index && scrollPos > heading.offsetTop - 200 ? (
                  <Image src={RedTriangle} alt="red-right-arrow" />
                ) : // ) : scrollPos > heading.offsetTop - 200 &&
                //   scrollPos < allHeadings[index + 1]?.offsetTop - 200 ? (
                //   <Image src={RedTriangle} alt="red-right-arrow" width={'24px'} height={'24px'} />
                scrollPos > heading.offsetTop - 110 &&
                  scrollPos < allHeadings[index + 1]?.offsetTop - 110 ? (
                  <Image src={RedTriangle} alt="red-right-arrow" width={'24px'} height={'24px'} />
                ) : (
                  <></>
                )}
              </Box>
              <Text
                as="span"
                className="article-page-navigation-heading"
                lineHeight={1}
                fontWeight={
                  index === 0 &&
                  scrollPos >= 0 &&
                  scrollPos < allHeadings[index + 1]?.offsetTop - 200
                    ? 'bold'
                    : allHeadings.length - 1 === index && scrollPos > heading.offsetTop - 200
                    ? 'bold'
                    : // : scrollPos > heading.offsetTop - 200 &&
                    //   scrollPos < allHeadings[index + 1]?.offsetTop - 200
                    // ? 'bold'
                    scrollPos > heading.offsetTop - 110 &&
                      scrollPos < allHeadings[index + 1]?.offsetTop - 110
                    ? 'bold'
                    : 'medium'
                }>
                {heading.innerHTML
                  ? heading?.getAttribute('shorttext')
                    ? heading?.getAttribute('shorttext')
                    : heading.innerHTML
                  : allTitles[index]}
              </Text>
            </Box>
          ))
        : allTitles.map((data, index) => (
            <div key={index}>
              <Box minW={'24px'} lineHeight={0}>
                {/* {index === 0 && <Image src={RedTriangle} alt="red-right-arrow" />} */}
              </Box>
              <h1
                className="article-page-navigation-h1"
                style={{ paddingLeft: index === 0 && '0px', fontWeight: index === 0 && 'bold' }}
                key={index}>
                {index === 0 ? <Image src={RedTriangle} alt="red-right-arrow" /> : <></>}
                {data}
              </h1>
            </div>
          ))}
    </PageNaviagtionBox>
  );
};

const PageNaviagtionBox = styled(Box)`
  margin: 10px;
  margin-left: 0px;
  background: white;
  border: 1px solid #e0e0e0;
  box-shadow: 0px 0px 3px -1px rgba(0, 0, 0, 0.15), inset 0px 0px 2px -1px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 20px;
  padding-left: 12px;
  position: sticky;
  top: 80px;
  font-size: 14px;
  font-family: proxima-nova;

  h2 {
    padding-left: 8px;
  }

  .article-page-navigation-heading-container {
    cursor: pointer;
    display: flex;
    align-items: center;
    align-items: center;

    .article-page-navigation-heading {
      display: flex;
      align-items: center;
      padding: 4px 0 5px 0;
      line-height: 1;
    }
  }

  .article-page-navigation-h1 {
    line-height: 1.5;
    padding-left: 24px;
    cursor: pointer;
    display: flex;
    align-items: center;
    align-items: center;
  }
`;

export default PageNavigation;
