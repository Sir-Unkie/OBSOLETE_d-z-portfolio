import React from 'react';
import styles from './ContactButton.module.scss';

const ContactButton = () => {
  return (
    <div className={styles.bigOuterCircle}>
      <div className={styles.smallOuterCircle}>
        <div className={styles.innerCircle}>A</div>
      </div>
    </div>
  );
};

export default ContactButton;
