<!-- ARTICLE CARD -->
<template>
  <v-row md="2" class="p-4">
    <v-col v-for="(article, i) in articles" :key="i" lg="4">
      <v-card class="flex border-4 sm:border-b-0 border-black h-96">
        <div class="flex flex-row sm:block text-gray-800">
          <v-img
            height="180"
            class="w-full-width p-2"
            :src="article.urlToImage"
            alt="alt title"
            cover
          />
          <div class="py-0 sm:py-1 pl-3 sm:pl-0">
            <nuxt-link :to="`/selected/${article.id}`">
              <v-card-title>{{ article.title }}</v-card-title>
            </nuxt-link>

            <v-card-subtitle>
              {{ article.description }}
            </v-card-subtitle>

            <nuxt-link :to="`/selected/${article.id}`">
              <v-card-actions :to="`/selected/${article.id}`">
                <button class="btn">Read More...</button>
              </v-card-actions>
            </nuxt-link>
          </div>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
const apiKey = "099148be22804e849a0c6fe022b7cf5e";
const url = "https://newsapi.org/v2/everything";
const query = "top stories";
const maxArticles = 3;

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
