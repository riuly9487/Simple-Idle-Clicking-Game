import { upgradelist, selectedUpgrade } from "./upgradelist.js";
import { generateSidebarHTML } from './sidebar.js';
import { saveToStorage, defaultPlayerAssets } from "./storage.js";

export let playerAssets = JSON.parse(localStorage.getItem('playerassets')) || defaultPlayerAssets();

export function earnPerClick() {
  let total = 1;

  upgradelist.forEach((list) => {
    total += list.pricePerClick * (list.level - 1);
  })

  playerAssets.cash += total;
  saveToStorage();
  renderPlayerAssets(total);
}

export function renderPlayerAssets() {
  document.querySelector('.player-assets').innerHTML = `Owned: RM${playerAssets.cash}`;
}

export function expensesUpgrade(value) {
  upgradelist.forEach((list) => {
    if (list.id === Number(value)) {
      if (playerAssets.cash >= list.price) {
        playerAssets.cash -= list.price;
        selectedUpgrade(value);
        renderPlayerAssets();
        saveToStorage();
        generateSidebarHTML();
      }
    }
  })
}