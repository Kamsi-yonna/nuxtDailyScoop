<template>
  <v-row cols="2" md="2">
    <v-col v-for="(product, i) in products" :key="i" cols="6" lg="4">
      <div class="flex flex-row sm:block hover-img">
        <a href="">
          <v-img
            class="productImage"
            :src="product.image"
            height="200px"
          ></v-img>
        </a>
        <div class="py-0 sm:py-3 pl-3 sm:pl-0">
          <h3 class="text-lg font-bold leading-tight mb-2">
            <v-card-title>{{ product.title }}</v-card-title>
          </h3>
          <p class="hidden md:block text-gray-600 leading-tight mb-1">
            <v-card-subtitle class="font-weight-black">
              ${{ product.price }}
            </v-card-subtitle>
          </p>
        </div>
      </div>
    </v-col>
    <div><h2>This is for a test</h2></div>
    <div><h2>This is for a test</h2></div>
  </v-row>
</template>

<script setup>
const { data: product } = await useFetch("https://fakestoreapi.com/products");
const products = product._rawValue;
console.log(products);
</script>

<style lang="scss" scoped></style>
