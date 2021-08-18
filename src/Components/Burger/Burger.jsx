import React from 'react';
import styles from './Burger.module.scss';
const Burger = ({ handler }) => {
  const clickHandler = () => {
    handler();
  };
  return (
    <div onClick={clickHandler} className={styles.button}>
      <div className={styles.line1}></div>
      <div className={styles.line2}></div>
      <div className={styles.line3}></div>
    </div>
  );
};

export default Burger;
