import React from 'react';
import styles from './Footer.module.scss';
import logo from '../../images/DS logo.svg';
import jumpIcon from '../../images/jump_icon.svg';

const Footer = () => {
  return (
    <footer className={styles.appFooter}>
      <div className={styles.body}>
        <div className={styles.logo}>
          <img src={logo} />
        </div>

        <div className={styles.jumpForward}>
          <img src={jumpIcon} />
        </div>

        <div className={styles.jumpBack}>
          <img src={jumpIcon} />
        </div>

        <div className={styles.progress}>0 / 12</div>
      </div>
    </footer>
  );
};

export default Footer;
