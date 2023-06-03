const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const makeGalleryCard = (image) => {
  const { url, alt } = image;
  return `
  <li class="gallery-item">
  <img src="${url}" alt="${alt}" width ="220" height="160" class="gallery-img">
  </li>
  `;
};

const galleryEl = document.querySelector(".gallery");
const markup = images.map((el) => makeGalleryCard(el));

galleryEl.insertAdjacentHTML("afterbegin", markup.join(""));

const galleryItemEl = document.querySelectorAll(".gallery-item");

galleryEl.style.display = "flex";
galleryEl.style.gap = "20px";
galleryItemEl[0].style.listStyle = "none";
galleryItemEl[1].style.listStyle = "none";
galleryItemEl[2].style.listStyle = "none";
