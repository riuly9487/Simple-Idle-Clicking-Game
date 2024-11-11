import { earnPerClick } from "./playerasset.js";

document.querySelector('.idle-clicking')
  .addEventListener('click', () => {
    earnPerClick();
  })