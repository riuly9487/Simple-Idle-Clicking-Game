import { playerAssets } from "./playerasset.js";
import { upgradelist } from "./upgradelist.js";

export function saveToStorage() {
  localStorage.setItem("playerassets", JSON.stringify(playerAssets));
  localStorage.setItem("upgradelist", JSON.stringify(upgradelist));
}

export function deleteFromStorage() {
  localStorage.removeItem('playerassets');
  localStorage.removeItem('upgradelist');
}

export function defaultPlayerAssets() {
  return {
    cash: 0,
  }
}

export function defaultUpgradeList() {
  return [{
    id: 1,
    images: 'icons/placeholder.png',
    level: 1,
    title: 'School',
    subtitle: 'You should study, not selling.',
    price: 5,
    basePrice: [2, 5],
    pricePerClick: 0.5
  }, {
    id: 2,
    images: 'icons/placeholder.png',
    level: 1,
    title: 'Whatsapp ordering',
    subtitle: `No assets, no store for you, do online.`,
    price: 50,
    basePrice: [20, 50],
    pricePerClick: 3
  }, {
    id: 3,
    images: 'icons/placeholder.png',
    level: 1,
    title: `Neightbourhood`,
    subtitle: 'Good way to promote business.',
    price: 1000,
    basePrice: [200, 1000],
    pricePerClick: 30
  }, {
    id: 4,
    images: 'icons/placeholder.png',
    level: 1,
    title: 'Non-license food stall',
    subtitle: 'Watch out of police, they want coffee.',
    price: 20000,
    basePrice: [5000, 20000],
    pricePerClick: 200
  }];
}