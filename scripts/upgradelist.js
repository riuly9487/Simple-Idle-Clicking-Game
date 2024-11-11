import { defaultUpgradeList } from "./storage.js";

export let upgradelist = JSON.parse(localStorage.getItem('upgradelist')) || defaultUpgradeList();

export function selectedUpgrade(value) {

  upgradelist.forEach((list) => {
    if (list.id === Number(value)) {
      list.level++;
      list.price = list.basePrice[0] * list.level + list.basePrice[1]; 
    }
  })
}