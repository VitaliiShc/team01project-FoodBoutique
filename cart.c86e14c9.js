function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},a=n.parcelRequired7c6;null==a&&((a=function(e){if(e in r)return r[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){o[e]=t},n.parcelRequired7c6=a),a.register("kyEFX",(function(t,n){var r,o;e(t.exports,"register",(function(){return r}),(function(e){return r=e})),e(t.exports,"resolve",(function(){return o}),(function(e){return o=e}));var a={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)a[t[n]]=e[t[n]]},o=function(e){var t=a[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),a("kyEFX").register(JSON.parse('{"jqa3N":"cart.c86e14c9.js","6MAne":"basket.b33eb1ab.png","conrQ":"basket-2x.7099a48e.png","8OQ7p":"icons.7e50764c.svg"}'));const c={checkModalBtn:document.querySelector(".check-btn"),popupCart:document.querySelector(".popup-cart"),closeBtn:document.querySelector(".popup-cart-close-btn")};function s(){c.popupCart.classList.add("is-hidden"),window.removeEventListener("keydown",l)}function l(e){"Escape"===e.code&&s()}c.checkModalBtn.addEventListener("click",(e=>{e.preventDefault(),c.popupCart.classList.remove("is-hidden"),window.addEventListener("keydown",l)})),c.closeBtn.addEventListener("click",s),c.popupCart.addEventListener("click",(e=>{e.target===c.popupCart&&s()}));var i;i=new URL(a("kyEFX").resolve("6MAne"),import.meta.url).toString();var u;u=new URL(a("kyEFX").resolve("conrQ"),import.meta.url).toString();var d;d=new URL(a("kyEFX").resolve("8OQ7p"),import.meta.url).toString();const p=document.querySelector(".full-cart-container"),f=document.querySelector(".quantity-carts");console.log(f.textContent);const m=JSON.parse(localStorage.getItem("res.data"));console.log(m);const v=JSON.parse(localStorage.getItem("cart"));console.log("cart array",v);let g=0;!function(e){for(const t of e)g+=t.price;console.log("total price",g.toFixed(2))}(v);let y=g.toFixed(2);function b(e){0===e.length?(console.log("empty"),p.innerHTML=`\n    <picture>\n      <source srcset="${t(i)} 1x, ${t(u)} 2x" />\n      <img src="${t(i)}" alt="basket" class="basket-img" />\n    </picture>\n    <h3 class="basket-title">\n      Your basket is\n      <a href="./index.html" class="basket-title-link"> empty... </a>\n    </h3>\n    <p class="basket-text">\n      Go to the main page to select your favorite products and add them to the\n      cart.\n    </p>`):0!==e.length&&(console.log("no empty"),function(e){e.map((({category:e,img:n,name:r,price:o,size:a,_id:c})=>`<div class="yourcart-product-card" data-product-id=${c}>\n      <img class="yourcart-product-img" src=${n} alt=${r} />\n      <div class="yourcart-product-card-discription">\n        <div class="yourcart-product-card-info">\n          <p class="yourcart-product-name">${r}</p>\n          <div class="yourcart-product-features">\n            <p class="yourcart-product-category">Category: <span>${e}</span></p>\n            <p class="yourcart-product-size">Size: <span>${a}</span></p>\n          </div>\n          <p class="yourcart-product-price">${o}</p>\n        </div>\n        <p class="yourcart-product-price">${o}</p>\n      </div>\n      <button type="button" class="delete-btn" data-product-id="${c}">\n        <svg class="delete-icon">\n          <use href="${t(d)}#icon-remove"></use>\n        </svg>\n      </button>\n    </div>\n  </div>`)).join("");document.querySelectorAll(".delete-btn").forEach((e=>{e.addEventListener("click",(function(){h(this.getAttribute("data-product-id"))}))}));document.querySelector(".delete-all-btn").addEventListener("click",(function(){localStorage.setItem("cart","[]"),b([])}))}(e))}function h(e){const n=(JSON.parse(localStorage.getItem("cart"))||[]).filter((t=>t._id!==e));localStorage.setItem("cart",JSON.stringify(n)),b(n);const r=`            <div class="delete-all">\n                <p class="delete-all-text">Delete all</p>\n                <button type="button" class="delete-all-btn">\n                    <svg class="delete-all-icon">\n                        <use href="${t(d)}#icon-remove"></use>\n                    </svg>\n                </button>\n            </div><div class="js-basket">`+cartMarkup+`</div>    <div class="order">\n      <h2 class="order-title">Your Order</h2>\n      <div class="order-total">\n        <p class="order-total">Total</p>\n        <div class="order-sum">\n          <p class="order-text-sum">Sum:</p>\n          <span class="order-total-sum">${y}</span>\n        </div>\n      </div>\n      <form class="form-input">\n        <input\n          type="email"\n          name="user-email"\n          id="user-email"\n          class="mail-input"\n          placeholder="Enter your email"\n          pattern="[A-Za-z0-9._+-']+@[A-Za-z0-9.-]+.[A-Za-z]{2,}"\n          required\n        />\n        <button type="submit" class="form-btn">Checkout</button>\n      </form>\n    </div>`;p.innerHTML=r}b(v);
//# sourceMappingURL=cart.c86e14c9.js.map