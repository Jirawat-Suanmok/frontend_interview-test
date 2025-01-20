<template>
  <nav
    class="mt-4 flex items-center justify-between mx-4"
    aria-label="Pagination"
  >
    <!-- Results Pre Page -->
    <div class="flex items-center gap-x-2">
      <span class="text-sm text-gray-800 whitespace-nowrap">
        Results Pre Page
      </span>
      <input
        type="number"
        class="min-h-[32px] py-1 px-2.5 block w-12 border border-gray-400 rounded-lg text-sm text-center focus:border-blue-500 focus:ring-blue-500 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none disabled:opacity-50 disabled:pointer-events-none"
        :value="items"
      />
    </div>

    <div class="flex items-center justify-end gap-x-1">
      <!-- BTN Previous -->
      <button
        type="button"
        class="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm rounded-lg border border-transparent text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
        aria-label="Previous"
        :disabled="current === 1"
      >
        <svg
          class="shrink-0 size-3.5"
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
          <path d="m15 18-6-6 6-6"></path>
        </svg>
        <span class="sr-only">Previous</span>
      </button>

      <!-- Page -->
      <div class="flex items-center gap-x-1">
        <button
          v-for="(page, index) in total"
          :key="index"
          type="button"
          class="min-h-[38px] min-w-[38px] flex justify-center items-center border border-gray-200 text-gray-800 py-2 px-3 text-sm rounded-lg focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
          aria-current="page"
          :class="{
            'bg-blue-600 text-white pointer-events-none': current === page,
          }"
        >
          {{ page }}
        </button>
      </div>

      <!-- BTN Next -->
      <button
        type="button"
        class="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm rounded-lg border border-transparent text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
        aria-label="Next"
        :disabled="current === total"
      >
        <span class="sr-only">Next</span>
        <svg
          class="shrink-0 size-3.5"
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
          <path d="m9 18 6-6-6-6"></path>
        </svg>
      </button>
    </div>
  </nav>
</template>

<script setup lang="ts">
defineProps({
  current: {
    type: Number,
    required: true,
  },
  items: {
    type: Number,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
});
</script>
