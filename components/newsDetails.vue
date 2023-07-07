<template>
  <v-card class="flex flex-col shadow my-4">
    <!-- Article Image -->
    <a class="hover:opacity-75">
      <v-img
        class="max-w-full w-full mx-auto h-96"
        :src="product.image"
        alt="alt title"
        cover
      />
    </a>
    <div class="bg-white flex flex-col justify-start p-6">
      <a class="text-black text-sm font-bold uppercase pb-4">{{
        product.category
      }}</a>

      <nuxt-link :to="`/selected/${product.id}`">
        <a class="text-3xl font-bold hover:text-gray-700 pb-4">{{
          product.title
        }}</a>
      </nuxt-link>

      <p class="text-sm pb-3">
        By
        <a class="font-semibold hover:text-gray-800">{{
          product.rating.count
        }}</a
        >, Published on {{ product.id }}
      </p>
      <a class="pb-6">{{ product.description }}</a>
      <a class="uppercase text-gray-800 hover:text-black"
        >Continue Reading <i class="fas fa-arrow-right"></i
      ></a>
    </div>
  </v-card>
</template>

<script>
const { product } = defineProps(["product"]);
</script>

<style scoped></style>
