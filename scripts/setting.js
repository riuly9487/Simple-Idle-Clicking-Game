import { deleteFromStorage } from "./storage.js";

document.querySelector('#delete')
  .addEventListener('click', () => {
    deleteFromStorage();
    alert('Game reseted');
  })