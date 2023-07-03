<template>
  <ul class="post-number">
    <li
      v-for="(product, i) in products"
      :key="i"
      class="flex border-b border-gray-100 hover:bg-gray-50 p-2"
    >
      <v-card-title>
        <span class="counter"></span>{{ product.title }}
      </v-card-title>
    </li>
  </ul>
</template>

<script setup>
const { data: product } = await useFetch(
  "https://fakestoreapi.com/products?limit=5"
);
const products = product._rawValue;
console.log(products);
</script>

<style scoped>
.v-card-title {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  color: rgb(69, 69, 69);
  font-size: 20px;
  font-weight: 300;
  line-height: 25px;
  padding: 3px 6px;
  margin-left: 6px;
  cursor: pointer;
  width: 90%;
  white-space: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  text-align: left;
}

.post-number {
  counter-reset: item;
}

.post-number li::before {
  content: counter(item) ". ";
  font-size: 28px;
  counter-increment: item;
  color: rgb(121, 121, 121);
  font-weight: bold;
}

.counter {
  margin-right: 4px;
}
</style>
