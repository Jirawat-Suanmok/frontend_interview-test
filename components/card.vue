<template>
  <div
    class="flex flex-col bg-white border shadow-md rounded-xl hover:cursor-pointer hover:scale-105 duration-500 ease-in-out"
  >
    <div class="aspect-[4/3] overflow-hidden">
      <!-- Image -->
      <img
        class="w-full h-full rounded-t-xl"
        src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=80"
        alt="Product Image"
      />
    </div>

    <div class="p-4 md:p-5">
      <!-- Title -->
      <h3 class="text-lg font-bold text-gray-800 line-clamp-2">Card title</h3>
      <!-- Detail -->
      <p class="mt-1 text-gray-500 line-clamp-3">
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </p>
      <!-- Price -->
      <p class="mt-1 text-gray-500">$199</p>
    </div>
  </div>
</template>

<script setup lang="ts">
//
</script>
