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
                <a
                  href='https://www.udemy.com/certificate/UC-f64ceeab-e856-4ec6-86f0-00123192d6f0/'
                  target='_blank'
                  rel='noreferrer'
                >
                  Certificate
                </a>
              </li>
              <li>
                React - The Complete Guide (incl Hooks, React Router, Redux)
                <a
                  href='https://www.udemy.com/certificate/UC-668b2b17-b269-4bf8-8560-1c16f24d3b0e/'
                  target='_blank'
                  rel='noreferrer'
                >
                  Certificate
                </a>
              </li>
              <li>
                The Complete JavaScript Course 2021: From Zero to Expert
                <a
                  href='https://www.udemy.com/certificate/UC-a85b6ad1-920b-4c96-afc3-ee77b10801a8/'
                  target='_blank'
                  rel='noreferrer'
                >
                  Certificate
                </a>
              </li>
              <li>
                Understanding TypeScript - 2021 Edition
                <a
                  href='https://www.udemy.com/certificate/UC-d33869e7-56ba-42cc-8ac6-3b2c1a165047/'
                  target='_blank'
                  rel='noreferrer'
                >
                  Certificate
                </a>
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
