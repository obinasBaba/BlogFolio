import React from 'react';
import ArticleListPage from '@/scenes/ArticleListPage';
import { getSortedPost } from '@/util/mdx';
import { InferGetStaticPropsType, Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Read my thoughts on software development, design, and more.',
};

export async function getStaticProps() {
  const postData = await getSortedPost();

  return {
    props: {
      postData,
    },
  };
}

const Articles = ({
  postData,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return <ArticleListPage postData={postData || []} />;
};

export default Articles;
