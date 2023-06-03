const counter = {
  value: 0,
  increment() {
    this.value += 1;
  },
  decrement() {
    this.value -= 1;
  },
};

const BtnEl = document.querySelectorAll("button");
const decrementBtnEl = BtnEl[0];
const incrementBtnEl = BtnEl[1];
let valueEl = document.querySelector("#value");

decrementBtnEl.addEventListener("click", handleDecrementBtnClick);
incrementBtnEl.addEventListener("click", handleIncrementBtnClick);

function handleDecrementBtnClick() {
  counter.decrement();
  valueEl.textContent = counter.value;
}

function handleIncrementBtnClick() {
  counter.increment();
  valueEl.textContent = counter.value;
}
