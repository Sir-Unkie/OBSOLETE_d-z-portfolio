import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HomePage.module.scss';
import IconsBar from '../../Components/IconsBar/IconsBar';

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
        <Link to='/projects' className={styles.projectsBtn}>
          See my projects
        </Link>
        <IconsBar></IconsBar>
      </main>

      <div className='image'></div>
    </div>
  );
};

export default HomePage;
