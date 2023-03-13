"use strict";

const d = document;
const menu_button = d.querySelector(".ham-btn");
const menu_icon = d.querySelector(".menu-icon");
const close_icon = d.querySelector(".close-icon");
const menu_box = d.querySelector(".nav-menu-box");
const menu = d.querySelector(".nav-menu");
const cart = d.querySelector(".cart-icon");
const cart_information = d.querySelector(".cart-information-box");
const product_image_box = d.querySelector(".product-image-box");
const previous_button = d.querySelector(".previous-btn");
const next_button = d.querySelector(".next-btn");
let windowWidth = d.documentElement.clientWidth;
let productBoxWidth = product_image_box.scrollWidth;
let offsetValue = 0;
let displacementLimitValue = productBoxWidth - windowWidth;

console.info(menu_button);
console.info(menu_icon);
console.info(close_icon);
console.info(menu_box);
console.info(menu);
console.info(cart);
console.info(cart_information);
console.info(product_image_box);
console.warn(`El ancho del dispositivo es: ${windowWidth}`);
console.warn(
  "El ancho de la caja de imagenes del producto es: ",
  productBoxWidth
);
// console.warn("El límite de desplazamiento es: ", displacementLimitValue);

menu_button.addEventListener("click", () => {
  menu_box.classList.toggle("clicked");
  menu_icon.classList.toggle("clicked");
  close_icon.classList.toggle("clicked");
});

cart.addEventListener("click", () => {
  cart_information.classList.toggle("show");
});

next_button.addEventListener("click", () => {
  offsetValue += windowWidth;
  if (offsetValue <= displacementLimitValue) {
    product_image_box.style.transform = `translateX(-${offsetValue}px)`;
  } else {
    offsetValue = displacementLimitValue;
    console.info("ya pasaron todas las IMAGENES");
    console.info("valor de desplazamiento: ", offsetValue);
    return;
  }
  console.warn("BOTON NEXT, valor desplazamiento: ", offsetValue);
});

previous_button.addEventListener("click", () => {
  offsetValue -= windowWidth;
  if (offsetValue >= 0) {
    product_image_box.style.transform = `translateX(-${offsetValue}px)`;
  } else {
    offsetValue = 0;
    console.info("Ya volvió a la primera IMAGEN");
    console.info("valor de desplazamiento: ", offsetValue);
    return;
  }
  console.warn("BOTON PREVIOUS, valor desplazamiento: ", offsetValue);
});
