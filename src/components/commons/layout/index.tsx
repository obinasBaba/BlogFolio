import React, { useRef } from 'react';
import s from './layout.module.scss';
import FixedLayer from '@/components/commons/FixedLayer';
import Footer from '@/components/commons/Footer';

interface Props {
  children: React.ReactNode;
  pageProps: Record<string, any>;
}

const Layout: React.FC<Props> = ({ children }) => {
  const container = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <FixedLayer />
      <div className={s.root} ref={container}>
        <main className={s.main}>{children}</main>

        <Footer />
      </div>
    </>
  );
};

export default Layout;
