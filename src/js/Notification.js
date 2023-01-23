import { formatCurrency } from "./utils";
import classNames from "classnames";

export default class Notification {
  static get types() {
    return {
      PEPPERONI: "pepperoni",
      MARGHERITA: "margherita",
      HAWAIIAN: "hawaiian",
    };
  }

  constructor() {
    this.container = document.createElement("div");
    this.container.classList.add("notification-container");
  }

  empty() {
    document.querySelector(".notifications").replaceChildren(this.container);
  }

  render({ price, type }) {
    const template = `
<div class="notification type-${type} ${classNames({
      "is-danger": type === Notification.types.HAWAIIAN,
    })}">
  <button class="delete" onclick="document.querySelector('.notifications').replaceChildren()"></button>
  🍕 <span class="type">${type}</span> (<span class="price">${formatCurrency(
      price
    )}</span>) has been added to your order.
</div>
    `;

    this.container.innerHTML = template;
    this.empty();
  }
}
