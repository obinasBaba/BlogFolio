import React from 'react';
import { getFileBySlug, getPostDir } from '@/util/mdx';
import { InferGetStaticPropsType } from 'next';
import { parseISO, format } from 'date-fns';
import Image from 'next/image';
import { MDXRemote } from 'next-mdx-remote';
import MDXComponents from '@/components/MdxComponents';
import styles from '@/public/SinglePost.module.css';
import ArticlePage from '@/scenes/ArticlePage';

export async function getStaticPaths() {
  const posts = await getPostDir();

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

  // console.log('post: ***************', post);

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
