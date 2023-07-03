<template>
  <div class="bg-gray-50 py-6">
    <div class="xl:container mx-auto px-3 sm:px-4 xl:px-2">
      <div class="flex flex-row flex-wrap">
        <!-- Left -->
        <div class="flex-shrink max-w-full w-full lg:w-2/3 overflow-hidden">
          <div class="w-full py-3">
            <h2 class="text-gray-800 text-2xl font-bold">
              <span
                class="inline-block h-5 border-l-2 border-red-600 mr-2"
              ></span
              >Nigeria
            </h2>
          </div>
          <div class="flex flex-row flex-wrap -mx-2">
            <articleBanner />

            <articleCard />
          </div>
        </div>

        <!-- RIGHT ARTICLE COMPONENT -->
        <div
          class="flex-shrink max-w-full w-full lg:w-1/3 lg:pl-8 lg:pt-14 lg:pb-8 order-first lg:order-last"
        >
          <!-- BULLET POINTS -->
          <div class="w-full bg-gray-100">
            <div class="mb-6">
              <div class="p-4 rounded-l bg-gray-300">
                <h2 class="text-lg font-bold">Most Popular</h2>
              </div>

              <!-- NEWS LIST  -->
              <articleSideBar />
            </div>
          </div>

          <!-- ADVERTISEMENT COMPONENT  -->
          <div class="text-sm py-6 sticky">
            <div class="w-full text-center">
              <a class="uppercase" href="#">Advertisement</a>
              <a href="#">
                <img
                  class="mx-auto"
                  src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                  alt="advertisement area"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped></style>
