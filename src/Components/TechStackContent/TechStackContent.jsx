import React from 'react';
import styles from './TechStackContent.module.scss';

const TechStackContent = () => {
  return (
    <div className={styles.techContainer}>
      <section className={`${styles.section}`}>
        <h2>Frameworks:</h2>
        <div className={styles.row}>
          <div className={styles.list}>
            <ul>
              <li>React</li>
              <li>React ecosystem (Redux, React Router)</li>
            </ul>
          </div>
          <div className={styles.icons}>icons</div>
        </div>
      </section>
      <section className={`${styles.section} ${styles.sectionDark}`}>
        <h2>Programming/Markup languages:</h2>
        <div className={styles.row}>
          <div className={styles.list}>
            <ul>
              <li>Vanilla Javascript </li>
              <li>Typescript</li>
              <li>CSS</li>
              <li>SASS preprocessor</li>
              <li>HTML</li>
            </ul>
          </div>
          <div className={styles.icons}>icons</div>
        </div>
      </section>
      <section className={styles.section}>
        <h2>Design:</h2>
        <div className={styles.row}>
          <div className={styles.list}>
            <ul>
              <li>Figma </li>
              <li>Adobe XD</li>
              <li>Adobe Photoshop</li>
              <li>Adobe InDesign</li>
            </ul>
          </div>
          <div className={styles.icons}>icons</div>
        </div>
      </section>
    </div>
  );
};

export default TechStackContent;
