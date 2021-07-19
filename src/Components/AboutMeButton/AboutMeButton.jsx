import React from 'react';
import styles from './AboutMeButton.module.scss';
const AboutMeButton = ({ children, selected, clickHandler, option }) => {
  const handleClick = () => {
    clickHandler.bind(null, option)();
  };
  return (
    <div
      onClick={handleClick}
      className={
        selected
          ? `${styles.aboutMeButton} ${styles.selected}`
          : `${styles.aboutMeButton}`
      }
    >
      {children}
    </div>
  );
};

export default AboutMeButton;
