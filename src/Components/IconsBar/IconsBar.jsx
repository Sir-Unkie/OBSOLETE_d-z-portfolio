import React from 'react';
import styles from './IconsBar.module.scss';
import { ReactComponent as LinkedIn } from '../../Assets/jam_linkedin-square.svg';
import { ReactComponent as GitHub } from '../../Assets/ant-design_github-filled.svg';
import { ReactComponent as WhatsApp } from '../../Assets/cib_whatsapp.svg';
import { ReactComponent as Telegram } from '../../Assets/fa-brands_telegram.svg';

const IconsBar = () => {
  return (
    <div className={styles.iconsContainer}>
      <a
        className={styles.iconLinked}
        href='https://www.linkedin.com/in/dmitry-zhidovlenkov'
        target='_blank'
        rel='noreferrer'
      >
        <LinkedIn className={styles.icon}></LinkedIn>
      </a>
      <a href='https://github.com/Sir-Unkie' target='_blank' rel='noreferrer'>
        <GitHub className={styles.icon}></GitHub>
      </a>
      <a href='https://wa.me/79197255841' target='_blank' rel='noreferrer'>
        <WhatsApp className={styles.icon}></WhatsApp>
      </a>
      <a href='https://telegram.me/Sir_Unkie' target='_blank' rel='noreferrer'>
        <Telegram className={styles.icon}></Telegram>
      </a>
    </div>
  );
};

export default IconsBar;
