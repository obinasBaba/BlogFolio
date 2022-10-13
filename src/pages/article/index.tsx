import React from 'react';
import ArticlesPage from '@/secenes/ArticlesPage';
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
  return <ArticlesPage postData={postData || []} />;
};

export default Articles;
