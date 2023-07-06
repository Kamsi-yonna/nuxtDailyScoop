<template>
  <v-col v-for="(article, i) in articles" :key="i">
    <v-card class="flex border-4 sm:border-b-0 border-black">
      <div class="flex-shrink max-w-full w-full p-2">
        <div class="relative hover-img h-80 overflow-hidden text-blue-100">
          <!--thumbnail-->
          <v-img
            class="max-w-full w-full mx-auto h-80 hover:opacity-80 hover:blur-sm"
            :src="article.urlToImage"
            alt="Image description"
            cover
          />

          <div
            class="absolute px-5 pt-8 pb-5 bottom-0 w-full bg-gradient-cover"
          >
            <!--title-->
            <nuxt-link :to="`/selected/${article.id}`">
              <h2 class="trunc text-3xl font-bold capitalize mb-3">
                {{ article.title }}
              </h2>
            </nuxt-link>

            <p class="trunc font-bold sm:inline-block">
              {{ article.content }}
            </p>
            <!-- author and date -->
            <div class="pt-2">
              <div class="">
                <div class="inline-block h-3 border-l-2 border-red-600"></div>
                {{ article.source.name }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </v-card>
  </v-col>
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
