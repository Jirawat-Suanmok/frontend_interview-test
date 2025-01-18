<template>
  <div>
    <div class="grid grid-cols-12">
      <div class="bg-red-100 w-full h-full col-span-3">
        <form>
          <div
            v-for="(category, index) in categories"
            :key="index"
            class="flex"
          >
            <input
              type="checkbox"
              class="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
              :id="index + `-hs-default-checkbox`"
              name="category[]"
              :value="category"
            />
            <label
              :for="index + `-hs-default-checkbox`"
              class="text-sm text-gray-500 ms-3 dark:text-neutral-400"
              >{{ category }}</label
            >
          </div>

          <Button type="submit">Filter</Button>
        </form>
      </div>

      <div class="w-full h-full col-span-9">
        <div
          class="w-full h-full grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8 px-6"
        >
          <Card v-for="product in products" :key="product.id" :item="product" />
        </div>
      </div>
    </div>
    <Pagination />
  </div>
</template>

<script setup lang="ts">
import Button from "~/components/button.vue";
import Card from "~/components/card.vue";
import Pagination from "~/components/pagination.vue";

import { useRoute } from "vue-router";

const { $axios } = useNuxtApp();

const route = useRoute();

const products = ref();
const categories = ref();

onMounted(async () => {
  try {
    const response = await $axios.get("/items");
    if (response?.data?.code === 200) {
      const dataCategories = response.data.data.map(
        (item: any) => item.category
      );
      const unique = dataCategories.filter(
        (value: any, index: any, array: any) => array.indexOf(value) === index
      );
      categories.value = unique;
      console.log(categories.value);

      const categoryParam = route.query["category[]"] || "";
      console.log(categoryParam);

      if (categoryParam && categoryParam.length > 0) {
        products.value = response.data.data.filter((item: any) =>
          categoryParam.includes(item.category)
        );
      } else {
        products.value = response.data.data;
      }
    } else {
      console.error("API response not successful:", response);
    }
  } catch (error) {
    console.error("Error fetching products:", error);
  }
});
</script>
