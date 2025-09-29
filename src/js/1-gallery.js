import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const images = [
  {
    preview: "./images/image1-small.jpg",
    original: "./images/image1-large.jpg",
    description: "Mountains",
  },
  {
    preview: "./images/image2-small.jpg",
    original: "./images/image2-large.jpg",
    description: "Lake",
  },
  {
    preview: "./images/image3-small.jpg",
    original: "./images/image3-large.jpg",
    description: "Forest",
  },
];

const galleryContainer = document.querySelector(".gallery");

const markup = images
  .map(
    (img) => `
    <li class="gallery-item">
      <a class="gallery-link" href="${img.original}">
        <img
          class="gallery-image"
          src="${img.preview}"
          alt="${img.description}"
        />
      </a>
    </li>`
  )
  .join("");

galleryContainer.innerHTML = markup;

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});
