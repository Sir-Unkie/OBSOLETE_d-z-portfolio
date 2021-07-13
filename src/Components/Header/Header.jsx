import React from 'react';
import Navigation from '../Navigation/Navigation';
import ThemeBtn from '../ThemeBtn/ThemeBtn';
// import styles from './Header.module.scss';

const Header = () => {
  return (
    <header>
      <div>
        <div className='logo'>here will be the logo</div>
        <ThemeBtn></ThemeBtn>
      </div>
      <Navigation></Navigation>
    </header>
  );
};

export default Header;
