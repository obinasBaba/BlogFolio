import React from 'react';
import s from './articlepage.module.scss';
import { format, parseISO } from 'date-fns';
import Image from 'next/image';
import MDXComponents from '@/components/MdxComponents';
import DummyThumb from '@/public/thumb.png';
import { Post } from '@contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';
import Balancer from 'react-wrap-balancer';
import { Typography } from '@mui/material';

type PropsType = {
  post: Post;
};

const ArticlePage = ({ post }: PropsType) => {
  const { title, date, readingTime } = post;
  const topics = ['react', 'three.js', 'vue'];

  const Component = useMDXComponent(post.body.code);

  return (
    <div className={s.container}>
      <header className={s.header}>
        <div className={s.title}>
          <Typography variant="h2">
            <Balancer>{post.title}</Balancer>
            {/*{title}*/}
          </Typography>
        </div>

        <div className={s.thumbnail}>
          <Image
            src={DummyThumb}
            alt={title}
            fill
            // layout="responsive"
          />
        </div>

        <div className={s.detail}>
          <div className={s.date}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7 14C3.136 14 0 10.871 0 7C0 3.136 3.136 0 7 0C10.871 0 14 3.136 14 7C14 10.871 10.871 14 7 14ZM9.23302 9.59699C9.31702 9.646 9.40802 9.674 9.50602 9.674C9.68102 9.674 9.85602 9.583 9.95402 9.415C10.101 9.17 10.024 8.84799 9.77202 8.69399L7.28002 7.20999V3.976C7.28002 3.68199 7.04202 3.45099 6.75502 3.45099C6.46802 3.45099 6.23002 3.68199 6.23002 3.976V7.51099C6.23002 7.693 6.32802 7.86099 6.48902 7.95899L9.23302 9.59699Z"
                fill="#8D021F"
              />
            </svg>

            <p>
              {`${format(parseISO(date), 'MMMM dd, yyyy')} - ${readingTime}`}{' '}
            </p>
          </div>

          <div className={s.topics}>
            {topics.map((topic) => (
              <span key={topic}>
                <big>#</big>
                {topic}
              </span>
            ))}
          </div>
        </div>
      </header>

      <article className={s.body}>
        <Component components={{ ...MDXComponents }} />
      </article>
    </div>
  );
};

export default ArticlePage;
