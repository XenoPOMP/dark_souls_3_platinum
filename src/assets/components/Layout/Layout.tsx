import React, { FC } from 'react';
import styles from './Layout.module.scss';
import Footer from '../Footer/Footer';

interface props {
  children?: React.ReactNode;
  className?: string;
}

const Layout: FC<props> = ({ children, className }) => {
  return (
    <div className={`${styles.layout} ${className}`}>
      <main>
        <div className={styles.container}>{children}</div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
