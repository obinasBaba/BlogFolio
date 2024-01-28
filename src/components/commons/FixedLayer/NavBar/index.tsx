import React, { useEffect, useRef } from 'react';
import s from './navbar.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';
import clsx from 'clsx';
import { linkData } from '@/components/commons/FixedLayer/NavBar/linkData';
import { IconButton, Tooltip, useScrollTrigger } from '@mui/material';
import gsap from 'gsap';

import { isMobile } from 'react-device-detect';
import Image from 'next/image';
import ReturnBack from './return.svg';

const NavBar = () => {
  const { pathname, back } = useRouter();
  const container = useRef(null);
  const trigger = useScrollTrigger();

  useEffect(() => {
    if (isMobile) {
      return;
      gsap.to(container.current, {
        y: trigger ? 0 : '2rem',
        duration: 0.3,
        ease: '0.6, 0.01, 0, 0.9',
      });

      return;
    }

    gsap.to(container.current, {
      y: trigger ? '-100%' : 0,
      duration: 0.3,
      ease: '0.6, 0.01, 0, 0.9',
    });
  }, [trigger]);

  return (
    <nav className={clsx([s.container, 'nav-container'])} ref={container}>
      <div className={clsx([s.wrapper, 'nav-wrapper'])}>
        <Tooltip title="home">
          <div style={{ maxWidth: '4rem', overflow: 'hidden' }}></div>
        </Tooltip>

        <Tooltip title="return">
          <IconButton
            className={clsx([s.return, pathname === '/' && s.return_hidden])}
            onClick={() => back()}
          >
            <div className={clsx([s.item])}>
              <Image src={ReturnBack} alt="return back svg" />
            </div>
          </IconButton>
        </Tooltip>

        {linkData.map(({ name, link, el, external }) => (
          <Tooltip title={name} key={name}>
            <div
              className={clsx([
                s.item,
                ((pathname.includes(link) && link !== '/') ||
                  pathname === link) &&
                  s.active,
              ])}
            >
              {external ? (
                <a href={link} rel="noopener noreferrer" target="_blank">
                  {el}
                </a>
              ) : (
                <Link href={link}>{el}</Link>
              )}
            </div>
          </Tooltip>
        ))}
      </div>
    </nav>
  );
};

export default NavBar;
