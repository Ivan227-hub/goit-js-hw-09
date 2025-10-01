import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const images = [
  {
    preview:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
    description: "Tree in sunset",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2016/02/19/11/19/aurora-1209686__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2016/02/19/11/19/aurora-1209686_1280.jpg",
    description: "Aurora Borealis",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2015/09/18/11/47/bird-944887__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2015/09/18/11/47/bird-944887_1280.jpg",
    description: "Flying bird",
  },
];

const gallery = document.querySelector(".gallery");

const markup = images
  .map(
    ({ preview, original, description }) => `
    <li class="gallery-item">
      <a class="gallery-link" href="${original}">
        <img 
          class="gallery-image" 
          src="${preview}" 
          alt="${description}" 
        />
      </a>
    </li>`
  )
  .join("");

gallery.innerHTML = markup;

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
