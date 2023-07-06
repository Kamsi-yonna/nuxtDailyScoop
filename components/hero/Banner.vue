<!-- HERO BANNER  -->
<template>
  <v-card
    v-for="(article, i) in articles"
    :key="i"
    class="flex-shrink max-w-full w-full lg:w-1/2 pr-2"
  >
    <div class="text-blue-100 relative hover-img max-h-96 overflow-hidden">
      <v-img
        class="w-100 p-1 mx-auto h-96 hover:opacity-80 hover:blur-sm"
        :src="article.urlToImage"
        alt="Image description"
        cover
      />
      <div class="absolute px-5 pt-8 pb-5 bottom-0 w-full bg-gradient-cover">
        <nuxt-link :to="`/selected/${article.id}`">
          <h2 class="trunc text-3xl font-bold capitalize mb-3">
            {{ article.title }}
          </h2>
        </nuxt-link>

        <p class="trunc font-bold sm:inline-block">
          {{ article.content }}
        </p>
        <div class="pt-2">
          <div class="">
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
const maxArticles = 1;

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
