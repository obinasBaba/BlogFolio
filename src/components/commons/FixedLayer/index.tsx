import React from 'react';
import s from './fixed.module.scss';
import AppToolTip from '@/components/commons/FixedLayer/AppToolTip';
import NavBar from '@/components/commons/FixedLayer/NavBar';

const FixedLayer = () => {
  return (
    <div className={s.container}>
      <NavBar />

      <AppToolTip />

      <p className={s.version_no}>v0.2</p>
    </div>
  );
};

export default FixedLayer;
