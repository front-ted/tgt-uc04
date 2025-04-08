const proportionScale = (width, height) => {
  const widthScreen = window.visualViewport.width;
  const heightScreen = window.visualViewport.height;
  const proporcaoHeight = heightScreen / height;
  const proporcaoWidth = widthScreen / width;

  if (proporcaoHeight < proporcaoWidth) {
    return [proporcaoHeight, "height", "width"];
  } else {
    return [proporcaoWidth, "width", "height"];
  }
};

export const resizeWindow = (selector = ".game") => {
  const proporcao1920 = proportionScale(1920, 1080)[0];
  const node = document.querySelector(selector);

  node.style.transform = `scale(${proporcao1920})`;
  node.style.transformOrigin = `top`;

  let proporcao900;
  if (window.visualViewport.width < 992) {
    const btnsMobile = document.querySelector(".btnsMobile");
    proporcao900 = proportionScale(900, 576)[0];
  } else {
    proporcao900 = 1;
  }
};
