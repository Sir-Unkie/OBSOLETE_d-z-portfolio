import React, { useState } from 'react';
import styles from './ThemeBtn.module.scss';

const ThemeBtn = () => {
  const [theme, setTheme] = useState('light');
  const clickHandler = () => {
    if (theme === 'light') {
      console.log(theme);
      setTheme('dark');
    } else {
      console.log(theme);
      setTheme('light');
    }
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
