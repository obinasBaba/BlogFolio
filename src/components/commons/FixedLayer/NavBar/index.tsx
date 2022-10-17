import React, { useEffect, useRef } from 'react';
import s from './navbar.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';
import clsx from 'clsx';
import { linkData } from '@/components/commons/FixedLayer/NavBar/linkData';
import { useScrollTrigger } from '@mui/material';
import gsap from 'gsap';

import { isMobile } from 'react-device-detect';

const NavBar = () => {
  const { pathname } = useRouter();
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
        <div className={s.return}>
          <div className={clsx([s.item])}>
            <Link href={'/'}>
              <a>
                <svg
                  width="42"
                  height="41"
                  viewBox="0 0 42 41"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="2.44873"
                    y="1.5"
                    width="37.1026"
                    height="38"
                    rx="7.5"
                    fill="#0D0D0D"
                    stroke="#171717"
                    strokeWidth="3"
                  />
                  <path
                    d="M24.5273 18.805L28.4005 18.4625C29.2697 18.4625 29.9744 19.1741 29.9744 20.0517C29.9744 20.9294 29.2697 21.641 28.4005 21.641L24.5273 21.2985C23.8455 21.2985 23.2927 20.7403 23.2927 20.0517C23.2927 19.3621 23.8455 18.805 24.5273 18.805Z"
                    fill="#DBDBDB"
                  />
                  <path
                    d="M11.5211 18.868C11.5817 18.8069 11.8078 18.5485 12.0203 18.334C13.2595 16.9904 16.4953 14.7934 18.188 14.121C18.445 14.0137 19.0949 13.7854 19.4433 13.7692C19.7757 13.7692 20.0932 13.8465 20.3959 13.9987C20.7739 14.2121 21.0755 14.5489 21.2422 14.9456C21.3484 15.2201 21.5152 16.0447 21.5152 16.0597C21.6808 16.9604 21.771 18.4251 21.771 20.0444C21.771 21.5852 21.6808 22.9899 21.5449 23.9056C21.53 23.9218 21.3633 24.9447 21.1817 25.2954C20.8493 25.9366 20.1994 26.3333 19.5038 26.3333H19.4433C18.9898 26.3183 18.0373 25.9204 18.0373 25.9066C16.4348 25.2342 13.2755 23.1433 12.0054 21.7536C12.0054 21.7536 11.6468 21.396 11.4914 21.1734C11.2493 20.8528 11.1282 20.4561 11.1282 20.0594C11.1282 19.6165 11.2642 19.2048 11.5211 18.868Z"
                    fill="#DBDBDB"
                  />
                </svg>
              </a>
            </Link>
          </div>
        </div>

        {linkData.map(({ name, link, el }) => (
          <div
            key={name}
            className={clsx([
              s.item,
              ((pathname.includes(link) && link !== '/') ||
                pathname === link) &&
                s.active,
            ])}
          >
            <Link href={link}>
              <a>{el}</a>
            </Link>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default NavBar;
