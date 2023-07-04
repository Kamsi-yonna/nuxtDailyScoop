<!-- HERO BANNER  -->
<template>
  <v-card
    v-for="(product, i) in products"
    :key="i"
    class="flex-shrink max-w-full w-full lg:w-1/2 pr-2"
  >
    <div class="relative hover-img max-h-96 overflow-hidden">
      <a href="#">
        <v-img
          class="max-w-full w-full mx-auto h-full"
          :src="product.image"
          alt="Image description"
        />
      </a>
      <div class="absolute px-5 pt-8 pb-5 bottom-0 w-full bg-gradient-cover">
        <a href="#">
          <h2 class="text-3xl font-bold capitalize text-white mb-3">
            {{ product.title }}
          </h2>
        </a>
        <p class="text-gray-100 hidden sm:inline-block">
          {{ product.category }}
        </p>
        <div class="pt-2">
          <div class="text-gray-100">
            <div class="inline-block h-3 border-l-2 border-red-600 mr-2"></div>
            Europe
          </div>
        </div>
      </div>
    </div>
  </v-card>
</template>

<script setup>
const { data: product } = await useFetch(
  "https://fakestoreapi.com/products?limit=1"
);
const products = product._rawValue;
console.log(products);
</script>

<style scoped></style>
