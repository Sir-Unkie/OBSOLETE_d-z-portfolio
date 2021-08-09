import React from 'react';
import styles from './CustomLink.module.scss';

const CustomLink = ({ children }) => {
  return (
    <a href='#' className={styles.customLink}>
      {children}
    </a>
  );
};

export default CustomLink;
