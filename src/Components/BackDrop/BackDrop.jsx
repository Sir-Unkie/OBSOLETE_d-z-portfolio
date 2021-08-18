import React from 'react';
import styles from './BackDrop.module.scss';
import { AnimatePresence, motion } from 'framer-motion';

const BackDrop = () => {
  return (
    <motion.div
      key='burger'
      transition={{ type: 'Tween', duration: 0.3 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={styles.backdrop}
    ></motion.div>
  );
};

export default BackDrop;
