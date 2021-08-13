import React from 'react';
import styles from './CustomForm.module.scss';
import { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import Portal from '../Alert/Portal';
import Alert from '../Alert/Alert';

const CustomForm = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailTouched, setEmailIsTouched] = useState(false);
  const [messageTouched, setMessageTouched] = useState(false);
  const [status, setStatus] = useState('initial');
  const [alertMessage, setAlertMessage] = useState('');
  const [emailValid, setEmailValid] = useState(false);
  const [messageValid, setMessageValid] = useState(false);

  const submitHandler = async e => {
    e.preventDefault();
    const templateParams = {
      from_name: email,
      message: message,
    };
    const serviceID = 'service_8jxn9mf';
    const templateID = 'template_6zdaxl9';
    const userID = 'user_tDawHOAXBaCAXatImtJRc';

    // make an alert if smth is not filled
    if (!emailValid || !messageValid) {
      setStatus('error');
      setAlertMessage('Please, fill all the form fields.');
      setEmailIsTouched(true);
      setMessageTouched(true);
      setTimeout(() => {
        setStatus('initial');
        setAlertMessage('');
      }, 3000);
      return;
    }
    setStatus('loading');
    try {
      setStatus('loading');
      setAlertMessage('Sending your message... ');
      await emailjs.send(serviceID, templateID, templateParams, userID);

      // clear the fields
      setEmail('');
      setMessage('');
      setEmailIsTouched(false);
      setMessageTouched(false);

      // display the success info
      setStatus('success');
      setAlertMessage('Message sent successfully.');

      // clear the message
      setTimeout(() => {
        setStatus('initial');
      }, 2000);
    } catch (error) {
      setStatus('error');
      setAlertMessage('Something went wrong, the message was not sent!');
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
  const blurHandler = e => {
    e.target.tagName === 'INPUT' && setEmailIsTouched(true);
    e.target.tagName === 'TEXTAREA' && setMessageTouched(true);
  };

  useEffect(() => {
    email.includes('@') && email.includes('.') && !email.includes(' ')
      ? setEmailValid(true)
      : setEmailValid(false);

    message.length > 0 ? setMessageValid(true) : setMessageValid(false);
  }, [email, message]);

  return (
    <React.Fragment>
      <Portal>
        <Alert message={alertMessage} messageType={status}></Alert>
      </Portal>
      <form className={styles.contactForm}>
        <div className={styles.formContainer}>
          <div className={styles.formGroup}>
            <input
              // className={styles.notValid}
              className={
                emailValid === false && emailTouched === true
                  ? `${styles.notValid}`
                  : null
              }
              value={email}
              type='email'
              id='email'
              onChange={emailChangeHandler}
              onBlur={blurHandler}
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
              className={
                messageValid === false && messageTouched === true
                  ? `${styles.notValid}`
                  : null
              }
              id='message'
              onChange={messageChangeHandler}
              value={message}
              onBlur={blurHandler}
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
