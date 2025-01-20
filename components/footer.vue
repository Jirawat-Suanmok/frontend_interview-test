<template>
  <div
    class="w-full h-auto flex flex-col items-center justify-center bg-slate-800 text-white"
  >
    <div class="w-full grid grid-cols-12 gap-2 py-12 px-4">
      <div class="col-span-4">
        <a
          class="flex-none text-xl font-semibold text-white focus:outline-none focus:opacity-80"
          href="/"
          >Brand</a
        >
      </div>

      <div class="col-span-4">
        <p class="text-md mb-2">Product Category</p>

        <p
          v-for="(category, index) in categories"
          :key="index"
          class="ps-7 space-y-1"
        >
          {{ category }}
        </p>
      </div>

      <div class="col-span-4">
        <p class="text-md mb-2">Contact Us</p>

        <div class="flex items-center justify-start gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
            />
          </svg>

          <a href="mailto:jirawatsuanmok@gmail.com">jirawatsuanmok@gmail.com</a>
        </div>

        <div class="flex items-center justify-start gap-2 mt-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
            />
          </svg>

          <a href="http://localhost:3000">www.interview-test.com</a>
        </div>

        <div class="flex items-center justify-start gap-2 mt-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
            />
          </svg>

          <a href="https://maps.app.goo.gl/565nzTwr78zR3BgG8" target="_blank"
            >81/3 ซอย สุขุมวิท 85 บางจาก เขตพระโขนง กรุงเทพมหานคร 10260</a
          >
        </div>
      </div>
    </div>

    <div class="text-center">
      2025 Interview Test | Design and coding by Tae Ji.
    </div>
  </div>
</template>

<script setup lang="ts">
const { $axios } = useNuxtApp();

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
      console.log("categories ==>", categories.value);
    } else {
      console.error("API response not successful:", response);
    }
  } catch (error) {
    console.error("Error fetching products:", error);
  }
});
</script>
