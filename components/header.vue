<template>
  <header
    class="flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-gray-800 text-sm py-3"
  >
    <nav
      class="max-w-7xl w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between"
    >
      <div class="flex items-center justify-between">
        <a
          class="flex-none text-xl font-semibold text-white focus:outline-none focus:opacity-80"
          href="/"
          >Brand</a
        >

        <div class="sm:hidden">
          <button
            type="button"
            class="hs-collapse-toggle relative size-7 flex justify-center items-center gap-2 rounded-lg border border-gray-700 font-medium bg-gray-800 text-gray-400 shadow-sm align-middle hover:bg-gray-700/20 focus:outline-none focus:bg-gray-700/20 text-sm"
            id="hs-navbar-dark-collapse"
            aria-expanded="false"
            aria-controls="hs-navbar-dark"
            aria-label="Toggle navigation"
            data-hs-collapse="#hs-navbar-dark"
          >
            <svg
              class="hs-collapse-open:hidden shrink-0 size-4"
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
              <line x1="3" x2="21" y1="6" y2="6" />
              <line x1="3" x2="21" y1="12" y2="12" />
              <line x1="3" x2="21" y1="18" y2="18" />
            </svg>
            <svg
              class="hs-collapse-open:block hidden shrink-0 size-4"
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
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
            <span class="sr-only">Toggle</span>
          </button>
        </div>
      </div>

      <div
        id="hs-navbar-dark"
        class="hidden hs-collapse overflow-hidden transition-all duration-300 basis-full grow sm:block"
        aria-labelledby="hs-navbar-dark-collapse"
      >
        <div
          class="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5"
        >
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6 stroke-white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </button>

          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6 stroke-white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
          </button>

          <button
            class="relative"
            aria-haspopup="dialog"
            aria-expanded="false"
            aria-controls="hs-scale-animation-modal"
            data-hs-overlay="#hs-scale-animation-modal"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6 stroke-white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>

            <div
              class="bg-red-600 text-white rounded-full w-5 h-5 absolute bottom-[14px] left-4"
              v-if="orderStore.items.length > 0"
            >
              {{ orderStore.items.length }}
            </div>
          </button>

          <Button>Login</Button>
        </div>
      </div>
    </nav>
  </header>

  <Modal></Modal>
</template>

<script setup lang="ts">
import { useOrderStore } from "~/stores/order";

const orderStore = useOrderStore();
</script>
