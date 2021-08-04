import React from 'react';
import styles from './ProjectsPage.module.scss';
import ProjectCard from '../../Components/ProjectCard/ProjectCard';
import MyHeading from '../../Components/MyHeading/MyHeading';

const ProjectsPage = () => {
  return (
    <main className={styles.projectsPage}>
      <MyHeading>My projects</MyHeading>
      {/* here i should make an additional data array and loop through it to load the components */}
      <div className={styles.projectsContainer}>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
      </div>
    </main>
  );
};

export default ProjectsPage;
