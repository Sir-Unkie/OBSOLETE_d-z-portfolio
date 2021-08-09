import React from 'react';
import styles from './CustomLink.module.scss';

const CustomLink = ({ children, link, dark, darkBG }) => {
  let style;
  if (darkBG) {
    if (dark) {
      style = `${styles.customLink} ${styles.darkBG} ${styles.dark}`;
    } else {
      style = `${styles.customLink} ${styles.darkBG}`;
    }
  } else {
    if (dark) {
      style = `${styles.customLink} ${styles.dark}`;
    } else {
      style = `${styles.customLink} `;
    }
  }
  return (
    <a href={link} className={style} target='_blank' rel='noreferrer'>
      {children}
    </a>
  );
};

export default CustomLink;
