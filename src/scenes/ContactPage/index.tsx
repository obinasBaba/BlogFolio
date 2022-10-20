import React from 'react';
import s from './contactpage.module.scss';
import { Typography } from '@mui/material';
import Image from 'next/image';
import Me from '@/public/images/me.png';

const ContactPage = () => {
  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <Typography variant="h2">The Stage is Yours</Typography>

        <Typography>
          I&apos;m always looking to collaborate on interesting project with
          great people. Need someone to make your next web project cool? You
          staring at him.
        </Typography>

        <div className={s.card}>
          <div className={s.me}>
            <Image src={Me} alt="my awesome pic" />
          </div>
          <Typography>Henzzo Gech</Typography>
          <Typography>Web Developer</Typography>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
