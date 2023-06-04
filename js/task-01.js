const categories = document.querySelectorAll(".item");
const categoriesQuantity = categories.length;

console.log("Number of categories:" + categoriesQuantity);

categories.forEach(function (category, index) {
  const nameCategory = category.querySelector("h2").textContent;
  const elemetsQuantity = category.querySelectorAll("li").length;
  console.log("Category: " + nameCategory);
  console.log("Elements: " + elemetsQuantity);
});
