const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const createIngredientsList = (list) => {
  list.map((item) => {
    const itemEl = document.createElement("li");
    itemEl.textContent = item;
    itemEl.classList.add("item");
    document.querySelector("ul").append(itemEl);
  });
};

createIngredientsList(ingredients);
