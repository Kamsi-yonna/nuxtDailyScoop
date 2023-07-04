<template>
  <h2>product details for product {{ id }}</h2>
  <h2>Its called {{ product.title }}</h2>
  <h2>it goes out for {{ product.price }}</h2>
  <v-img
    class="max-w-full w-full mx-auto h-24"
    :src="product.image"
    alt="Image description"
  />
</template>

<script setup>
const { id } = useRoute().params;
const uri = "https://fakestoreapi.com/products/" + id;

// fetch the product
const { data: product } = await useFetch(uri);
</script>

<style scoped></style>
