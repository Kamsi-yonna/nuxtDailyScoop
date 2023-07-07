<template>
  <ul class="post-number">
    <li
      v-for="(article, index) in articles"
      :key="index"
      class="flex border-b border-gray-100 hover:bg-gray-50 p-2"
    >
      <nuxt-link :to="`${index}`">
        <v-card-title>
          <span class="counter"></span>{{ article.title }}
        </v-card-title>
      </nuxt-link>
    </li>
  </ul>
</template>

<script setup>
const apiKey = "099148be22804e849a0c6fe022b7cf5e";
const url = "https://newsapi.org/v2/everything";
const query = "top stories";
const maxArticles = 6;

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
