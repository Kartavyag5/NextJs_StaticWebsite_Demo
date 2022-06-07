import React, { useRef, FC, useEffect, useState } from 'react';
import { Box } from '@chakra-ui/react';
import FrontMatter from '../../components/article/front-matter';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Footer from '../../components/footer';
import styled from '@emotion/styled';
// @ts-ignore
import footerData from '../../data/global/footer.yml';
import PageNavigation from './page-navigation';
import { markdown } from 'markdown';

type Props = {
  children: JSX.Element;
  frontMatter: any;
  setTheme: () => void;
  isLightTheme: boolean;
  allPostsData: any;
  allTitles: any;
  allFaqData: any;
  mainExData: any;
};

const meta = {
  type: 'website'
};

const ArticleLayout: FC<Props> = ({
  children,
  frontMatter,
  allPostsData,
  allTitles,
  allFaqData,
  mainExData
}) => {
  const profileRef = useRef(null);
  const [ECVisible, setECVisible] = useState<boolean | undefined>(false);
  const [currentUrl, setCurrentUrl] = useState<string | undefined>();
  const [mainAuthorFullName, setMainAuthorFullName] = useState<string>('');
  const [metaFaqData, setMetaFaqData] = useState<any>();
  const router = useRouter();

  useEffect(() => {
    fetchAuthorDetails();
    setCurrentUrl(window?.location?.href);
    // renderAllExpandedCallouts();
    window.addEventListener('load', renderAllFAQs);
    window.addEventListener('scroll', renderExpandedCallouts);
    return () => {
      window.removeEventListener('load', renderAllFAQs);
      window.removeEventListener('scroll', renderExpandedCallouts);
    };
  }, []);

  const fetchAuthorDetails = async () => {
    const author1 = await import(`../../data/authors/${frontMatter?.author?.main_author}.yml`);
    setMainAuthorFullName(author1?.default?.name);
  };

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

  const renderMainAuthor = () => {
    return frontMatter?.author?.secondary_authot
      ? `
      "reviewBy": {
        "@type": "Person",
        "name": "${allPostsData?.authorData?.reviewerName}"
      }`
      : '';
  };

  const renderAllFAQs = () => {
    const faqArr = [];
    // const parser = new DOMParser();
    // const thisPageData = allPostsData?.find((data) =>
    //   router?.asPath?.includes(data?.['old-permalink'])
    // );
    // const thisPageContent = parser.parseFromString(thisPageData?.content, 'text/html');
    // const thisPageAllFaqs = thisPageContent?.getElementsByTagName('FrequentlyAskedQuestion');

    for (let i = 0; i < allFaqData?.length; i++) {
      faqArr?.push({
        '@type': 'Question',
        name: allFaqData?.[i]?.title,
        acceptedAnswer: {
          '@type': 'Answer',
          text: allFaqData?.[i]?.description
        }
      });
    }
    return JSON.stringify(faqArr);
  };

  const getOfferData = (i) => {
    const date = new Date();
    date.setFullYear(date.getFullYear() + 1);
    
    return (
      mainExData?.data[i]?.price &&
      (mainExData?.data[i]?.priceWithDiscount
        ? {
            '@type': 'Offer',
            url: mainExData?.data[i]?.url,
            priceCurrency: 'USD',
            price: mainExData?.data[i]?.priceWithDiscount,
            priceValidUntil: date.toLocaleDateString("en-US"),
            itemCondition: 'https://schema.org/NewCondition',
            availability: 'https://schema.org/InStock',
            seller: {
              '@type': 'Organization',
              name: mainExData?.data[i]?.title
            }
          }
        : {
            '@type': 'AggregateOffer',
            lowPrice: '100',
            highPrice: '300',
            offerCount: '1',
            priceCurrency: 'USD',
            offers: [
              {
                '@type': 'Offer',
                url: mainExData?.data[i]?.price
              }
            ]
          })
    );
  };

  return (
    <>
      <Head>
        <title>Innerbody - {frontMatter.title}</title>
        <script
          dangerouslySetInnerHTML={{
            __html: `
                dataLayer = [{
                  'pageCategory': 'health',
                  'sidebarAd': '0',
                  'expandedCallout': ${ECVisible},
                  'authorRefrence': "${frontMatter?.author?.main_author}"
                }];
              `
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
    {
      "@context": "http://schema.org",
      "@type": "MedicalWebPage",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "${currentUrl}"

      },
      "headline": "${frontMatter?.title}",
      "image": [
        "${frontMatter?.social_image}"
        ],
      "datePublished": "${frontMatter?.date}",
      "dateModified": "${frontMatter?.changes}",
      "author": {
        "@type": "Person",
        "name": "${allPostsData?.authorData?.authorName}"
      },
      "lastReviewed" : "${
        frontMatter?.reviewed_date ? frontMatter?.reviewed_date : frontMatter?.date
      }",
      ${renderMainAuthor()},
      "publisher": {
        "@type": "Organization",
        "name": "Innerbody Research",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.innerbody.com/apple-touch-icon.png"
        }
      },
      "description": "${frontMatter?.title}"
    }
    `
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-MPWLGDP');
              `
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              'mainEntity': ${renderAllFAQs()}
            }`
          }}
        />

        {ECVisible && mainExData?.data.map((obj, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: `{
                '@context': 'https://schema.org/',
                '@type': 'Product',
                "name": ${mainExData?.title},
                "image": [${obj?.imageUrl}],
                "description": ${obj?.tag?.tagText},
                "sku": ${obj?.sku},
                "mpn": ${obj?.mpn},
                "brand": {
                  '@type': 'Thing',
                  "name": ${obj?.title}
                },
                "review": {
                  '@type': 'Review',
                  "reviewRating": {
                    '@type': 'Rating',
                    "ratingValue": ${obj?.rating},
                    "bestRating": '5'
                  },
                  "author": {
                    '@type': 'Person',
                    "name": 'Innerbody Research'
                  }
                },
                "aggregateRating": {
                  '@type': 'AggregateRating',
                  "ratingValue": ${obj?.rating},
                  "reviewCount": '1'
                },
                "offers":${JSON.stringify(getOfferData(i))},
              }`
            }}
          />
        ))}
      </Head>
      <ArticlePageBox id="profile" ref={profileRef}>
        <FrontMatter
          title={frontMatter.title}
          description={frontMatter.meta_description}
          publishedAt={frontMatter.publishedAt}
          readingTime={frontMatter.readingTime.text}
          author={frontMatter.author}
        />
        <Box className="article-page-data">
          <Box className="article-page-left" position={'relative'}>
            <PageNavigation childrenData={allPostsData} allTitles={allTitles} />
          </Box>
          <Box className="article-page-right">{children}</Box>
        </Box>
      </ArticlePageBox>
      <Footer footerData={footerData} />
    </>
  );
};
const ArticlePageBox = styled(Box)`
  padding-top: 127px;
  min-height: 90vh;
  max-width: 1127px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  margin: 0px auto;
  position: relative;
  .article-heading {
    padding-top: 5px;
    font-size: 32px !important;
    font-family: proxima-nova !important;
    color: #404145;
    margin-left: 15px;
    line-height: 35px;
  }
  .article-page-right h3 {
    font-size: 22px !important;
    font-family: proxima-nova !important;
    margin-left: 15px;
    padding-top: 5px;
    color: #404145;
  }
  .article-page-right h4 {
    font-size: 18px !important;
    font-family: proxima-nova !important;
    margin-left: 15px;
    color: #404145;
  }
  .article-page-right .chakra-link {
    color: #e54253 !important;
    text-decoration: underline !important;
    font-weight: normal !important;
  }
  .article-page-right .chakra-link:hover {
    color: #c20a1c !important;
    text-decoration: underline !important;
    font-weight: normal !important;
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
  .article-page-data {
    display: flex;
    max-width: 1127px;
    width: 100%;
    .article-page-left {
      min-width: 24%;
    }
    .article-page-right {
      min-width: 76%;
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
    .article-page-data {
      display: flex;
      .article-page-left {
        min-width: 0%;
        display: none;
      }
      .article-page-right {
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

export default ArticleLayout;
