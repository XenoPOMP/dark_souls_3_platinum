import React, { FC } from 'react';
import styles from './Layout.module.scss';

interface props {
  children?: React.ReactNode;
}

const Layout: FC<props> = ({ children }) => {
  return <div className={styles.layout}>{children}</div>;
};

export default Layout;
