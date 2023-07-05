<template>
  <div class="container mx-auto flex flex-wrap py-6">
    <!-- Posts Section -->
    <section class="w-full md:w-2/3 flex flex-col items-center px-3">
      <!-- SELECTED ARTICLE  -->
      <!-- <selectedContent :product="product" /> -->

      <!-- Pagination -->
      <div class="flex items-center py-8">
        <a
          href="#"
          class="h-10 w-10 bg-black hover:bg-black font-semibold text-white text-sm flex items-center justify-center"
          >1</a
        >
        <a
          href="#"
          class="h-10 w-10 font-semibold text-gray-800 hover:bg-black hover:text-white text-sm flex items-center justify-center"
          >2</a
        >
        <a
          href="#"
          class="h-10 w-10 font-semibold text-gray-800 hover:text-gray-900 text-sm flex items-center justify-center ml-3"
          >Next <i class="fas fa-arrow-right ml-2"></i
        ></a>
      </div>
    </section>

    <!-- Sidebar Section -->
    <aside class="w-full md:w-1/3 flex flex-col items-center px-3">
      <!-- ABOUT US COMPONENT  -->
      <div class="w-full bg-white shadow flex flex-col my-4 p-6">
        <p class="text-xl font-semibold pb-5">About Us</p>
        <p class="pb-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          mattis est eu odio sagittis tristique. Vestibulum ut finibus leo. In
          hac habitasse platea dictumst.
        </p>
        <a
          href="#"
          class="w-full bg-black text-white font-bold text-sm uppercase rounded hover:bg-black flex items-center justify-center px-2 py-3 mt-4"
        >
          Get to know us
        </a>
      </div>

      <!-- INSTAGRAM COMPONENT  -->
      <instagramComponent />
    </aside>
  </div>
</template>

<script setup>
const { product } = defineProps(["product"]);
</script>

<style scoped></style>
