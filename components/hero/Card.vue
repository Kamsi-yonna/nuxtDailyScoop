<!-- HERO CARD  -->
<template>
  <v-card
    v-for="(product, i) in products"
    :key="i"
    class="flex-shrink max-w-full w-full sm:w-1/2"
  >
    <div class="relative hover-img max-h-48 p-2 overflow-hidden">
      <v-img
        class="max-w-full w-full mx-auto h-auto"
        :src="product.image"
        alt="Image description"
      />
      <div class="absolute px-4 pt-7 pb-4 bottom-0 w-full bg-gradient-cover">
        <nuxt-link :to="`/selected/${product.id}`">
          <h2
            class="text-lg font-bold capitalize leading-tight text-white mb-1"
          >
            {{ product.title }}
          </h2>
        </nuxt-link>

        <div class="pt-1">
          <div class="text-gray-100">
            <div class="inline-block h-3 border-l-2 border-red-600 mr-2"></div>
            {{ product.category }}
          </div>
        </div>
      </div>
    </div>
  </v-card>
</template>

<script setup>
const { data: product } = await useFetch(
  "https://fakestoreapi.com/products?limit=4"
);
const products = product._rawValue;
console.log(products);
</script>

<style scoped></style>
