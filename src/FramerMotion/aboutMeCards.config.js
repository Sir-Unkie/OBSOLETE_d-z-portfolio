export const cardVariants = {
  hidden: { opacity: 0, x: '40vw' },
  visible: {
    opacity: 1,
    x: 0,
    // originY: 0.5,
    transition: {
      type: 'Tween',
      //   type: 'spring',
      //   stiffness: 120,
      //   mass: 1,
      duration: 0.5,
    },
  },

  exit: {
    opacity: 0,
    x: '40vw',
    transition: {
      type: 'Tween',
      //   type: 'spring',
      //   stiffness: 120,
      duration: 0.3,
    },
  },
};
