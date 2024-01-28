import React, { useState } from 'react';
import s from './homepage.module.scss';
import MePic from '@/public/images/me2.png';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';

function Arrow() {
  return (
    <svg
      width="21"
      height="14"
      viewBox="0 0 21 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.86768 6.59429L8.86941 6.98303C8.88317 8.52492 8.97899 9.90059 9.14425 10.7724C9.14425 10.7881 9.32451 11.6528 9.43934 11.9406C9.6196 12.3566 9.94555 12.7097 10.3542 12.9334C10.6814 13.093 11.0247 13.1741 11.384 13.1741C11.6664 13.1614 12.1322 13.0235 12.4646 12.9079L12.7409 12.8052C14.5706 12.1002 18.0685 9.7965 19.4081 8.38767L19.5069 8.2892L19.9477 7.82777C20.2255 7.47465 20.3724 7.04294 20.3724 6.57857C20.3724 6.16257 20.2415 5.74657 19.9798 5.41039C19.9014 5.30147 19.7752 5.16174 19.6628 5.04368L19.2338 4.60806C17.7574 3.15707 14.5608 1.12181 12.9038 0.447439C12.9038 0.432928 11.8741 0.0157208 11.384 0H11.3185C10.5666 0 9.86407 0.415998 9.50478 1.08837C9.40662 1.27218 9.31247 1.63225 9.24086 1.94848L9.11215 2.54557C8.96522 3.50575 8.86768 4.97867 8.86768 6.59429ZM1.70138 4.92014C0.761795 4.92014 0 5.66627 0 6.58655C0 7.50682 0.761795 8.25296 1.70138 8.25296L5.88817 7.8938C6.62527 7.8938 7.22285 7.30971 7.22285 6.58655C7.22285 5.8646 6.62527 5.2793 5.88817 5.2793L1.70138 4.92014Z"
        fill="#8D021F"
        // fill="#A9ADC1"
      />
    </svg>
  );
}

const links = [
  {
    text: 'A, I like seeing cool stuff & hear about design & tech.',
    link: '/articles',
  },
  {
    text: 'B, I heard you are designing awsome apps and websites.',
    link: 'https://henzzo.com/projects',
    rel: 'noopener noreferrer',
    target: '_blank',
  },
  { text: 'C, Henzzo, who?!', link: '/about' },
];

const boarderVariants = {
  initial: {
    scale: 1.2,
    opacity: 0,
  },

  animate: {
    scale: 1,
    opacity: 1,
  },
  exit: {
    scale: 1,
    opacity: 0,
  },
};

export const Me = () => {
  return (
    <span className={s.me}>
      <Image
        src={MePic}
        alt="my awesome pic"
        // objectFit="contain"
      />
    </span>
  );
};

const HomePage = () => {
  const [hoverIdx, setHoverIdx] = useState<number | null>(null);

  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <div className={s.greeting}>
          <p>
            Hey, I&apos;m
            <Me />
            Henok
          </p>
          <p>How can I help you?</p>
        </div>

        <motion.div
          layout
          className={s.list}
          onMouseLeave={() => setHoverIdx(null)}
        >
          {links.map(({ text, link, ...props }, idx) => (
            <Link href={link} key={link} {...props} passHref>
              <motion.div
                className={s.item}
                onHoverStart={() => setHoverIdx(idx)}
                // onHoverEnd={() => setHoverIdx(null)}
              >
                <p>{text}</p>
                <Arrow />

                <AnimatePresence mode="wait">
                  {hoverIdx !== null && (
                    <motion.div className={s.hover_wrapper}>
                      {hoverIdx === idx && (
                        <motion.div
                          key={hoverIdx}
                          className={s.hover}
                          layoutId="boarder"
                          variants={boarderVariants}
                          animate="animate"
                          exit="exit"
                          initial="initial"
                        />
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </Link>
          ))}
        </motion.div>

        <a
          href="https://henzzo.com/contact"
          rel="noopener noreferrer"
          target="_blank"
        >
          <div className={s.say_hi}>
            <p>Never Mind, Say Hi!</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default HomePage;
