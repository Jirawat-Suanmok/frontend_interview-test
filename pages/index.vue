<template>
  <div>
    <!-- <h1>Home Page</h1> -->

    <div
      class="w-full h-full grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8 px-6"
    >
      <Card v-for="product in products" :key="product.id" :item="product" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Card from "~/components/card.vue";

const { $axios } = useNuxtApp();
const products = ref();

onMounted(async () => {
  try {
    const response = await $axios.get("/items");
    if (response?.data?.code === 200) {
      products.value = response.data.data;
    } else {
      console.error("API response not successful:", response);
    }
  } catch (error) {
    console.error("Error fetching products:", error);
  }
});
</script>
