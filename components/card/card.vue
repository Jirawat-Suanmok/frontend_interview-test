<template>
  <div
    class="flex flex-col bg-white border shadow-md rounded-xl hover:cursor-default hover:scale-105 hover:shadow-lg duration-500 ease-in-out"
  >
    <div class="aspect-[4/3] overflow-hidden relative">
      <!-- Image -->
      <img
        class="w-full h-full rounded-t-xl"
        :src="item.photolink"
        alt="Product Image"
      />
      <!-- Tag -->
      <div
        class="bg-gray-800/60 text-white text-sm font-medium px-2 py-0.5 absolute top-4 left-4 rounded-md"
      >
        {{ item.category }}
      </div>
    </div>

    <div class="p-4 md:p-5">
      <!-- Title -->
      <h3 class="text-lg font-bold text-gray-800 line-clamp-1">
        {{ item.bookname }}
      </h3>
      <!-- Detail -->
      <p class="mt-1 text-gray-500 line-clamp-2">
        {{ item.detail }}
      </p>
      <div class="mt-2 flex items-start justify-between">
        <!-- Price -->
        <p class="font-bold text-gray-800">{{ item.price }} THB</p>
        <!-- Button -->
        <Button @click="order.addItemToOrder(item)"> Add to Cart</Button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from "../button.vue";

import { useOrderStore } from "~/stores/order";

defineProps({
  item: {
    type: Object,
    required: true,
  },
});

const order = useOrderStore();
</script>
