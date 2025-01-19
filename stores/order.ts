// stores/order.ts
import { defineStore } from "pinia";

interface OrderItem {
  id: number;
  image: string;
  name: string;
  detail: string;
  price: number;
  quantity: number;
}

interface OrderState {
  items: OrderItem[];
}

export const useOrderStore = defineStore("order", {
  state: (): OrderState => ({
    items: [],
  }),

  actions: {
    initializeStore() {
      const items = JSON.parse(localStorage.getItem("order.items") || "[]");
      this.items = items;
    },

    addItemToOrder(item: any) {
      const existingItem = this.items.find(
        (orderItem) => orderItem.id === item.id
      );

      if (existingItem) {
        existingItem.quantity++;
      } else {
        this.items.push({ ...item, quantity: 1 });
      }

      localStorage.setItem("order.items", JSON.stringify(this.items));
    },

    decrement(itemId: number) {
      const existingItem = this.items.find(
        (orderItem) => orderItem.id === itemId
      );

      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity--;
        } else {
          return this.removeItemToOrder(itemId);
        }
      }

      localStorage.setItem("order.items", JSON.stringify(this.items));
    },

    removeItemToOrder(itemId: number) {
      this.items = this.items.filter((item) => item.id !== itemId);
      localStorage.setItem("order.items", JSON.stringify(this.items));
    },

    getQuantity() {
      return this.items.reduce((total, item) => total + item.quantity, 0);
    },

    getTotal() {
      return this.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },
  },
});
