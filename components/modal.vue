<template>
  <div
    id="hs-scale-animation-modal"
    class="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none"
    role="dialog"
    tabindex="-1"
    aria-labelledby="hs-scale-animation-modal-label"
  >
    <div
      class="hs-overlay-animation-target hs-overlay-open:scale-100 hs-overlay-open:opacity-100 scale-95 opacity-0 ease-in-out transition-all duration-200 sm:max-w-lg sm:w-full m-3 sm:mx-auto min-h-[calc(100%-3.5rem)] flex items-center"
    >
      <div
        class="w-full flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto"
      >
        <!-- Header -->
        <div class="flex justify-between items-center py-3 px-4">
          <h3
            id="hs-scale-animation-modal-label"
            class="font-bold text-gray-800"
          >
            You have {{ orderStore.items.length }} items in your cart
          </h3>

          <button
            type="button"
            class="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none"
            aria-label="Close"
            data-hs-overlay="#hs-scale-animation-modal"
          >
            <span class="sr-only">Close</span>
            <svg
              class="shrink-0 size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          </button>
        </div>

        <!-- Content -->
        <div class="p-4 max-h-[480px] overflow-y-auto">
          <CardCart v-for="order in orderStore.items" :item="order" />
        </div>

        <!-- Footer -->
        <div class="flex flex-col items-end justify-center gap-y-2 py-3 px-4">
          <div class="font-bold text-gray-800">
            Total:
            <span class="text-blue-600 ml-2">{{ formattedTotal }}</span>
          </div>

          <div class="flex justify-end items-center gap-x-2">
            <button
              type="button"
              class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
              data-hs-overlay="#hs-scale-animation-modal"
            >
              Close
            </button>
            <button
              type="button"
              class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
            >
              Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CardCart from "./card/cardCart.vue";

import { useOrderStore } from "~/stores/order";

const orderStore = useOrderStore();

const formattedTotal = computed(() => {
  return new Intl.NumberFormat("th", {
    style: "currency",
    currency: "THB",
  }).format(orderStore.getTotal());
});
</script>
