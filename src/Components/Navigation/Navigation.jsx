import React from 'react';
import styles from './Navigation.module.scss';
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const Navigation = () => {
  let history = useHistory();
  const clickHandler = e => {
    e.preventDefault();

    if (history.location.pathname === e.target.pathname) {
      // console.log('not going anywhere');
      return;
    }
    history.push(e.target.pathname);
  };

  return (
    <nav className={styles.nav}>
      <ul className={styles.navlist}>
        <li className={styles.navitem}>
          <NavLink
            onClick={clickHandler}
            className={styles.navlink}
            to='/'
            exact
            activeClassName={styles.activeNavlink}
          >
            Home
          </NavLink>
        </li>
        <li className={styles.navitem}>
          <NavLink
            onClick={clickHandler}
            className={styles.navlink}
            to='/projects'
            activeClassName={styles.activeNavlink}
          >
            Projects
          </NavLink>
        </li>
        <li className={styles.navitem}>
          <NavLink
            onClick={clickHandler}
            className={styles.navlink}
            to='/about'
            activeClassName={styles.activeNavlink}
          >
            About me
          </NavLink>
        </li>
        <li className={styles.navitem}>
          <NavLink
            onClick={clickHandler}
            className={styles.navlink}
            to='/contact'
            activeClassName={styles.activeNavlink}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
