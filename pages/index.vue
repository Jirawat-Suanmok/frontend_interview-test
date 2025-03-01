<template>
  <div>
    <div class="grid grid-cols-12 gap-2 mx-4">
      <!-- Sidebar -->
      <div
        class="w-full h-full border shadow-md rounded-xl col-span-5 sm:col-span-3"
      >
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
                :checked="categoryParam.includes(category)"
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
      <div class="w-full h-full col-span-7 sm:col-span-9">
        <p class="text-md text-gray-800 mb-4">result: {{ totalItems }}</p>

        <div
          class="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8"
        >
          <Card v-for="product in products" :key="product.id" :item="product" />
        </div>
      </div>
    </div>

    <Pagination
      :current="currentPage"
      :total="totalPages"
      :items="itemsPerPage"
      @customEvent="changePage"
      @customItemPerPage="changeItemPerPage"
    />
  </div>
</template>

<script setup lang="ts">
import Button from "~/components/button.vue";
import Card from "~/components/card/card.vue";
import Pagination from "~/components/pagination.vue";

import { useRoute } from "vue-router";

import { useOrderStore } from "~/stores/order";

const orderStore = useOrderStore();

const { $axios } = useNuxtApp();

const categoryParam = ref([] as any[]);

const route = useRoute();

const products = ref();
const categories = ref();

const currentPage = ref<number>(1);
const itemsPerPage = ref<number>(12);
const totalItems = ref<number>(0);
const totalPages = computed(() => {
  const items = itemsPerPage.value || 1;
  return Math.ceil(totalItems.value / items);
});

onMounted(async () => {
  orderStore.initializeStore();

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
      console.log("categories ==>", categories.value);

      categoryParam.value = Array.isArray(route.query["category[]"])
        ? route.query["category[]"]
        : route.query["category[]"]
        ? [route.query["category[]"]]
        : [];
      console.log("categoryParam ==>", categoryParam);

      if (categoryParam.value && categoryParam.value.length > 0) {
        products.value = response.data.data.filter((item: any) =>
          categoryParam.value.includes(item.category)
        );

        (totalItems.value = products.value.length),
          console.log("totalItems ==>", totalItems.value);
        console.log("totalPages ==>", totalPages.value);
      } else {
        products.value = response.data.data;

        (totalItems.value = products.value.length),
          console.log("totalItems ==>", totalItems.value);
        console.log("totalPages ==>", totalPages.value);
      }
    } else {
      console.error("API response not successful:", response);
    }
  } catch (error) {
    console.error("Error fetching products:", error);
  }
});

function changePage(pageNumber: any) {
  currentPage.value = pageNumber;

  console.log(currentPage.value);
}

function changeItemPerPage(resultPerPage: any) {
  itemsPerPage.value = resultPerPage;

  console.log("changeItemPerPage", itemsPerPage.value);
}
</script>
