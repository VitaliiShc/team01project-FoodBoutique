const e={checkModalBtn:document.querySelector(".check-btn"),popupCart:document.querySelector(".popup-cart"),closeBtn:document.querySelector(".popup-cart-close-btn")};function t(){e.popupCart.classList.add("is-hidden"),window.removeEventListener("keydown",n)}function n(e){"Escape"===e.code&&t()}e.checkModalBtn.addEventListener("click",(t=>{t.preventDefault(),e.popupCart.classList.remove("is-hidden"),window.addEventListener("keydown",n)})),e.closeBtn.addEventListener("click",t),e.popupCart.addEventListener("click",(n=>{n.target===e.popupCart&&t()}));
//# sourceMappingURL=cart.2d04fed0.js.map
