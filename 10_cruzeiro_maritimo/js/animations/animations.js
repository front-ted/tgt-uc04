const animate = [
  {
    opacity: 0,
    display: "none",
  },
  {
    opacity: 1,
    display: "flex",
  },
];

const animateConfig = {
  duration: 1000,
  iterations: 1,
  fill: "both",
  direction: "normal",
};

export const fadeIn = (el, compare = null, delay = 500, browser = null) => {
  animateConfig.duration = delay;
  if (!compare) {
    el.animate(animate, animateConfig);
  } else {
    compare.addEventListener("animationend", () => {
      console.log("entrou");
      el.animate(animate, animateConfig);
    });
  }
};

export const fadeOut = (el, compare = null, delay = 500, browser = null) => {
  animateConfig.duration = delay;
  animateConfig.direction = "reverse";

  if (!compare) {
    el.animate(animate, animateConfig);
    if (browser) {
      el.classList.toggle("d-none");
    }
  } else {
    compare.addEventListener("animationend", () => {
      el.animate(animate, animateConfig);
    });
    if (browser) {
      el.classList.toggle("d-none");
    }
  }
};
