import React from 'react';
import s from './aboutpage.module.scss';
import Me from '@/public/images/me2.png';
import Image from 'next/image';
import { Typography } from '@mui/material';

const AboutPage = () => {
  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <Typography variant="h2" className={s.title}>
          Meet Henok
        </Typography>
        <div className={s.me}>
          <Image src={Me} alt="henok photo" />
        </div>

        <div className={s.text}>
          <p>
            I&apos;m Front-end developer with a little bit of backend knowledge,
            working with startups to create growth driven products and Brands.
          </p>

          <p>
            I love coding and the feeling that comes with building something by
            yourself. When I build something new, I usually learn something in
            the process.
          </p>

          <p>
            This website is a way for me to chronicle these lessons and ideas.
            Most of my articles are around solutions to problems that we face
            when building great web products.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
