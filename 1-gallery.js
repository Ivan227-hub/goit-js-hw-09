import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{S as t}from"./assets/vendor-CgTBfC_f.js";const p=[{preview:"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",original:"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",description:"Tree in sunset"},{preview:"https://cdn.pixabay.com/photo/2016/02/19/11/19/aurora-1209686__340.jpg",original:"https://cdn.pixabay.com/photo/2016/02/19/11/19/aurora-1209686_1280.jpg",description:"Aurora Borealis"},{preview:"https://cdn.pixabay.com/photo/2015/09/18/11/47/bird-944887__340.jpg",original:"https://cdn.pixabay.com/photo/2015/09/18/11/47/bird-944887_1280.jpg",description:"Flying bird"}],r=document.querySelector(".gallery"),e=p.map(({preview:a,original:i,description:o})=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${i}">
        <img 
          class="gallery-image" 
          src="${a}" 
          alt="${o}" 
        />
      </a>
    </li>`).join("");r.innerHTML=e;new t(".gallery a",{captionsData:"alt",captionDelay:250});
//# sourceMappingURL=1-gallery.js.map
