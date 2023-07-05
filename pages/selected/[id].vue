<template>
  <selectedContent :product="product" />
</template>

<script setup>
const { id } = useRoute().params;
const uri = "https://fakestoreapi.com/products/" + id;

// fetch the product
const { data: product } = await useFetch(uri);
</script>

<style scoped></style>
