import React from 'react';
import styles from './AboutMePage.module.scss';
import AboutMeButton from '../../Components/AboutMeButton/AboutMeButton';
import TechStackContent from '../../Components/TechStackContent/TechStackContent';
import ExperienceContent from '../../Components/ExperienceContent/ExperienceContent';
import EducationContent from '../../Components/EducationContent/EducationContent';
import MyHeading from '../../Components/MyHeading/MyHeading';
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
        <MyHeading>About me</MyHeading>
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
          {/* <TechStackContent></TechStackContent> */}
          {visibleOption.tech === true ? (
            <TechStackContent></TechStackContent>
          ) : null}
          {visibleOption.exp === true ? (
            <ExperienceContent></ExperienceContent>
          ) : null}
          {visibleOption.education === true ? (
            <EducationContent></EducationContent>
          ) : null}
        </div>
      </div>
    </React.Fragment>
  );
};

export default AboutMePage;
