import React from 'react';
import styles from './TechStackContent.module.scss';
import FrameworksIcons from '../FrameworksIcons/FrameworksIcons';
import DesignIcons from '../DesignIcons/DesignIcons';
import LanguagesIcons from '../LanguagesIcons/LanguagesIcons';
import { motion } from 'framer-motion';
import { cardVariants } from '../../FramerMotion/aboutMeCards.config';

const TechStackContent = () => {
  return (
    <motion.div
      variants={cardVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
      className={styles.techContainer}
    >
      <section className={`${styles.section}`}>
        <div className={styles.row}>
          <div className={styles.rowText}>
            <h2>Frameworks:</h2>
            <div className={styles.list}>
              <ul>
                <li>React</li>
                <li>
                  React ecosystem (React-Redux + toolkit, React Router, Styled
                  Components, CSS Modules)
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.icons}>
            <FrameworksIcons></FrameworksIcons>
          </div>
        </div>
      </section>
      <section className={`${styles.section} ${styles.sectionDark}`}>
        <div className={styles.row}>
          <div className={styles.rowText}>
            <h2>Programming/Markup languages:</h2>
            <div className={styles.list}>
              <ul>
                <li>Vanilla Javascript </li>
                <li>Typescript</li>
                <li>CSS</li>
                <li>SASS preprocessor</li>
                <li>HTML</li>
              </ul>
            </div>
          </div>
          <div className={styles.icons}>
            <LanguagesIcons></LanguagesIcons>
          </div>
        </div>
      </section>
      <section className={styles.section}>
        <div className={styles.row}>
          <div className={styles.rowText}>
            <h2>Design:</h2>
            <div className={styles.list}>
              <ul>
                <li>Figma </li>
                <li>Adobe XD</li>
                <li>Adobe Photoshop</li>
                <li>Adobe InDesign</li>
              </ul>
            </div>
          </div>
          <div className={styles.icons}>
            <DesignIcons></DesignIcons>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default TechStackContent;
