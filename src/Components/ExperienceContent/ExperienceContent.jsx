import React from 'react';
import styles from './ExperienceContent.module.scss';
import { ReactComponent as OboronEnergoLogo } from '../../Assets/icons/Experience Icons/OboronEnergo.svg';

const ExperienceContent = () => {
  return (
    <div className={styles.experienceContainer}>
      <section className={`${styles.section}`}>
        <div className={styles.row}>
          <div className={styles.rowText}>
            <h2>2017-present day: Tavrida Electric Switzerland:</h2>
            <div className={styles.list}>
              <h3>
                2019-2021: General manager of the marketing documentation
                process:
              </h3>
              <ul>
                <li>
                  Developed a set of applications and landing pages for
                  marketing purposes, designed and created content for marketing
                  booklets and flyers.
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
          </div>
          <div className={styles.icons}>
            <div className={styles.TELLogo}></div>
          </div>
        </div>
      </section>
      <section className={`${styles.section} ${styles.sectionDark}`}>
        <div className={styles.row}>
          <div className={styles.rowText}>
            <h2>
              2016-2017: Oboronenergo (electric utility company) <br></br> -
              Leading specialist:
            </h2>
            <div className={styles.list}>
              <ul>
                <li>
                  Saved 16 man-hours (monthly) by developing an application that
                  automates the documentation creation process.
                </li>
                <li>
                  Increased the fill rate of the database from 0.7 up to 0.98
                  (by improving database structure and coordination of 2
                  departments which were working with the database).
                </li>
                <li>
                  Prepared and automated various reports for Ministry of energy
                  of Russian Federation.
                </li>
                <li>
                  Provided the full documentation support for grid connection
                  process.
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.icons}>
            <OboronEnergoLogo className={styles.oboronEnergoLogo}></OboronEnergoLogo>
          </div>
        </div>
      </section>
      <section className={styles.section}>
        <div className={styles.row}>
          <div className={styles.rowText}>
            <h2>2015-2016 MOESK - Specialist:</h2>
            <div className={styles.list}>
              <ul>
                <li>
                  Performed calculations of Moscow region electricity
                  distribution network (the biggest in Russia) bandwidth.
                </li>
                <li>
                  Prepared technical specifications for 0,4-6-10-20 kV grid
                  connections. Worked on most efficient solutions for grid
                  connections.
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.icons}>
            <div className={styles.MOESKLogo}></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExperienceContent;
