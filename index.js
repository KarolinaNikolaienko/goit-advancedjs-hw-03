import{s as l,i as n}from"./assets/vendor-DnUmO7qu.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function c(a){const i=new URLSearchParams({key:"3632143-ebeee10190d206f1a5cb99fa1",q:encodeURIComponent(a),image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`https://pixabay.com/api/?${i}`).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()})}function m(a){const i=document.querySelector(".images-list");let s="";for(let e=0;e<a.hits.length;e++){const t=a.hits[e];s+=`<li class="images-item">
    <a class="images-link" href="${t.largeImageURL}" onclick="return false">
    <img
      class="image"
      src="${t.webformatURL}"
      alt="${t.tags}"
    />
    </a>
    <div class="image-statistics">
                <ul class="stat-list stat-titles-list">
                  <li class="stat-titles-item">
                    <span class="stat-title">Likes</span
                    ><span class="stat-value">${t.likes}</span>
                  </li>
                  <li class="stat-titles-item">
                    <span class="stat-title">Views</span
                    ><span class="stat-value">${t.views}</span>
                  </li>
                  <li class="stat-titles-item">
                    <span class="stat-title">Comments</span
                    ><span class="stat-value">${t.comments}</span>
                  </li>
                  <li class="stat-titles-item">
                    <span class="stat-title">Downloads</span
                    ><span class="stat-value">${t.downloads}</span>
                  </li>
                </ul>
              </div>
    </li>`}i.insertAdjacentHTML("beforeend",s),new l(".images-list a",{captions:!0,captionsData:"alt",captionDelay:250}).refresh()}const u=document.querySelector("form");u.addEventListener("submit",a=>{a.preventDefault(),document.querySelector(".images-list").innerHTML="";const s=a.target.elements.query.value,r=document.querySelector(".load-paragraph");r.classList.remove("hidden"),c(s).then(e=>{r.classList.add("hidden"),e.hits.length?m(e):n.error({class:"error-alert",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"white",position:"topRight",maxWidth:432})}).catch(e=>console.log(e))});
//# sourceMappingURL=index.js.map
