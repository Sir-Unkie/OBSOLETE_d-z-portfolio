import React from 'react';
import Navigation from '../Navigation/Navigation';
import ThemeBtn from '../ThemeBtn/ThemeBtn';
import styles from './Header.module.scss';
// import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles[`header-container`]}>
        <div className={styles.leftSide}>
          <div className={styles.logo}>here will be the logo</div>
          <ThemeBtn></ThemeBtn>
        </div>
        <Navigation></Navigation>
      </div>
    </header>
  );
};

export default Header;
