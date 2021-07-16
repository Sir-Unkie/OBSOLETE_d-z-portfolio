import React, { useState } from 'react';
import styles from './ThemeBtn.module.scss';

const ThemeBtn = () => {
  const [theme, setTheme] = useState('light');
  const clickHandler = () => {
    const htmlEl = document.querySelector('html');
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
    htmlEl.classList.toggle('dark');
  };

  return (
    <div
      className={
        theme === 'light'
          ? `${styles.outerCircle}`
          : `${styles.outerCircle} ${styles.dark}`
      }
      onClick={clickHandler}
    >
      <div className={styles.innerCircle}></div>
    </div>
  );
};

export default ThemeBtn;
