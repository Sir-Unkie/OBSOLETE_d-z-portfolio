import React from 'react';
import styles from './IconsBar.module.scss';
import { ReactComponent as LinkedIn } from '../../Assets/jam_linkedin-square.svg';
import { ReactComponent as GitHub } from '../../Assets/ant-design_github-filled.svg';
import { ReactComponent as WhatsApp } from '../../Assets/cib_whatsapp.svg';
import { ReactComponent as Telegram } from '../../Assets/fa-brands_telegram.svg';
import { ReactComponent as Mail } from '../../Assets/mail.copy2.svg';
import { motion } from 'framer-motion';

const IconsBar = () => {
  return (
    <div className={styles.iconsContainer}>
      <motion.a
        whileHover={{ scale: 1.15 }}
        transition={{ type: 'spring', stiffness: 1100 }}
        className={styles.iconLinked}
        href='https://www.linkedin.com/in/dmitry-zhidovlenkov'
        target='_blank'
        rel='noreferrer'
      >
        <LinkedIn className={styles.icon}></LinkedIn>
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.15 }}
        transition={{ type: 'spring', stiffness: 1100 }}
        href='mailto:zhidovlenkovDI@gmail.com'
        rel='noreferrer'
      >
        <Mail className={`${styles.icon} ${styles.mail}`}></Mail>
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.15 }}
        transition={{ type: 'spring', stiffness: 1100 }}
        href='https://github.com/Sir-Unkie'
        target='_blank'
        rel='noreferrer'
      >
        <GitHub className={styles.icon}></GitHub>
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.15 }}
        transition={{ type: 'spring', stiffness: 1100 }}
        href='https://telegram.me/Sir_Unkie'
        target='_blank'
        rel='noreferrer'
      >
        <Telegram className={styles.icon}></Telegram>
      </motion.a>

      <motion.a
        whileHover={{ scale: 1.15 }}
        transition={{ type: 'spring', stiffness: 1100 }}
        href='https://wa.me/79197255841'
        target='_blank'
        rel='noreferrer'
      >
        <WhatsApp className={styles.icon}></WhatsApp>
      </motion.a>
    </div>
  );
};

export default IconsBar;
