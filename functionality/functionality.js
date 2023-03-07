"use strict";

const d = document;
const menu_button = d.querySelector(".ham-btn");
const menu_icon = d.querySelector(".menu-icon");
const close_icon = d.querySelector(".close-icon");
const menu_box = d.querySelector(".nav-menu-box");
const menu = d.querySelector(".nav-menu");

console.info(menu_button);
console.info(menu_icon);
console.info(close_icon);
console.info(menu_box);
console.info(menu);

menu_button.addEventListener("click", () => {
  menu_box.classList.toggle("clicked");
  menu_icon.classList.toggle("clicked");
  close_icon.classList.toggle("clicked");
});
