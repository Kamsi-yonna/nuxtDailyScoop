<!-- HERO BANNER  -->
<template>
  <v-card
    v-for="(article, i) in articles"
    :key="i"
    class="flex-shrink max-w-full w-full lg:w-1/2 pr-2"
  >
    <div class="relative hover-img max-h-96 overflow-hidden">
      <v-img
        class="max-w-full w-full mx-auto h-full"
        :src="article.urlToImage"
        alt="Image description"
        cover
      />
      <div class="absolute px-5 pb-5 bottom-0 w-full bg-gradient-cover">
        <nuxt-link :to="`/selected/${article.id}`">
          <h2 class="text-3xl font-bold capitalize text-white">
            {{ article.title }}
          </h2>
        </nuxt-link>

        <p class="text-gray-100 hidden sm:inline-block">
          {{ article.category }}
        </p>
        <div class="pt-2">
          <div class="text-gray-100">
            <div class="inline-block h-3 border-l-2 border-red-600 mr-2"></div>
            Europe
          </div>
        </div>
      </div>
    </div>
  </v-card>
</template>

<script setup>
const apiKey = "099148be22804e849a0c6fe022b7cf5e";
const url = "https://newsapi.org/v2/everything";
const query = "manchester city";
const maxArticles = 1;

const articles = ref([]);

onMounted(async () => {
  const response = await fetch(`${url}?q=${query}&apiKey=${apiKey}`);
  const data = await response.json();

  const filteredArticles = [];
  for (const article of data.articles) {
    if (article.urlToImage) {
      filteredArticles.push(article);
    }
    if (filteredArticles.length >= maxArticles) {
      break;
    }
  }

  articles.value = filteredArticles;
});
</script>

<style scoped></style>
