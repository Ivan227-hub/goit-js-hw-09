import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{S as a}from"./assets/vendor-CgTBfC_f.js";const e=[{preview:"./images/image1-small.jpg",original:"./images/image1-large.jpg",description:"Mountains"},{preview:"./images/image2-small.jpg",original:"./images/image2-large.jpg",description:"Lake"},{preview:"./images/image3-small.jpg",original:"./images/image3-large.jpg",description:"Forest"}],l=document.querySelector(".gallery"),g=e.map(i=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${i.original}">
        <img
          class="gallery-image"
          src="${i.preview}"
          alt="${i.description}"
        />
      </a>
    </li>`).join("");l.innerHTML=g;new a(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});
//# sourceMappingURL=1-gallery.js.map
