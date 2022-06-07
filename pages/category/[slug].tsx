// @ts-nocheck
import React, { FC } from 'react';
import { MDXRemote } from 'next-mdx-remote';
import { getFiles, getFileBySlug, getAllFilesFrontMatter } from '../../lib/mdx';
import MDXComponents from '../../components/mdx/index';
import CategoryLayout from '../../components/category/catagory-layout';

type IProps = {
  mdxSource: any;
  frontMatter: any;
  setTheme: () => void;
  isLightTheme: boolean;
  allPostsData: any;
};

const Blog: FC<IProps> = ({
  mdxSource,
  frontMatter,
  setTheme,
  isLightTheme,
  allPostsData
}): JSX.Element => {
  return (
    <CategoryLayout
      frontMatter={frontMatter}
      setTheme={setTheme}
      isLightTheme={isLightTheme}
      allPostsData={allPostsData}>
      <MDXRemote
        {...mdxSource}
        components={{
          ...MDXComponents,
          ...(MDXComponents.LinkListLarge.defaultProps = {
            ...MDXComponents.LinkListLarge.defaultProps,
            allPostsData: allPostsData
          }),
          ...(MDXComponents.LinkList.defaultProps = {
            ...MDXComponents.LinkList.defaultProps,
            allPostsData: allPostsData
          })
        }}
      />
    </CategoryLayout>
  );
};

export async function getStaticPaths() {
  const posts = await getFiles('category');

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
  const post = await getFileBySlug('category', props.params.slug);
  const categortPostsData = await getAllFilesFrontMatter('category');
  const blogPostsData = await getAllFilesFrontMatter('blog');
  const allPostsData = [...categortPostsData, ...blogPostsData];
  return { props: { ...post, allPostsData } };
}

export default Blog;
