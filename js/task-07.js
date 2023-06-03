const fontSizeControlEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

fontSizeControlEl.addEventListener("input", () => {
  const fontSize = fontSizeControlEl.value + "px";
  textEl.style.fontSize = fontSize;
});
