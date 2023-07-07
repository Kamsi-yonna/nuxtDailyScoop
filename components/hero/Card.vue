<!-- HERO CARD  -->
<template>
  <v-card
    v-for="(article, index) in articles"
    :key="index"
    class="flex-shrink max-w-full w-full sm:w-1/2"
  >
    <div class="text-blue-100 relative hover-img h-48 p-1 overflow-hidden">
      <v-img
        class="hover:opacity-80 hover:blur-sm max-w-full w-full mx-auto h-full"
        :src="article.urlToImage"
        alt="Image description"
        cover
      />
      <div class="absolute px-4 pt-7 pb-4 bottom-0 w-full bg-gradient-cover">
        <nuxt-link :to="`${index}`">
          <h2 class="trunc text-lg font-bold capitalize leading-tight mb-1">
            {{ article.title }}
          </h2>
        </nuxt-link>

        <div class="pt-1">
          <div class="trunc">
            <div class="inline-block h-3 border-l-2 border-red-600 mr-2"></div>
            {{ article.source.name }}
          </div>
        </div>
      </div>
    </div>
  </v-card>
</template>

<script setup>
const apiKey = "099148be22804e849a0c6fe022b7cf5e";
const url = "https://newsapi.org/v2/everything";
const query = "top stories";
const maxArticles = 4;

const articles = ref([]);

onMounted(async () => {
  const response = await fetch(`${url}?q=${query}&apiKey=${apiKey}`);
  const data = await response.json();
  console.log(data);

  const articleCount = data.articles.length;
  const randomIndices = getRandomIndices(articleCount, maxArticles);

  const filteredArticles = [];
  for (const index of randomIndices) {
    const article = data.articles[index];
    if (article.urlToImage) {
      filteredArticles.push(article);
    }
  }

  articles.value = filteredArticles;
});

function getRandomIndices(count, max) {
  const indices = [];
  while (indices.length < max) {
    const randomIndex = Math.floor(Math.random() * count);
    if (!indices.includes(randomIndex)) {
      indices.push(randomIndex);
    }
  }
  return indices;
}
</script>

<style scoped>
.trunc {
  -webkit-box-orient: vertical;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
</style>
