import{a as u,S as f,i as o}from"./assets/vendor-CrlV4O_2.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function e(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(t){if(t.ep)return;t.ep=!0;const s=e(t);fetch(t.href,s)}})();const l={API_KEY:void 0,BASE_URL:"https://pixabay.com/api/"};async function d(a){const r={key:l.API_KEY,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await u.get(l.BASE_URL,{params:r})).data}const c=document.querySelector(".gallery");let p=new f(".gallery a",{captionsData:"alt",captionDelay:250});function m(a){const r=a.map(e=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${e.largeImageURL}">
            <img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}" />
          </a>
          <ul class="image-info">
              <li class="info-item">
    <span class="info-title">Likes</span>
    <span class="info-value">${e.likes}</span>
  </li>
  <li class="info-item">
    <span class="info-title">Views</span>
    <span class="info-value">${e.views}</span>
  </li>
  <li class="info-item">
    <span class="info-title">Comments</span>
    <span class="info-value">${e.comments}</span>
  </li>
  <li class="info-item">
    <span class="info-title">Downloads</span>
    <span class="info-value">${e.downloads}</span>
  </li>
          </ul>
        </li>`).join("");c.insertAdjacentHTML("beforeend",r),p.refresh()}function y(){c.innerHTML=""}function g(){document.querySelector(".loader").classList.remove("hidden")}function h(){document.querySelector(".loader").classList.add("hidden")}const L=document.querySelector(".form");L.addEventListener("submit",async a=>{a.preventDefault();const r=a.target.elements["search-text"].value.trim();if(!r){o.warning({title:"Warning",message:"Please enter a search term!"});return}y(),g();try{const e=await d(r);e.hits.length===0?o.error({title:"Oops!",message:"Sorry, there are no images matching your search query. Please try again!"}):m(e.hits)}catch(e){o.error({title:"Error",message:"Something went wrong. Please try again later."}),console.error(e)}finally{h()}});
//# sourceMappingURL=index.js.map
