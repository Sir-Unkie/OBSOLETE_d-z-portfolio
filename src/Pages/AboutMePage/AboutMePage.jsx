import React from 'react';
import styles from './AboutMePage.module.scss';
import AboutMeButton from '../../Components/AboutMeButton/AboutMeButton';
import { useState } from 'react';

const AboutMePage = () => {
  const initialState = {
    tech: false,
    exp: false,
    education: false,
  };
  const [visibleOption, setVisibleOption] = useState(initialState);
  const selectOption = option => {
    setVisibleOption({
      ...initialState,
      [option]: true,
    });
  };

  return (
    <React.Fragment>
      <div className={styles.bg}></div>
      <div className={styles.aboutMe}>
        <div className={styles.optionsContainer}>
          <div className={styles.techStack}>
            <AboutMeButton
              option={'tech'}
              clickHandler={selectOption}
              selected={visibleOption.tech}
            >
              My tech stack
            </AboutMeButton>
          </div>
          <div className={styles.experience}>
            <AboutMeButton
              clickHandler={selectOption}
              option={'exp'}
              selected={visibleOption.exp}
            >
              My Experience
            </AboutMeButton>
          </div>
          <div className={styles.Education}>
            <AboutMeButton
              clickHandler={selectOption}
              option={'education'}
              selected={visibleOption.education}
            >
              My Education
            </AboutMeButton>
          </div>
        </div>
        <div className={styles.textArea}>
          <div>11111</div>
          <div>2222</div>
          <div>3333</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AboutMePage;