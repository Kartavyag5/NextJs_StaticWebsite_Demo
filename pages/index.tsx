import React from 'react';
import HomePage from '../components/homepage';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { getAllFilesFrontMatter } from '../lib/mdx';

const meta = {
  type: 'website',
  title: 'Innerbody | Home',
  description:
    "Turn to our experts for everything you need to know about at-home testing and telemedicine. We do the research so you don't have to."
};

const Home = (props) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <link rel="preload" href="/fonts/pn-700.woff2" as="font" crossOrigin="" type="font/woff2" />
        <link rel="preload" href="/fonts/pn-800.woff2" as="font" crossOrigin="" type="font/woff2" />
        <link rel="preload" href="/fonts/pn-400.woff2" as="font" crossOrigin="" type="font/woff2" />
        <link
          rel="preload"
          href="/fonts/pn-400-i.woff2"
          as="font"
          crossOrigin=""
          type="font/woff2"
        />
        <title>Innerbody | Home</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta property="og:type" content={meta.type} />
        <meta property="og:url" content={`https://www.innerbody.com${router.asPath}`} />
        <link rel="canonical" href={`https://www.innerbody.com${router.asPath}`} />
        <meta property="og:site_name" content="Innerbody" />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content="https://www.innerbody.com/myself.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@innerbody" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content="https://www.innerbody.com/myself.png" />
      </Head>
      <HomePage posts={props.posts} />
    </>
  );
};

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog');

  return { props: { posts } };
}

export default Home;
