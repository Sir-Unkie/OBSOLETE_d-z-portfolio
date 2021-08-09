import React from 'react';
import styles from './FrameworksIcons.module.scss';
import { ReactComponent as ReactLogo } from '../../Assets/icons/tech stack icons/logos_react.svg';
import { ReactComponent as ReduxLogo } from '../../Assets/icons/tech stack icons/logos_redux.svg';
import { ReactComponent as RouterLogo } from '../../Assets/icons/tech stack icons/logos_react-router.svg';

const FrameworksIcons = () => {
  return (
    <div className={styles.iconsContainer}>
      <ReactLogo className={`${styles.icon} ${styles.react}`}></ReactLogo>
      <RouterLogo className={`${styles.icon} ${styles.router}`}></RouterLogo>
      <ReduxLogo className={`${styles.icon} ${styles.redux}`}></ReduxLogo>
    </div>
  );
};

export default FrameworksIcons;
