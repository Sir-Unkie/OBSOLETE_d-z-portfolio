import React from 'react';
import styles from './ContactPage.module.scss';
import MyHeading from '../../Components/MyHeading/MyHeading';
import ContactButton from '../../Components/ContactButton/ContactButton';

const ContactPage = () => {
  return (
    <div className={styles.bg}>
      <div className={styles.contactPage}>
        <MyHeading>Contact me</MyHeading>
        <div className={styles.contactMeContainer}>
          <div className={styles.leftArea}>
            <h2>Have any questions or an interesting project towork on?</h2>
            <p className={styles.paragraph}>
              I'd love to hear from you!<br></br>
              Just fill up the form or send an email to
              <a
                href='mailto:zhidovlenkovDI@gmail.com'
                className={styles.colored}
              >
                {' '}
                ZhidovlenkovDI@gmail.com
              </a>
            </p>
            <form className={styles.contactForm}>
              <div className={styles.formGroup}>
                <label htmlFor='email'>Your email</label>
                <input type='email' id='email' required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor='message'>Your message...</label>
                <textarea id='message'></textarea>
              </div>
              <div className={styles.formGroup}>
                <button>Send</button>
              </div>
            </form>
          </div>
          <div className={styles.rightArea}>
            <div className={styles.github}>
              <ContactButton icon='github'></ContactButton>
            </div>
            <div className={styles.mail}>
              <ContactButton icon='mail'></ContactButton>
            </div>
            <div className={styles.whatsapp}>
              <ContactButton icon='whatsapp'></ContactButton>
            </div>
            <div className={styles.telegram}>
              <ContactButton icon='telegram'></ContactButton>
            </div>
            <div className={styles.linkedIn}>
              <ContactButton icon='linkedIn'></ContactButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
