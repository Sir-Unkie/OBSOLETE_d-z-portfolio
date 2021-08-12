import React from 'react';
import styles from './ContactButton.module.scss';
import { ReactComponent as LinkedIn } from '../../Assets/jam_linkedin-square.svg';
import { ReactComponent as GitHub } from '../../Assets/ant-design_github-filled.svg';
import { ReactComponent as WhatsApp } from '../../Assets/cib_whatsapp.svg';
import { ReactComponent as Telegram } from '../../Assets/fa-brands_telegram.svg';
import { ReactComponent as Mail } from '../../Assets/carbon_email.svg';

const ContactButton = ({ icon, goToLink }) => {
  return (
    <a
      href={goToLink}
      target={icon === 'Mail' ? null : '_blank'}
      rel='noreferrer'
      className={
        icon !== 'LinkedIn'
          ? `${styles.bigOuterCircle}`
          : `${styles.LinkedIn} ${styles.bigOuterCircle}`
      }
    >
      <div className={styles.smallOuterCircle}>
        <div className={styles.innerCircle}>
          {icon === 'LinkedIn' && <LinkedIn></LinkedIn>}
          {icon === 'GitHub' && <GitHub></GitHub>}
          {icon === 'WhatsApp' && <WhatsApp></WhatsApp>}
          {icon === 'Telegram' && <Telegram></Telegram>}
          {icon === 'Mail' && <Mail></Mail>}
        </div>
      </div>
    </a>
  );
};

export default ContactButton;
