<!-- HERO CARD  -->
<template>
  <v-row md="2" class="p-4">
    <v-col v-for="(product, i) in products" :key="i" lg="4">
      <v-card class="flex border-4 sm:border-b-0 border-black w-96">
        <div class="relative hover-img max-h-48 overflow-hidden">
          <v-img
            height="180"
            class="w-full-width p-2"
            :src="product.image"
            alt="alt title"
            cover
          />
          <div
            class="absolute px-4 pt-7 pb-4 bottom-0 w-full bg-gradient-cover"
          >
            <v-card-title>{{ product.title }}</v-card-title>

            <div class="pt-1">
              <div class="text-gray-100">
                <div
                  class="inline-block h-3 border-l-2 border-red-600 mr-2"
                ></div>
                <v-card-subtitle>
                  {{ product.id }}
                </v-card-subtitle>
              </div>
            </div>
          </div>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
const { data: product } = await useFetch(
  "https://fakestoreapi.com/products?limit=4"
);
const products = product._rawValue;
console.log(products);
</script>

<style scoped></style>
