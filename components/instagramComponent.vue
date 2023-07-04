<template>
  <v-card class="w-full bg-white shadow flex flex-col my-4 p-6">
    <p class="text-xl font-semibold pb-5">Instagram</p>
    <div class="grid grid-cols-3 p-2 gap-2">
      <v-img
        v-for="(product, i) in products"
        :key="i"
        height="100"
        width="100"
        class="hover:opacity-75"
        :src="product.image"
      />
    </div>
    <a
      href="#"
      class="w-full bg-black text-white font-bold text-sm uppercase rounded hover:bg-black flex items-center justify-center px-2 py-3 mt-6"
    >
      <i class="fab fa-instagram mr-2"></i> Follow @dgrzyb
    </a>
  </v-card>
</template>

<script setup>
const { data: product } = await useFetch(
  "https://fakestoreapi.com/products?limit=9"
);
const products = product._rawValue;
console.log(products);
</script>

<style scoped></style>
