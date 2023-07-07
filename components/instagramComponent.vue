<template>
  <v-card class="w-full bg-white shadow flex flex-col my-4 p-6">
    <p class="text-xl font-semibold pb-5">Instagram</p>
    <div class="grid grid-cols-3 p-2 gap-2">
      <v-img
        v-for="(article, i) in articles"
        :key="i"
        height="100"
        class="hover:opacity-75"
        :src="article.urlToImage"
        cover
      />
    </div>
    <a
      href="#"
      class="w-full bg-black text-white font-bold text-sm uppercase rounded hover:bg-black flex items-center justify-center px-2 py-3 mt-6"
    >
      <i class="fab fa-instagram mr-2"></i> Follow @dgrzyb
    </a>
  </v-card>
</template>

<script setup>
const apiKey = "099148be22804e849a0c6fe022b7cf5e";
const url = "https://newsapi.org/v2/everything";
const query = "top stories";
const maxArticles = 9;

const articles = ref([]);
const router = useRouter();

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

function navigateToSelectedArticle(articleId) {
  router.push(`/selected/${articleId}`);
}
</script>

<style scoped></style>
