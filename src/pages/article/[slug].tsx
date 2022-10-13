import React from 'react';
import { getFileBySlug, getPostDir } from '@/util/mdx';
import { InferGetStaticPropsType } from 'next';
import styles from '@/public/SinglePost.module.css';
import { parseISO, format } from 'date-fns';
import Image from 'next/image';
import { MDXRemote } from 'next-mdx-remote';
import MDXComponents from '@/components/MdxComponents';

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

  console.log('post: ***************', post);

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
  const { title, featured, date, readingTime } = frontMatter as any;

  return (
    <article className={styles.single__post}>
      <header>
        <h1>{title}</h1>
        <span className={styles.post__meta}>
          {format(parseISO(date), 'MMMM dd, yyyy')}
          <span> . </span> {readingTime.text}
        </span>
        {featured && (
          <Image width={800} height={470} src={featured} alt={title} />
        )}
      </header>
      <div>
        <MDXRemote {...mdxSource} components={{ ...MDXComponents }} />
      </div>
    </article>
  );
};

export default Article;
