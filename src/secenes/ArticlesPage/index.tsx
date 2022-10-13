import React from 'react';
import s from './articlespage.module.scss';
import { ButtonBase, Chip, TextField, Typography } from '@mui/material';
import BlogCard from '@/secenes/ArticlesPage/BlogCard';
import Image from 'next/image';
import Planet from '@/public/images/planet.png';
import { Matter } from '@/util/mdx';
import Link from 'next/link';

type Props = {
  postData: Matter[];
};

const ArticlesPage: React.FC<Props> = ({ postData }) => {
  const topics = [
    'react',
    'node.js',
    'frontend',
    'three.js',
    'seo',
    'worker',
    'pwa',
    'user experience',
    'database',
    'security',
  ];

  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <header>
          <Typography variant="h1">Articles</Typography>

          <Typography className={s.intro}>
            I come across a lot of fun snippets of information. As I learn
            things, my notes turn into articles to share. I share these little
            bits of information through my articles.
          </Typography>

          <TextField
            type="text"
            variant="outlined"
            placeholder="search post"
            fullWidth
            InputProps={{
              startAdornment: (
                <svg
                  width="27"
                  height="27"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ marginRight: '1rem' }}
                >
                  <path
                    d="M0.5 5.20196C0.5 2.60008 2.58538 0.5 5.14659 0.5C6.37721 0.5 7.55852 0.99407 8.43034 1.87528C9.30235 2.75667 9.79319 3.95321 9.79319 5.20196C9.79319 7.80385 7.7078 9.90393 5.14659 9.90393C2.58538 9.90393 0.5 7.80385 0.5 5.20196Z"
                    stroke="#8D021F"
                  />
                  <path
                    d="M11.7408 10.6299L10.208 9.39258C9.97609 9.16223 9.60433 9.16223 9.37242 9.39258C9.25216 9.5137 9.18457 9.67824 9.18457 9.84983C9.18457 10.0214 9.25216 10.186 9.37242 10.3071L10.6444 11.7649C10.9545 12.0784 11.4573 12.0784 11.7674 11.7649C12.0775 11.4515 12.0775 10.9433 11.7674 10.6299H11.7408Z"
                    fill="#DC143C"
                  />
                </svg>
              ),
            }}
          />

          <div className={s.topics}>
            <p>Search by topics</p>
            <ul className={s.tags}>
              {topics.map((topic) => (
                <li key={topic}>
                  <ButtonBase>{topic}</ButtonBase>
                </li>
              ))}
            </ul>
          </div>

          <div className={s.planet}>
            <Image src={Planet} alt="planet" />
          </div>
        </header>

        <div className={s.blog_list}>
          {postData.map((matter) => (
            <Link href={`article/${matter.slug}`} key={matter.slug}>
              <a>
                <BlogCard matter={matter} />
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArticlesPage;
