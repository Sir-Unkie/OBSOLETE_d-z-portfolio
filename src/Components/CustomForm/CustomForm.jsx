import React from 'react';
import styles from './CustomForm.module.scss';
import { useState } from 'react';
import emailjs from 'emailjs-com';
import Portal from '../Alert/Portal';
import Alert from '../Alert/Alert';

const CustomForm = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailTouched, setEmailIsTouched] = useState(false);
  const [status, setStatus] = useState('initial');
  const [alertMessage, setAlertMessage] = useState('');

  const submitHandler = async e => {
    setStatus('loading');
    const templateParams = {
      from_name: email,
      message: message,
    };
    const serviceID = 'service_8jxn9mf';
    const templateID = 'template_6zdaxl9';
    const userID = 'user_tDawHOAXBaCAXatImtJRc';
    e.preventDefault();

    try {
      setStatus('loading');
      setAlertMessage('Sending the message');
      await emailjs.send(serviceID, templateID, templateParams, userID);
      // clear the fields
      setEmail('');
      setMessage('');
      // display the success info
      setStatus('success');
      setAlertMessage('Message successfuly sent');
      // clear the message
      setTimeout(() => {
        setStatus('initial');
      }, 2000);
    } catch (error) {
      setStatus('error');
      setAlertMessage('Something went wrong, the message was not sent');
      setTimeout(() => {
        setStatus('initial');
      }, 2000);
    }
  };

  const emailChangeHandler = e => {
    setEmail(e.target.value);
  };
  const messageChangeHandler = e => {
    setMessage(e.target.value);
  };
  const focusHandler = () => {
    setEmailIsTouched(true);
  };

  return (
    <React.Fragment>
      <Portal>
        <Alert message={alertMessage} messageType={status}></Alert>
      </Portal>

      {/* {status !== 'initial' ? (
        <Portal>
          <Alert message={alertMessage} messageType={status}></Alert>
        </Portal>
      ) : null} */}

      <form className={styles.contactForm}>
        <div className={styles.formContainer}>
          <div className={styles.formGroup}>
            <input
              value={email}
              type='email'
              id='email'
              onChange={emailChangeHandler}
              onFocus={focusHandler}
              required
            />
            <label
              className={
                email === ''
                  ? `${styles.labelEmail}`
                  : `${styles.labelEmail} ${styles.shrinked}`
              }
              htmlFor='email'
            >
              Your email
            </label>
          </div>
          <div className={styles.formGroup}>
            <textarea
              id='message'
              onChange={messageChangeHandler}
              value={message}
            ></textarea>
            <label
              htmlFor='message'
              className={
                message === ''
                  ? `${styles.labelTextArea}`
                  : `${styles.labelTextArea} ${styles.shrinked}`
              }
            >
              Your message...
            </label>
          </div>
          <div className={styles.formGroup}>
            <button onClick={submitHandler} className={styles.btn}>
              Send
            </button>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
};

export default CustomForm;
