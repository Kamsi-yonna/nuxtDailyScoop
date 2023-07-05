<template>
  <v-col v-for="(product, i) in products" :key="i">
    <v-card class="flex border-4 sm:border-b-0 border-black">
      <div class="flex-shrink max-w-full w-full p-2">
        <div class="relative hover-img max-h-80 overflow-hidden">
          <!--thumbnail-->
          <v-img
            class="max-w-full w-full mx-auto h-96"
            :src="product.image"
            alt="alt title"
            cover
          />

          <div
            class="absolute px-5 pt-8 pb-5 bottom-0 w-full bg-gradient-cover"
          >
            <!--title-->
            <nuxt-link :to="`/selected/${product.id}`">
              <v-card-title>{{ product.title }}</v-card-title>
            </nuxt-link>
            <v-card-subtitle>
              {{ product.description }}
            </v-card-subtitle>
            <!-- author and date -->
            <div class="pt-2">
              <div class="text-gray-100">
                <div class="inline-block h-3 border-l-2 border-red-600"></div>
                {{ product.category }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </v-card>
  </v-col>
</template>

<script setup>
const { product } = defineProps(["product"]);
// const { data: product } = await useFetch(
//   "https://fakestoreapi.com/products?limit=1"
// );
// const products = product._rawValue;
// console.log(products);
</script>

<style scoped>
.v-card-title {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  white-space: normal;
  overflow: visible;
  text-overflow: none;
  font-size: 30px;
  font-weight: 500;
  line-height: 36px;
  text-transform: capitalize;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  color: #fff;
  text-overflow: ellipsis;
}
.v-card-subtitle {
  font-family: "Franklin Gothic Light", "Arial Narrow", Arial, sans-serif;
  color: #fff;
  white-space: normal;
  font-weight: 200;
  font-size: 14px;
  line-height: 20px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
