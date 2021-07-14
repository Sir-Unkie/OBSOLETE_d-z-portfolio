import React from 'react';
import styles from './HomePage.module.scss';
import { ReactComponent as LinkedIn } from '../../Assets/jam_linkedin-square.svg';
import { ReactComponent as GitHub } from '../../Assets/ant-design_github-filled.svg';
import { ReactComponent as WhatsApp } from '../../Assets/cib_whatsapp.svg';
import { ReactComponent as Telegram } from '../../Assets/fa-brands_telegram.svg';

const HomePage = () => {
  return (
    <div className={styles.homepage}>
      <main className='leftside'>
        <h1 className={styles.primaryHeading}>
          FRONT-END
          <br />
          WEB DEVELOPER
        </h1>
        <p className={styles.paragraph}>
          I am focused on creating web applications with:
        </p>
        <ul className={styles.featuresList}>
          <li className={styles.feature}>Optimized performance</li>
          <li className={styles.feature}>Responsive layouts</li>
          <li className={styles.feature}>Intuitive UX/UI design</li>
        </ul>
      </main>
      <div className={styles.iconsContainer}>
        <a
          href='https://www.linkedin.com/in/dmitry-zhidovlenkov-98b8a1169'
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
        <a
          href='https://telegram.me/Sir_Unkie'
          target='_blank'
          rel='noreferrer'
        >
          <Telegram className={styles.icon}></Telegram>
        </a>
      </div>
      <div className='image'></div>
    </div>
  );
};

export default HomePage;
