import React from 'react';
import ArticleListPage from '@/scenes/ArticleListPage';
import { getSortedPost } from '@/util/mdx';
import { InferGetStaticPropsType } from 'next';

export async function getStaticProps() {
  const postData = await getSortedPost();

  console.log(
    'postData: ***********************************************************c',
    postData,
  );

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
