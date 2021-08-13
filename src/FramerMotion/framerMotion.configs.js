export const defaultSlide = {
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
