import React from 'react';
import s from './articlepage.module.scss';
import { format, parseISO } from 'date-fns';
import Image from 'next/image';
import { MDXRemote } from 'next-mdx-remote';
import MDXComponents from '@/components/MdxComponents';

const ArticlePage = ({ mdxSource, frontMatter }: any) => {
  const { title, featured, date, readingTime } = frontMatter;

  return (
    <div className={s.container}>
      <header className={s.header}>
        <h1>{title}</h1>
        {format(parseISO(date), 'MMMM dd, yyyy')}
        <span> . </span> {readingTime.text}
        {featured && (
          <Image width={800} height={470} src={featured} alt={title} />
        )}
      </header>
      <article className={s.body} >
        <MDXRemote {...mdxSource} components={{ ...MDXComponents }} />
      </article>
    </div>
  );
};

export default ArticlePage;
