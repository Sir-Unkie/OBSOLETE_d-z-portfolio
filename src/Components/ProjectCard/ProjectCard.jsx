import React from 'react';
import styles from './ProjectCard.module.scss';
import CustomLink from '../CustomButton/CustomLink';

const ProjectCard = ({
  technologyStack,
  mainFeatures,
  projectName,
  imageLink,
  websiteURL,
  githubURL,
  dark,
}) => {
  return (
    <div
      className={
        dark === true
          ? `${styles.projectCard} ${styles.dark}`
          : `${styles.projectCard}`
      }
    >
      <div className={styles.imageContainer}>
        <div
          className={styles.image}
          style={{
            backgroundImage: `url(${imageLink})`,
          }}
          // style={{ backgroundImage: `url(${props.imageUrl})` }}
        ></div>
      </div>
      <div className={styles.content}>
        <div>
          <h2 className={styles.projectName}>{projectName}</h2>
          <div className={styles.listsContainer}>
            <div className={styles.technologyStack}>
              <p className={styles.paragraph}>Technology stack:</p>
              <ul className={styles.list}>
                {technologyStack.map(elem => {
                  return <li className={styles.listItem}>{elem}</li>;
                })}
              </ul>
            </div>
            <div className={styles.mainFeatures}>
              <p className={styles.paragraph}>Main Features:</p>
              <ul className={styles.list}>
                {mainFeatures.map(feature => {
                  return <li className={styles.listItem}>{feature}</li>;
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.btnContainer}>
          {dark ? (
            <CustomLink darkBG={true} dark={false} link={websiteURL}>
              Go to the website
            </CustomLink>
          ) : (
            <CustomLink darkBG={false} dark={true} link={websiteURL}>
              Go to the website
            </CustomLink>
          )}
          {dark ? (
            <CustomLink link={githubURL} darkBG={true} dark={true}>
              GitHub repo
            </CustomLink>
          ) : (
            <CustomLink link={githubURL} darkBG={false} dark={false}>
              GitHub repo
            </CustomLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
