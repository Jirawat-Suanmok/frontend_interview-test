// stores/order.ts
import { defineStore } from "pinia";

interface OrderItem {
  id: string;
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
    addItemToOrder(item: any) {
      const existingItem = this.items.find(
        (orderItem) => orderItem.id === item.id
      );

      if (existingItem) {
        existingItem.quantity++;
      } else {
        this.items.push({ ...item, quantity: 1 });
      }

      console.log(this.items);
    },

    decrement(item: any) {
      const existingItem = this.items.find(
        (orderItem) => orderItem.id === item.id
      );

      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity--;
        } else {
          this.items = this.items.filter(
            (orderItem) => orderItem.id !== item.id
          );
        }
      }
    },

    removeItemToOrder(itemId: string) {
      this.items = this.items.filter((item) => item.id !== itemId);
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
