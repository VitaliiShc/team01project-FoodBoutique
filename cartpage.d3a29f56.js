function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},a={},o=n.parcelRequired7c6;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in a){var t=a[e];delete a[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){a[e]=t},n.parcelRequired7c6=o),o.register("kyEFX",(function(t,n){var r,a;e(t.exports,"register",(function(){return r}),(function(e){return r=e})),e(t.exports,"resolve",(function(){return a}),(function(e){return a=e}));var o={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)o[t[n]]=e[t[n]]},a=function(e){var t=o[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),o("kyEFX").register(JSON.parse('{"feDGP":"cartpage.d3a29f56.js","6MAne":"basket.b33eb1ab.png","conrQ":"basket-2x.7099a48e.png","8OQ7p":"icons.7e50764c.svg"}'));const s={checkModalBtn:document.querySelector(".check-btn"),popupCart:document.querySelector(".popup-cart"),closeBtn:document.querySelector(".popup-cart-close-btn")};function c(){s.popupCart.classList.add("is-hidden"),window.removeEventListener("keydown",i)}function i(e){"Escape"===e.code&&c()}s.checkModalBtn.addEventListener("click",(e=>{e.preventDefault(),s.popupCart.classList.remove("is-hidden"),window.addEventListener("keydown",i)})),s.closeBtn.addEventListener("click",c),s.popupCart.addEventListener("click",(e=>{e.target===s.popupCart&&c()}));var l;l=new URL(o("kyEFX").resolve("6MAne"),import.meta.url).toString();var d;d=new URL(o("kyEFX").resolve("conrQ"),import.meta.url).toString();const u=`\n    <picture>\n      <source srcset="${t(l)} 1x, ${t(d)} 2x" />\n      <img src="${t(l)}" alt="basket" class="basket-img" />\n    </picture>\n    <h3 class="basket-title">\n      Your basket is <a href="./index.html" class="basket-title-link">empty...</a>\n    </h3>\n    <p class="basket-text">\n      Go to the main page to select your favorite products and add them to the\n      cart.\n    </p>`;var p;p=new URL(o("kyEFX").resolve("8OQ7p"),import.meta.url).toString();const v=document.querySelector(".js-basket");function m(e){var n;0===e.length?v.innerHTML=u:(v.innerHTML=(n=e,`<div class="delete-all">\n        <p class="delete-all-text">Delete all</p>\n            <button type="button" class="delete-all-btn">\n                <svg class="delete-all-icon">\n                    <use href="${t(p)}#icon-remove"></use>\n                </svg>\n            </button>\n    </div>\n    <ul class="your-cart-list">`+n.map((({category:e,img:n,name:r,price:a,size:o,_id:s})=>`<li class="cart-product-card" data-product-id=${s}>\n            <img class="cart-product-img" src=${n} alt=${r} />\n            <div class="cart-product-card-discription">\n                <div class="cart-product-card-info">\n                    <p class="cart-product-name">${r}</p>\n                    <div class="cart-product-features">\n                        <p class="cart-product-category">Category: <span>${e}</span></p>\n                        <p class="cart-product-size">Size: <span>${o}</span></p>\n                    </div>\n                    <p class="cart-product-price">${a}</p>\n                </div>\n                <div class="cart-product-card-controls">\n                    <button class="remove-cart-item-btn" data-productid=${s} type="button"><svg class="remove-cart-item-icon"><use href="${t(p)}#icon-remove"></use>/svg></button>\n                    \x3c!-- <div class="counter"></div> --\x3e\n                </div>\n            </div>\n        </li>`)).join("")+`</ul>\n    <div class="order">\n        <h2 class="order-title">Your Order</h2>\n        <div class="order-total">\n            <p class="order-total">Total</p>\n            <div class="order-sum">\n                <p class="order-total-sum">\n                    <span class="order-text-sum">Sum: </span>&#36;${function(e){let t=0;for(const n of e)t+=n.price;return t.toFixed(2)}(n)}</p>\n            </div>\n        </div>\n        <form class="form-input">\n            <input type="email" name="user-email" id="user-email" class="mail-input" placeholder="Enter your email" pattern="[A-Za-z0-9._+-']+@[A-Za-z0-9.-]+.[A-Za-z]{2,}" required/>\n            <button type="submit" class="form-btn">Checkout</button>\n        </form>\n    </div>`),document.querySelector(".delete-all-btn").addEventListener("click",(()=>{localStorage.setItem("cart","[]"),m([])})))}m(JSON.parse(localStorage.getItem("cart")));
//# sourceMappingURL=cartpage.d3a29f56.js.map
