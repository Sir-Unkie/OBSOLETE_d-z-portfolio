import React from 'react';
import styles from './ProjectCard.module.scss';
import CustomButton from '../CustomButton/CustomButton';

const ProjectCard = () => {
  return (
    <div className={styles.projectCard}>
      <div className={styles.image}></div>
      <div className={styles.content}>
        <h2 className={styles.projectName}>Project Name</h2>
        <div className={styles.listsContainer}>
          <div className={styles.technologyStack}>
            <p className={styles.paragraph}>Technology stack:</p>
            <ul className={styles.list}>
              <li className={styles.listItem}>React</li>
              <li className={styles.listItem}>Redux</li>
              <li className={styles.listItem}>React Router</li>
            </ul>
          </div>
          <div className={styles.mainFeatures}>
            <p className={styles.paragraph}>Main Features:</p>
            <ul className={styles.list}>
              <li className={styles.listItem}>Cart functionality</li>
              <li className={styles.listItem}>Authentication</li>
              <li className={styles.listItem}>Stripe payments</li>
            </ul>
          </div>
        </div>
        <div className={styles.btnContainer}>
          <CustomButton></CustomButton>
          <CustomButton></CustomButton>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
