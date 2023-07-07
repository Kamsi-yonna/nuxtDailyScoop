<!-- HERO BANNER  -->
<template>
  {{ i }}
  <v-card v-for="(article, i) in articles" :key="i">
    <div class="flex flex-col shadow my-4">
      <!-- Article Image -->
      <a href="#">
        <v-img
          class="w-100 p-1 mx-auto h-96"
          :src="article.urlToImage"
          alt="Image description"
          cover
        />
      </a>
      <div class="bg-white flex flex-col justify-start p-6">
        <a href="#" class="text-blue-700 text-sm font-bold uppercase pb-4">
          {{ article.source.name }}</a
        >
        <a href="#" class="text-3xl font-bold hover:text-gray-700 pb-4">
          {{ article.i }}</a
        >
        <p href="#" class="text-sm pb-3">
          By
          <a href="#" class="font-semibold hover:text-gray-800">
            {{ article.author }}</a
          >, Published on {{ article.publishedAt }}
        </p>
        <a href="#" class="pb-6"> {{ article.content }}</a>
        <a href="#" class="uppercase text-gray-800 hover:text-black"
          >Continue Reading <i class="fas fa-arrow-right"></i
        ></a>
      </div>
    </div>
  </v-card>
</template>

<script setup></script>
<!-- <script setup>
const apiKey = "099148be22804e849a0c6fe022b7cf5e";
const url = "https://newsapi.org/v2/everything";
const query = "top stories";
const maxArticles = 1;

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
</script> -->

<style scoped>
.trunc {
  -webkit-box-orient: vertical;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
</style>
