<template>
  <v-card
    v-for="(product, i) in products"
    :key="i"
    class="flex flex-col shadow my-4"
  >
    <!-- Article Image -->
    <a href="#" class="hover:opacity-75">
      <v-img
        class="max-w-full w-full mx-auto h-96"
        :src="product.image"
        alt="alt title"
        cover
      />
    </a>
    <div class="bg-white flex flex-col justify-start p-6">
      <a href="#" class="text-black text-sm font-bold uppercase pb-4">{{
        product.category
      }}</a>
      <a href="#" class="text-3xl font-bold hover:text-gray-700 pb-4">{{
        product.title
      }}</a>
      <p href="#" class="text-sm pb-3">
        By
        <a href="#" class="font-semibold hover:text-gray-800">{{
          product.rating.count
        }}</a
        >, Published on {{ product.id }}
      </p>
      <a href="#" class="pb-6">{{ product.description }}</a>
      <a href="#" class="uppercase text-gray-800 hover:text-black"
        >Continue Reading <i class="fas fa-arrow-right"></i
      ></a>
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

<style lang="scss" scoped></style>
