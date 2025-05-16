export const slideInFromRight = (initialDelay = 1) => ({
  hidden: { x: 100, opacity: 0 },
  visible: (i) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: initialDelay + i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
});
export function slideInFromBottom(delay = 0.5) {
  return {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay,
        duration: 0.5,
      },
    },
    exit: {
      opacity: 0,
      scale: 0,
    },
  };
}
