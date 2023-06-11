import React from 'react';
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import ArticlePage from '@/scenes/ArticlePage';
import { allPosts, Post } from '@contentlayer/generated';

export async function getStaticPaths() {
  // console.log('getStaticPaths post paths', allPosts[0].slug);

  return {
    paths: allPosts.map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  // console.log('post paths', params?.slug);

  const post = allPosts.find((post) => post.slug === params?.slug) as Post;

  return {
    props: {
      post,
    },
  };
}

const Article = ({ post }: InferGetStaticPropsType<typeof getStaticProps>) => {
  // console.log('mdxSource: ', post);

  return <ArticlePage post={post} />;
};

export default Article;
