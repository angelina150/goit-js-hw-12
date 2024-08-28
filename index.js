import{a as h,S as b,i as n}from"./assets/vendor-DOgVoBmD.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();const y=r=>`<li class="gallery-card">
      <a href="${r.largeImageURL}" class="gallery-link">
            <img src="${r.webformatURL}" alt="${r.tags}" class="gallery-img" loading="lazy">
        </a>
      <ul class="info">
            <li class="info-item">
                <p class="info-item-desc">Likes</p>${r.likes}
            </li>
            <li class="info-item">
                <p class="info-item-desc">Views</p>${r.views}
            </li>
            <li class="info-item">
                <p class="info-item-desc">Comments</p>${r.comments}
            </li>
            <li class="info-item">
                <p class="info-item-desc">Downloads</p>${r.downloads}
            </li>
        </ul>
    </li>`;h.defaults.baseURL="https://pixabay.com/api/";const f=(r,t)=>{const o={params:{q:r,key:"45557561-052ca280d13484c0c5f536db7",image_type:"photo",orientation:"horizontal",safesearch:"true",page:t,per_page:15}};return h.get("",o)},g=document.querySelector(".js-search-form"),i=document.querySelector(".user-list"),m=document.querySelector(".loader"),c=document.querySelector(".js-load-more"),L=new b(".user-list a",{});let l=35,u="",p=0;const w=async r=>{try{i.innerHTML="",r.preventDefault(),m.classList.remove("is-hidden"),c.classList.add("is-hidden"),u=g.elements.user_query.value,l=1;const t=await f(u,l);if(t.data.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),i.innerHTML="";return}console.log(t);const o=t.data.hits.map(a=>y(a)).join("");i.innerHTML=o,L.refresh(),c.classList.remove("is-hidden")}catch{n.error({message:"Sorry, there was a problem with your request. Please try again!",position:"topRight"})}finally{m.classList.add("is-hidden")}},S=async r=>{try{l++;const t=await f(u,l),o=t.data.hits.map(e=>y(e)).join("");i.insertAdjacentHTML("beforeend",o),L.refresh(),p=i.querySelector("li").getBoundingClientRect().height,scrollBy({top:p*2,behavior:"smooth"}),l===Math.ceil(t.data.totalHits/15)&&(c.classList.add("is-hidden"),n.warning({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch{n.error({message:"Sorry, there was a problem with your request. Please try again!",position:"topRight",color:"yellow"})}};g.addEventListener("submit",w);c.addEventListener("click",S);
//# sourceMappingURL=index.js.map
