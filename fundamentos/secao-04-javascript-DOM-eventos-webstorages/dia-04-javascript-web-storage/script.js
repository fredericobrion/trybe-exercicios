const main = document.querySelector("main");

const changeBackground = () => {
  const backgroundButton = document.querySelectorAll(
    "#background-color button"
  );
  for (let index of backgroundButton) {
    index.addEventListener("click", () => {
      localStorage.setItem("background", index.innerText);
      main.style.backgroundColor = index.innerText;
    });
  }
};

const changeFontColor = () => {
  const fontColorButton = document.querySelectorAll("#font-color button");
  for (let index of fontColorButton) {
    index.addEventListener("click", () => {
      localStorage.setItem("fontColor", index.innerText);
      main.style.color = index.innerText;
    });
  }
};

const changeFontSize = () => {
  const fontSizeButton = document.querySelectorAll("#font-size button");
  for (let index of fontSizeButton) {
    index.addEventListener("click", () => {
      localStorage.setItem("fontSize", index.innerText);
      main.style.fontSize = index.innerText;
    });
  }
};

const changeLineHeight = () => {
  const lineHeightButton = document.querySelectorAll("#line-height button");
  for (let index of lineHeightButton) {
    index.addEventListener("click", () => {
      localStorage.setItem("lineHeight", index.innerText);
      main.style.lineHeight = index.innerText;
    });
  }
};

const changeFontStyle = () => {
  const fontStyleButton = document.querySelectorAll("#font-family button");
  for (let index of fontStyleButton) {
    index.addEventListener("click", () => {
      localStorage.setItem("fontStyle", index.innerText);
      main.style.fontFamily = index.innerText;
    });
  }
};

const initialize = () => {
  main.style.backgroundColor = localStorage.getItem("background");
  main.style.color = localStorage.getItem("fontColor");
  main.style.fontSize = localStorage.getItem("fontSize");
  main.style.lineHeight = localStorage.getItem("lineHeight");
  main.style.fontFamily = localStorage.getItem("fontStyle");
};

window.onload = () => {
  changeBackground();
  changeFontColor();
  changeFontSize();
  changeLineHeight();
  changeFontStyle();

  initialize();
};
