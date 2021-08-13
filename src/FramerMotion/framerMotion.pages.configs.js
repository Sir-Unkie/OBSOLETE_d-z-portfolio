export const defaultSlide = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      type: 'Tween',
      duration: 0.3,
    },
  },

  exit: {
    opacity: 0,
    transition: {
      type: 'Tween',
      duration: 0.3,
    },
  },
};

export const homePageVariants = {
  hidden: { opacity: 1, x: '100vw' },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'twin',
      duration: 0.5,
      stiffness: 100,
      damping: 12,
    },
  },

  exit: {
    opacity: 1,
    x: '-103vw',
    transition: {
      type: 'twin',
      duration: 0.5,
      stiffness: 100,
      damping: 12,
    },
  },
};
