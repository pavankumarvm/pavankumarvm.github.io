export const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show:   { opacity: 1, y: 0,  transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
};

export const fadeLeft = {
  hidden: { opacity: 0, x: -32 },
  show:   { opacity: 1, x: 0,  transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
};

export const fadeRight = {
  hidden: { opacity: 0, x: 32 },
  show:   { opacity: 1, x: 0,  transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.88 },
  show:   { opacity: 1, scale: 1,   transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
};

export const stagger = (delay = 0.1) => ({
  hidden: {},
  show:   { transition: { staggerChildren: delay } },
});

export const viewportOnce = { once: true, margin: "-80px" };
