import React from 'react';
import styles from './Navigation.module.scss';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navlist}>
        <li className={styles.navitem}>
          <NavLink to='/home' activeClassName={styles.activeNavlink}>
            Home
          </NavLink>
        </li>
        <li className={styles.navitem}>
          <NavLink to='/projects' activeClassName={styles.activeNavlink}>
            Projects
          </NavLink>
        </li>
        <li className={styles.navitem}>
          <NavLink to='/about' activeClassName={styles.activeNavlink}>
            About me
          </NavLink>
        </li>
        <li className={styles.navitem}>
          <NavLink to='/contact' activeClassName={styles.activeNavlink}>
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
