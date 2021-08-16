import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HomePage.module.scss';
import IconsBar from '../../Components/IconsBar/IconsBar';
import { motion } from 'framer-motion';
import { defaultSlide } from '../../FramerMotion/framerMotion.pages.configs';

const HomePage = () => {
  return (
    <motion.div
      initial='hidden'
      animate='visible'
      exit='exit'
      variants={defaultSlide}
      className={styles.bg}
    >
      <div className={styles.homepage}>
        <main className={styles.textContentContainer}>
          <div className={styles.text}>
            <h1 className={styles.primaryHeading}>
              FRONT-END
              <br />
              WEB DEVELOPER
            </h1>
            <div>
              <p className={styles.paragraph}>
                I am focused on creating web applications with:
              </p>
              <ul className={styles.featuresList}>
                <li className={styles.feature}>Optimized performance</li>
                <li className={styles.feature}>Responsive layouts</li>
                <li className={styles.feature}>Intuitive UX/UI design</li>
              </ul>
            </div>
            <Link to='/projects' className={styles.projectsBtn}>
              See my projects
            </Link>
          </div>
          <IconsBar></IconsBar>
        </main>
      </div>
    </motion.div>
  );
};

export default HomePage;
