// @ts-nocheck
import React, { FC } from 'react';
import { MDXRemote } from 'next-mdx-remote';
import { getFiles, getFileBySlug, getAllFilesFrontMatter } from '@/lib/mdx';
import MDXComponents from '@/components/mdx';
import MiscLayout from '@/components/misc/misc-layout';

type IProps = {
  mdxSource: any;
  frontMatter: any;
  setTheme: () => void;
  isLightTheme: boolean;
  allPostsData: any;
};

const Misc: FC<IProps> = ({
  mdxSource,
  frontMatter,
  setTheme,
  isLightTheme,
  allPostsData
}): JSX.Element => {
  
  return (
    <MiscLayout frontMatter={frontMatter} setTheme={setTheme} isLightTheme={isLightTheme}>
      <MDXRemote {...mdxSource} components={{ MDXComponents }} />
    </MiscLayout>
  );
};

export async function getStaticPaths() {
  const posts = await getFiles('misc');

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
  const post = await getFileBySlug('misc', props.params.slug);
  const miscPostsData = await getAllFilesFrontMatter('misc');
  const blogPostsData = await getAllFilesFrontMatter('blog');
  const allPostsData = [...miscPostsData, ...blogPostsData];
  return { props: { ...post, allPostsData } };
}

export default Misc;
