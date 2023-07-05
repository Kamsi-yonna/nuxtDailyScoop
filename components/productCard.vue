<template>
  <h2>I am the product card for {{ id }}</h2>
  <h2>Its called {{ product.title }}</h2>

  <div class="text-center">
    <img :src="product.image" />
    <p class="font-bold text-gray-500 m-4 truncate">{{ product.title }}</p>
    <nuxt-link :to="`/selected/${product.id}`">
      <p class="btn my-4">View Details</p>
    </nuxt-link>
  </div>
</template>

<script setup>
const { product } = defineProps(["product"]);
</script>

<style scoped></style>
