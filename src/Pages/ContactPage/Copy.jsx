import React from 'react';
import styles from './ContactPage.module.scss';
import MyHeading from '../../Components/MyHeading/MyHeading';
import ContactButton from '../../Components/ContactButton/ContactButton';
import CustomForm from '../../Components/CustomForm/CustomForm';
import { defaultSlide } from '../../FramerMotion/framerMotion.pages.configs';
import { motion } from 'framer-motion';

const ContactPage = () => {
  return (
    <motion.div
      variants={defaultSlide}
      initial='hidden'
      animate='visible'
      exit='exit'
      className={styles.bg}
    >
      <div className={styles.pageBorderOverflowContainer}>
        <div className={styles.contactPage}>
          <MyHeading>Contact me</MyHeading>
 
            <div className={styles.leftArea}>
              <h2>Have any questions or an interesting project towork on?</h2>
              <p className={styles.paragraph}>
                I'd love to hear from you!<br></br>
                Just fill up the form or send an email at&nbsp;
                <a
                  href='mailto:zhidovlenkovDI@gmail.com'
                  className={styles.colored}
                >
                  ZhidovlenkovDI@gmail.com
                </a>
              </p>
              <CustomForm></CustomForm>
            </div>
            <div className={styles.rightArea}>
              <div className={styles.github}>
                <ContactButton
                  goToLink='https://github.com/Sir-Unkie'
                  icon='GitHub'
                ></ContactButton>
              </div>
              <div className={styles.mail}>
                <ContactButton
                  goToLink='mailto:zhidovlenkovDI@gmail.com'
                  icon='Mail'
                ></ContactButton>
              </div>
              <div className={styles.whatsapp}>
                <ContactButton
                  goToLink='https://wa.me/79197255841'
                  icon='WhatsApp'
                ></ContactButton>
              </div>
              <div className={styles.telegram}>
                <ContactButton
                  goToLink='https://telegram.me/Sir_Unkie'
                  icon='Telegram'
                ></ContactButton>
              </div>
              <div className={styles.linkedIn}>
                <ContactButton
                  goToLink='https://www.linkedin.com/in/dmitry-zhidovlenkov'
                  icon='LinkedIn'
                ></ContactButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactPage;
