import React from 'react';
import styles from './DesignIcons.module.scss';
import { ReactComponent as FigmaLogo } from '../../Assets/icons/tech stack icons/akar-icons_figma-fill.svg';
import { ReactComponent as XDLogo } from '../../Assets/icons/tech stack icons/file-icons_adobe-xd.svg';
import { ReactComponent as IDLogo } from '../../Assets/icons/tech stack icons/file-icons_adobe-indesign.svg';
import { ReactComponent as PSLogo } from '../../Assets/icons/tech stack icons/file-icons_adobe-photoshop.svg';

const DesignIcons = () => {
  return (
    <div className={styles.iconsContainer}>
      <FigmaLogo className={styles.icon}></FigmaLogo>
      <XDLogo className={styles.icon}></XDLogo>
      <IDLogo className={styles.icon}></IDLogo>
      <PSLogo className={styles.icon}></PSLogo>
    </div>
  );
};

export default DesignIcons;
