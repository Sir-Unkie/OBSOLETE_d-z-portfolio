import React from 'react';
import styles from './AboutMeButton.module.scss';
const AboutMeButton = ({ children, selected, clickHandler, option }) => {
  const handleClick = e => {
    e.target.classList.toggle(styles.animation);
    setTimeout(() => {
      clickHandler.bind(null, option)();
      e.target.classList.toggle(styles.animation);
    }, 0);
  };
  return (
    <div
      id='option'
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
