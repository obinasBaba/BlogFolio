import React from 'react';
import { getFileBySlug, getPostDir } from '@/util/mdx';
import { InferGetStaticPropsType } from 'next';
import ArticlePage from '@/scenes/ArticlePage';

export async function getStaticPaths() {
  const posts = await getPostDir();

  console.log('getStaticPaths post paths', posts);

  return {
    paths: posts.map((post) => ({
      params: {
        slug: post.replace(/\.mdx/, ''),
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }: any) {
  const post = await getFileBySlug(slug);

  console.log('post paths', post, slug);

  return {
    props: {
      ...post,
    },
  };
}

const Article = ({
  mdxSource,
  frontMatter,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  // console.log('mdxSource: ', mdxSource.frontmatter);

  return <ArticlePage mdxSource={mdxSource} frontMatter={frontMatter} />;
};

export default Article;
