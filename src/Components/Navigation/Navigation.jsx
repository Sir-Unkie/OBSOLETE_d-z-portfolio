import React from 'react';
import styles from './Navigation.modules.scss';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to='/home' activeClassName={styles.activeNavlink}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/projects' activeClassName={styles.activeNavlink}>
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink to='/about' activeClassName={styles.activeNavlink}>
            About me
          </NavLink>
        </li>
        <li>
          <NavLink to='/contact' activeClassName={styles.activeNavlink}>
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
