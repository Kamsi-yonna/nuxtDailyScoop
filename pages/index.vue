<template>
  <hero />
  <articles />
</template>

<script setup>
const { data: product } = await useFetch(
  "https://fakestoreapi.com/products?limit=1"
);
</script>

<style lang="scss" scoped></style>
