import React from 'react';
import styles from './ProjectsPage.module.scss';

const ProjectsPage = () => {
  return (
    <main className={styles.projectsPage}>
      <h1>My projects</h1>
      <div className={styles.projectsContainer}></div>
    </main>
  );
};

export default ProjectsPage;
