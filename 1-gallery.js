import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{S as a}from"./assets/vendor-CgTBfC_f.js";const l=[{preview:"https://placehold.co/300x200",original:"https://placehold.co/1200x800",description:"Sample image 1"},{preview:"https://placehold.co/300x201",original:"https://placehold.co/1200x801",description:"Sample image 2"},{preview:"https://placehold.co/300x202",original:"https://placehold.co/1200x802",description:"Sample image 3"}],i=document.querySelector(".gallery"),o=l.map(e=>`
<li class="gallery-item">
  <a class="gallery-link" href="${e.original}">
    <img 
      class="gallery-image" 
      src="${e.preview}" 
      alt="${e.description}" 
    />
  </a>
</li>`).join("");i.innerHTML=o;new a(".gallery a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"});
//# sourceMappingURL=1-gallery.js.map
