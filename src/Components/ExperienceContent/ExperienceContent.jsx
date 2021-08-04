import React from 'react';
import styles from './ExperienceContent.module.scss';

const ExperienceContent = () => {
  return (
    <div className={styles.experienceContainer}>
      <section className={`${styles.section}`}>
        <h2>2017-present day: Tavrida Electric Switzerland:</h2>
        <div className={styles.row}>
          <div className={styles.list}>
            <h3>
              2019-2021: General manager of the marketing documentation process:
            </h3>
            <ul>
              <li>
                Developed a set of applications and landing pages for marketing
                purposes, designed and created content for marketing booklets
                and flyers.
              </li>
              <li>
                Managed the documentation process in all the regions (USA,
                Canda, Brazil, South Africa, Germany).
              </li>
            </ul>
            <h3>2019-2020: Segment business development manager:</h3>
            <ul>
              <li>
                Developed and implemented a strategy plan for business
                development in 2 segments (mining in South Africa, electric
                utility in Australia).
              </li>
            </ul>
            <h3>2017-2019: Product specialist:</h3>
            <ul>
              <li>
                Organized and participated in exhibitions in Germany and South
                Africa.
              </li>
              <li>
                Developed specifications for web developers and other
                contractors. Supported digital systems with product related
                data.
              </li>
            </ul>
          </div>
          <div className={styles.icons}>IMAGE of TAVRIDA</div>
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

export default ExperienceContent;
