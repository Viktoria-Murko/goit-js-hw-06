function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorBtnEl = document.querySelector(".change-color");
const bodyEl = document.querySelector("body");
const colorValueEl = document.querySelector(".color");

changeColorBtnEl.addEventListener("click", () => {
  bodyEl.style.backgroundColor = getRandomHexColor();
  colorValueEl.textContent = bodyEl.style.backgroundColor;
});
