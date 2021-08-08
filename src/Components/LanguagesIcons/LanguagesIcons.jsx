import React from 'react';
import styles from './LanguagesIcons.module.scss';
import { ReactComponent as JSLogo } from '../../Assets/icons/tech stack icons/logos_javascript.svg';
import { ReactComponent as TSLogo } from '../../Assets/icons/tech stack icons/logos_typescript-icon.svg';
import { ReactComponent as SASSLogo } from '../../Assets/icons/tech stack icons/logos_sass.svg';
import { ReactComponent as HTMLLogo } from '../../Assets/icons/tech stack icons/zmdi_language-html5.svg';
import { ReactComponent as CSSLogo } from '../../Assets/icons/tech stack icons/simple-icons_css3.svg';

const LanguagesIcons = () => {
  return (
    <div className={styles.iconsContainer}>
      <JSLogo className={styles.icon}></JSLogo>
      <TSLogo className={styles.icon}></TSLogo>
      <SASSLogo className={styles.icon}></SASSLogo>
      <HTMLLogo className={styles.icon}></HTMLLogo>
      <CSSLogo className={styles.icon}></CSSLogo>
    </div>
  );
};

export default LanguagesIcons;
