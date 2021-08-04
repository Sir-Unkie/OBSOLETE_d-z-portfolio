import React from 'react';
import styles from './ContactPage.module.scss';
import MyHeading from '../../Components/MyHeading/MyHeading';
const ContactPage = () => {
  return (
    <main className={styles.contactPage}>
      <MyHeading>Contact me</MyHeading>
    </main>
  );
};

export default ContactPage;
