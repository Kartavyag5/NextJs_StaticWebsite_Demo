// @ts-nocheck
import React, { FC } from 'react';
import { MDXRemote } from 'next-mdx-remote';
import { getFiles, getFileBySlug, getAllFilesFrontMatter } from '../lib/mdx';
import MDXComponents from '../components/mdx';
import ArticleLayout from '../components/article/article-layout';
import { useRouter } from 'next/router';
import OurFindings from '@/components/article/our-findings';
import { markdown } from 'markdown';

type IProps = {
  mdxSource: any;
  frontMatter: any;
  setTheme: () => void;
  isLightTheme: boolean;
  allPostsData: any;
  allTitles: any;
  allFaqData: any;
};

const Blog: FC<IProps> = ({
  mdxSource,
  frontMatter,
  setTheme,
  isLightTheme,
  allPostsData,
  allTitles,
  allFaqData,
  mainExData
}): JSX.Element => {
  return (
    <ArticleLayout
      frontMatter={frontMatter}
      setTheme={setTheme}
      isLightTheme={isLightTheme}
      allPostsData={allPostsData}
      allTitles={allTitles}
      allFaqData={allFaqData}
      mainExData={mainExData}>
      <MDXRemote
        {...mdxSource}
        components={{
          ...MDXComponents,
          ...(MDXComponents.ReadThisNext.defaultProps = {
            ...MDXComponents.ReadThisNext.defaultProps,
            allPostsData: allPostsData
          })
        }}
      />
    </ArticleLayout>
  );
};

export async function getStaticPaths() {
  const posts = await getFiles('blog');
  return {
    paths: posts.map((p) => ({
      params: {
        slug: p.replace(/\.mdx/, '')
      }
    })),
    fallback: false
  };
}

export async function getStaticProps(props) {
  const post = await getFileBySlug('blog', props.params.slug);
  const allPostsData = await getAllFilesFrontMatter('blog');

  const currentPageData = allPostsData
    ?.find((data) => data?.['old-permalink'].includes(props.params.slug))
    ?.content?.split('\n');

  //get all the header titles from current page
  const headerTitles = currentPageData?.map((str, index) => {
    if (str.includes('<Header') || str.includes('<OurFindings')) {
      return {
        content: str,
        contentIndex: index
      };
    }
  });

  const filteredHeaderTitle = headerTitles.filter((str) => str);

  const allTitles = [];

  for (let i = 0; i < filteredHeaderTitle.length; i++) {
    if (filteredHeaderTitle[i].content.includes('heading')) {
      allTitles?.push(filteredHeaderTitle[i].content.split('"')[1]);
    } else if (filteredHeaderTitle[i].content.includes('shortText')) {
      allTitles?.push(filteredHeaderTitle[i].content.split('"')[1]);
    } else if (filteredHeaderTitle[i].content.includes('text')) {
      allTitles?.push(filteredHeaderTitle[i].content.split('"')[1]);
    } else {
      if (currentPageData[filteredHeaderTitle[i].contentIndex + 1].includes('shortText')) {
        allTitles?.push(currentPageData[filteredHeaderTitle[i].contentIndex + 1].split('"')[1]);
      } else {
        currentPageData[filteredHeaderTitle[i].contentIndex + 2].includes('shortText');
        allTitles?.push(currentPageData[filteredHeaderTitle[i].contentIndex + 2].split('"')[1]);
      }
    }
  }

  // get all FAQ titles

  const faqTitles = currentPageData?.map((str, index) => {
    if (str.includes('<FrequentlyAskedQuestion')) {
      return {
        content: str,
        contentIndex: index
      };
    }
  });

  const filterFaqTitles = faqTitles.filter((str) => str);

  const allFaqTitles = filterFaqTitles.map((str, index) => {
    return { content: str.content.split('"')[1], contentIndex: str.contentIndex };
  });

  // get all faq Description

  const faqDescription = allFaqTitles?.map((str, index) => {
    const desc = [];
    for (let i = str.contentIndex + 1; i < str.contentIndex + 100; i++) {
      if (currentPageData[i].includes('</FrequentlyAskedQuestion')) {
        break;
      } else {
        desc.push(currentPageData[i]);
      }
    }
    let temp = '';
    desc.map((str) => {
      temp = temp.concat(str);
    });
    temp = markdown.toHTML(temp);
    return temp;
  });

  const allFaqData = faqDescription.map((data, i) => {
    return {
      title: allFaqTitles[i]?.content,
      description: data
    };
  });

  // get Author full name & reviewer name

  const author1 = await import(`../data/authors/${post?.frontMatter?.author?.main_author}.yml`);
  const author2 = await import(
    `../data/authors/${post?.frontMatter?.author?.secondary_authot}.yml`
  );
  allPostsData['authorData'] = {
    authorName: author1?.default?.name,
    reviewerName: author2?.default?.name
  };

  // get data of Expaneded callout from current page
  const filteredExpandedData = currentPageData
    ?.map((str, index) => {
      if (str.includes('<ExpandedCallout')) {
        const lineData = [];
        for (let i = index + 1; i < currentPageData.length; i++) {
          if (currentPageData[i].includes('/>')) {
            break;
          } else {
            lineData.push(currentPageData[i].trim());
          }
        }
        return lineData;
      }
    })
    .filter((str) => str);
  const mainExData = {};

  const filterExDataObj =
    filteredExpandedData.length > 0 &&
    filteredExpandedData[0]
      .map((str, index) => {
        if (str.includes('title=')) {
          const key = str.split('=')[0];
          const value = str.split('"')[1];
          mainExData[key] = value;
        }

        if (str === '{') {
          const obj2 = {};
          for (let i = index + 1; i < filteredExpandedData[0].length; i++) {
            if (
              filteredExpandedData[0][i].includes('},') &&
              filteredExpandedData[0][i + 1].includes('{')
            ) {
              break;
            } else {
              let key = String(filteredExpandedData[0][i].split(': ')[0]);

              if (key === 'tag') {
                const tagObj = {
                  tagColor: String(filteredExpandedData[0][i + 1].split(': ')[1]).split("'")[1],
                  tagBgColor: String(filteredExpandedData[0][i + 2].split(': ')[1]).split("'")[1],
                  tagText: String(filteredExpandedData[0][i + 3].split(': ')[1]).split("'")[1]
                };
                obj2[key] = tagObj;
                continue;
              }
              if (key === 'tagColor' || key === 'tagBgColor' || key === 'tagText') {
                continue;
              }

              if (key.includes('descText')) {
                key = key.split(':')[0];
                const value1 = String(filteredExpandedData[0][i + 1]).split("'")[1];
                obj2[key] = value1;
                continue;
              }
              const value = String(filteredExpandedData[0][i].split(': ')[1]);

              if (key === 'tag' || key === 'price' || key === 'priceWithDiscount') {
                const value2 = String(value.split("'")[0]).split(',')[0];
                if (value2 === undefined) {
                  continue;
                }
                obj2[key] = value2;
              } else {
                const value2 = value.split("'")[1];
                if (value2 === undefined) {
                  continue;
                }
                obj2[key] = value2;
              }
            }
          }
          return obj2;
        }
      })
      .filter((obj) => obj);

  mainExData['data'] = filterExDataObj;

  return { props: { ...post, allPostsData, allTitles, allFaqData, mainExData } };
}

export default Blog;
