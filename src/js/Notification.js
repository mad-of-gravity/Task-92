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
    document.querySelector(".notifications").replaceChildren();
  }

  render({ price, type }) {
    const pizzaType = `type-${type}`;
    const isDanger = type === Notification.types.HAWAIIAN ? true : false;
    const isDangerClass = classNames({ "is-danger": isDanger });

    const template = `
<div class="notification type-${type} ${classNames({
      "is-danger": type === Notification.types.HAWAIIAN,
    })}">
  <button class="delete" onclick="document.querySelector('.notification').style.display = 'none'"></button>
  🍕 <span class="type">${type}</span> (<span class="price">${formatCurrency(
      price
    )}</span>) has been added to your order.
</div>
    `;

    this.container.innerHTML = template;
    this.empty();
    document.querySelector(".notifications").appendChild(this.container);
  }
}
