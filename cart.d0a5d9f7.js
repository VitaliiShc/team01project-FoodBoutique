!function(){function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},a=n.parcelRequired7c6;null==a&&((a=function(e){if(e in r)return r[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){o[e]=t},n.parcelRequired7c6=a),a.register("iE7OH",(function(t,n){var r,o;e(t.exports,"register",(function(){return r}),(function(e){return r=e})),e(t.exports,"resolve",(function(){return o}),(function(e){return o=e}));var a={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)a[t[n]]=e[t[n]]},o=function(e){var t=a[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),a.register("aNJCr",(function(t,n){var r;e(t.exports,"getBundleURL",(function(){return r}),(function(e){return r=e}));var o={};function a(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}r=function(e){var t=o[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return a(e[2])}return"/"}(),o[e]=t),t}})),a("iE7OH").register(JSON.parse('{"27OeO":"cart.d0a5d9f7.js","bdzKr":"basket.b33eb1ab.png","kgHWO":"basket-2x.7099a48e.png","410VS":"icons.7e50764c.svg"}'));var c={checkModalBtn:document.querySelector(".check-btn"),popupCart:document.querySelector(".popup-cart"),closeBtn:document.querySelector(".popup-cart-close-btn")};function s(){c.popupCart.classList.add("is-hidden"),window.removeEventListener("keydown",i)}function i(e){"Escape"===e.code&&s()}c.checkModalBtn.addEventListener("click",(function(e){e.preventDefault(),c.popupCart.classList.remove("is-hidden"),window.addEventListener("keydown",i)})),c.closeBtn.addEventListener("click",s),c.popupCart.addEventListener("click",(function(e){e.target===c.popupCart&&s()}));var l;l=a("aNJCr").getBundleURL("27OeO")+a("iE7OH").resolve("bdzKr");var u;u=a("aNJCr").getBundleURL("27OeO")+a("iE7OH").resolve("kgHWO");var d;d=a("aNJCr").getBundleURL("27OeO")+a("iE7OH").resolve("410VS");var p=document.querySelector(".full-cart-container"),v=document.querySelector(".quantity-carts");console.log(v.textContent);var f=JSON.parse(localStorage.getItem("res.data"));console.log(f);var m=JSON.parse(localStorage.getItem("cart"));console.log("cart array",m);var g=0;!function(e){var t=!0,n=!1,r=void 0;try{for(var o,a=e[Symbol.iterator]();!(t=(o=a.next()).done);t=!0){var c=o.value;g+=c.price}}catch(e){n=!0,r=e}finally{try{t||null==a.return||a.return()}finally{if(n)throw r}}console.log("total price",g.toFixed(2))}(m);var y,b,h,O=g.toFixed(2);0===(y=m).length?(console.log("empty"),p.innerHTML='\n    <picture>\n      <source srcset="'.concat(t(l)," 1x, ").concat(t(u),' 2x" />\n      <img src="').concat(t(l),'" alt="basket" class="basket-img" />\n    </picture>\n    <h3 class="basket-title">\n      Your basket is\n      <a href="./index.html" class="basket-title-link"> empty... </a>\n    </h3>\n    <p class="basket-text">\n      Go to the main page to select your favorite products and add them to the\n      cart.\n    </p>')):0!==y.length&&(console.log("no empty"),b=y.map((function(e){var n=e.category,r=e.img,o=(e.is10PercentOff,e.name),a=(e.popularity,e.price),c=e.size,s=e._id;return'<div class="yourcart-product-card" data-product-id='.concat(s,'>\n      <img class="yourcart-product-img" src=').concat(r," alt=").concat(o,' />\n      <div class="yourcart-product-card-discription">\n        <div class="yourcart-product-card-info">\n          <p class="yourcart-product-name">').concat(o,'</p>\n          <div class="yourcart-product-features">\n            <p class="yourcart-product-category">Category: <span>').concat(n,'</span></p>\n            <p class="yourcart-product-size">Size: <span>').concat(c,'</span></p>\n          </div>\n          <p class="yourcart-product-price">').concat(a,'</p>\n        </div>\n        <button type="button" class="delete-btn"><svg class="delete-icon"><use href="').concat(t(d),'#icon-remove"></use>/svg></button>\n        \x3c!-- <div class="yourcart-product-card-controls">\n            <div class="yourcart-product-remove-btn"></div>\n            <div class="counter"></div>\n        </div> --\x3e\n      </div>\n    </div>')})).join(""),h='            <div class="delete-all">\n                <p class="delete-all-text">Delete all</p>\n                <button type="button" class="delete-all-btn">\n                    <svg class="delete-all-icon">\n                        <use href="'.concat(t(d),'#icon-remove"></use>\n                    </svg>\n                </button>\n            </div><div class="js-basket">')+b+'</div>    <div class="order">\n      <h2 class="order-title">Your Order</h2>\n      <div class="order-total">\n        <p class="order-total">Total</p>\n        <div class="order-sum">\n          <p class="order-text-sum">Sum:</p>\n          <span class="order-total-sum">'.concat(O,'</span>\n        </div>\n      </div>\n      <form class="form-input">\n        <input\n          type="email"\n          name="user-email"\n          id="user-email"\n          class="mail-input"\n          placeholder="Enter your email"\n          pattern="[A-Za-z0-9._+-\']+@[A-Za-z0-9.-]+.[A-Za-z]{2,}"\n          required\n        />\n        <button type="submit" class="form-btn">Checkout</button>\n      </form>\n    </div>'),p.innerHTML=h)}();
//# sourceMappingURL=cart.d0a5d9f7.js.map
