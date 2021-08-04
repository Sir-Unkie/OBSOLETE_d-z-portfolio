import React from 'react';
import styles from './EducationContent.module.scss';

const EducationContent = () => {
  return (
    <div className={styles.educationContainer}>
      <section className={`${styles.section}`}>
        <h2>2020-2021: Udemy courses</h2>
        <div className={styles.row}>
          <div className={styles.list}>
            <ul>
              <li>
                Complete React Developer in 2021
                <a href='#'>Certificate</a>
              </li>
              <li>
                React - The Complete Guide (incl Hooks, React Router, Redux)
                <a href='#'>Certificate</a>
              </li>
              <li>
                The Complete JavaScript Course 2021: From Zero to Expert
                <a href='#'>Certificate</a>
              </li>
              <li>
                Understanding TypeScript - 2021 Edition
                <a href='#'>Certificate</a>
              </li>
            </ul>
          </div>
          <div className={styles.icons}>IMAGE of UDEMY</div>
        </div>
      </section>
      <section className={`${styles.section} ${styles.sectionDark}`}>
        <h2>
          2010 - 2016: Moscow Power Engineering Institute <br />
          (Technical University) - Specialist degree
        </h2>
        <div className={styles.row}>
          <div className={styles.list}>
            <ul>
              <li>
                Specialist’s thesis: Automation of project documentation
                development.
              </li>
              <li>Specialization: Electrical Power Plants.</li>
            </ul>
          </div>
          <div className={styles.icons}>icons</div>
        </div>
        <h2 className={styles.mtMid}>
          2013-2016: Moscow Power Engineering Institute <br />
          (Technical University) - Bachelor degree
        </h2>
        <div className={styles.row}>
          <div className={styles.list}>
            <ul>
              <li>
                Bachelor’s thesis: Analysis of financial activity of «MOESK».
              </li>
              <li>
                Specialization: Industrial economics and organization of the
                enterprises.
              </li>
            </ul>
          </div>
          <div className={styles.icons}>icons</div>
        </div>
      </section>
      <section className={styles.section}>
        <h2>2009-2010: Lomonosov Moscow State University</h2>
        <div className={styles.row}>
          <div className={styles.list}>
            <ul>
              <li>Faculty of Mechanics and Mathematics.</li>
            </ul>
          </div>
          <div className={styles.icons}>icons</div>
        </div>
      </section>
    </div>
  );
};

export default EducationContent;
