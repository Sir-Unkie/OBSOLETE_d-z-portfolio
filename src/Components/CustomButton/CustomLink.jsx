import React from 'react';
import styles from './CustomLink.module.scss';

const CustomLink = ({ children, link, dark }) => {
  return (
    <a
      href={link}
      className={
        dark ? `${styles.customLink} ${styles.dark}` : `${styles.customLink}`
      }
      target='_blank'
      rel='noreferrer'
    >
      {children}
    </a>
  );
};

export default CustomLink;
