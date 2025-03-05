export const searchBarAnimationVariants = {
  exit: { y: -100, opacity: 0 },
  visible: { y: 0, opacity: 1 },
  hidden: { y: -100, opacity: 0 },
};

export const searchBarAnimationTransition = {
  damping: 30,
  type: "spring",
  stiffness: 300,
};
