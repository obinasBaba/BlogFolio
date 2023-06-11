import React from 'react';
import ArticleListPage from '@/scenes/ArticleListPage';
import { InferGetStaticPropsType, Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Read my thoughts on software development, design, and more.',
};

export async function getStaticProps() {
  return {
    props: {},
  };
}

const Articles = ({}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return <ArticleListPage />;
};

export default Articles;
