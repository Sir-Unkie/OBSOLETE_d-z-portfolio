import React from 'react';
import Navigation from '../Navigation/Navigation';
import ThemeBtn from '../ThemeBtn/ThemeBtn';
import styles from './Header.module.scss';
import { ReactComponent as Logo } from '../../Assets/img/DZ.svg';
// import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles[`header-container`]}>
        <div className={styles.leftSide}>
          <div className={styles.logo}>
            <Logo></Logo>
          </div>
          <ThemeBtn></ThemeBtn>
        </div>
        <Navigation></Navigation>
      </div>
    </header>
  );
};

export default Header;
