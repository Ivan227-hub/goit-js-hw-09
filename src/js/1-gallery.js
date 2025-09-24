import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const images = [
  {
    preview: "https://placehold.co/300x200",
    original: "https://placehold.co/1200x800",
    description: "Sample image 1",
  },
  {
    preview: "https://placehold.co/300x201",
    original: "https://placehold.co/1200x801",
    description: "Sample image 2",
  },
  {
    preview: "https://placehold.co/300x202",
    original: "https://placehold.co/1200x802",
    description: "Sample image 3",
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
  captionDelay: 250,
  captionPosition: "bottom",
});
