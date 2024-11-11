import { expensesUpgrade } from "./playerasset.js";
import { upgradelist, selectedUpgrade } from "./upgradelist.js";

export function generateSidebarHTML() {
  let html = '';

  upgradelist.forEach((list) => {
    let rev = 'Pending unlock...';
    if (list.level > 1) {
      rev = `+ RM${list.pricePerClick * list.level} per click`;
    }

    const generateHTML = `
      <div class="upgrade">

        <div class="upgrade-images-container">
          <img src=${list.images} width="48px">
          Lvl: ${list.level}
        </div>

        <div class="upgrade-description">
          <div class="upgrade-title">
            ${list.title}
          </div>
          <div class="upgrade-subtitle">
            ${list.subtitle}
          </div>
          <div class="upgrade-revenue">
            ${rev}
          </div>
        </div>

        <div class="upgrade-buy">
          <div>
            RM${list.price}
          </div>
          <button class="js-buy-button" data-buy-button=${list.id}>
            Buy
          </button>
        </div>

      </div>
    `;
    html += generateHTML;
  })
  document.querySelector('.upgrade-sidebar').innerHTML = html;

  document.querySelectorAll('.js-buy-button').forEach((Button) => {
    Button.addEventListener('click', () => {
      const data = Button.dataset.buyButton;
      expensesUpgrade(data)
    })
  })
  
}
