import React, { useState, useEffect } from 'react';
import styles from './ThemeBtn.module.scss';

const ThemeBtn = () => {
  const themeLocalStorage = localStorage.getItem('theme');
  let initialTheme;
  if (themeLocalStorage === null) {
    initialTheme = 'light';
  } else {
    initialTheme = themeLocalStorage;
  }
  const [theme, setTheme] = useState(initialTheme);
  const htmlEl = document.querySelector('html');
  const clickHandler = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  useEffect(() => {
    if (theme === 'light') {
      htmlEl.classList.remove('dark');
      localStorage.setItem('theme', theme);
    } else {
      htmlEl.classList.add('dark');
      localStorage.setItem('theme', theme);
    }
  }, [theme, htmlEl.classList, themeLocalStorage]);

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
