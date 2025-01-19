<template>
  <div>
    <div class="grid grid-cols-12 gap-2 mx-4">
      <!-- Sidebar -->
      <div class="w-full h-full border shadow-md rounded-xl col-span-3">
        <form>
          <p class="text-md text-gray-800 font-bold ps-4 mt-14">
            Product Category
          </p>
          <ul class="pt-2 ps-7 space-y-1">
            <li v-for="(category, index) in categories" :key="index">
              <input
                type="checkbox"
                class="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 hover:cursor-pointer focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none :bg-neutral-800"
                :id="index + `-hs-default-checkbox`"
                dark
                name="category[]"
                :value="category"
              />
              <label
                :for="index + `-hs-default-checkbox`"
                class="text-md text-gray-600 ms-3 hover:cursor-pointer"
                >{{ category }}</label
              >
            </li>
          </ul>

          <div class="flex items-center justify-center mt-6">
            <Button type="submit">Filter</Button>
          </div>
        </form>
      </div>

      <!-- Products -->
      <div class="w-full h-full col-span-9">
        <div
          class="w-full h-full grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8"
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
import Card from "~/components/card/card.vue";
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
