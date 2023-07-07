<template>
  <div class="container mx-auto flex flex-wrap py-6">
    <!-- Posts Section -->
    <section class="w-full md:w-2/3 flex flex-col items-center px-3">
      <!-- SELECTED ARTICLE  -->
      <!-- <selectedContent /> -->
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

      <!-- Pagination -->
      <div class="flex items-center py-8">
        <a
          href="#"
          class="h-10 w-10 bg-black hover:bg-black font-semibold text-white text-sm flex items-center justify-center"
          >1</a
        >
        <a
          href="#"
          class="h-10 w-10 font-semibold text-gray-800 hover:bg-black hover:text-white text-sm flex items-center justify-center"
          >2</a
        >
        <a
          href="#"
          class="h-10 w-10 font-semibold text-gray-800 hover:text-gray-900 text-sm flex items-center justify-center ml-3"
          >Next <i class="fas fa-arrow-right ml-2"></i
        ></a>
      </div>
    </section>

    <!-- Sidebar Section -->
    <aside class="w-full md:w-1/3 flex flex-col items-center px-3">
      <!-- ABOUT US COMPONENT  -->
      <div class="w-full bg-white shadow flex flex-col my-4 p-6">
        <p class="text-xl font-semibold pb-5">About Us</p>
        <p class="pb-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          mattis est eu odio sagittis tristique. Vestibulum ut finibus leo. In
          hac habitasse platea dictumst.
        </p>
        <a
          href="#"
          class="w-full bg-black text-white font-bold text-sm uppercase rounded hover:bg-black flex items-center justify-center px-2 py-3 mt-4"
        >
          Get to know us
        </a>
      </div>

      <!-- INSTAGRAM COMPONENT  -->
      <instagramComponent />
    </aside>
  </div>
</template>

<script setup>
const { id } = useRoute().params;

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
</script>

<style scoped></style>
