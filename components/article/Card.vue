<!-- ARTICLE CARD -->
<template>
  <v-row md="2" class="p-4">
    <v-col v-for="(product, i) in products" :key="i" lg="4">
      <v-card class="flex border-4 sm:border-b-0 border-black h-96">
        <div class="flex flex-row sm:block text-gray-800">
          <v-img
            height="180"
            class="w-full-width p-2"
            :src="product.image"
            alt="alt title"
            cover
          />
          <div class="py-0 sm:py-1 pl-3 sm:pl-0">
            <v-card-title>{{ product.title }}</v-card-title>

            <v-card-subtitle>
              {{ product.description }}
            </v-card-subtitle>

            <v-card-actions>
              <button class="btn">Read More...</button>
            </v-card-actions>
          </div>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
const { data: product } = await useFetch(
  "https://fakestoreapi.com/products?limit=3"
);
const products = product._rawValue;
console.log(products);
</script>

<style scoped>
.v-card-title {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  white-space: normal;
  overflow: visible;
  text-overflow: none;
  font-size: 18px;
  font-weight: 500;
  line-height: 28px;

  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
}
.v-card-subtitle {
  font-family: "Franklin Gothic Light", "Arial Narrow", Arial, sans-serif;
  white-space: normal;
  font-weight: 100;
  font-size: 14px;
  line-height: 20px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
