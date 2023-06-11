import React, { useRef } from 'react';
import s from './layout.module.scss';
import FixedLayer from '@/components/commons/FixedLayer';
import Footer from '@/components/commons/Footer';
import clsx from 'clsx';

interface Props {
  pageProps: Record<string, any>;
}

const Layout = ({ children }: any) => {
  const container = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <FixedLayer />
      <div className={s.root} ref={container}>
        <svg
          className={clsx([
            s.grany,
            'pointer-events-none fixed isolate z-50 opacity-70 mix-blend-soft-light',
          ])}
          width="100%"
          height="100%"
        >
          <filter id="pedroduarteisalegend">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.80"
              numOctaves="4"
              stitchTiles="stitch"
            ></feTurbulence>
          </filter>
          <rect
            width="100%"
            height="100%"
            filter="url(#pedroduarteisalegend)"
          ></rect>
        </svg>

        <main className={s.main}>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
