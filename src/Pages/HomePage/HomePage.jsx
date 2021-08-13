import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HomePage.module.scss';
import IconsBar from '../../Components/IconsBar/IconsBar';
import { motion, AnimatePresence } from 'framer-motion';

const HomePage = () => {
  const variants = {
    hidden: { opacity: 0, x: 900 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      key='someUniqueID'
      initial={{ opacity: 0, x: 900 }}
      animate={{ opacity: 1, x: 0 }}
      // variants={variants}
      exit={{ opacity: 0, x: 900 }}
      transition={{ type: 'spring', stiffness: 100 }}
      layout
      className={styles.bg}
    >
      <div className={styles.homepage}>
        <main>
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
      </div>
    </motion.div>
  );
};

export default HomePage;
