import React from 'react';
import styles from './AboutMeButton.module.scss';
import { motion } from 'framer-motion';

const AboutMeButton = ({ children, selected, clickHandler, option }) => {
  const handleClick = e => {
    e.target.classList.toggle(styles.animation);
    clickHandler.bind(null, option)();
    setTimeout(() => {
      clickHandler.bind(null, option)();
      e.target.classList.toggle(styles.animation);
    }, 0);
  };
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      // id='option'
      onClick={handleClick}
      className={
        selected
          ? `${styles.aboutMeButton} ${styles.selected}`
          : `${styles.aboutMeButton}`
      }
    >
      {children}
    </motion.div>
  );
};

export default AboutMeButton;
