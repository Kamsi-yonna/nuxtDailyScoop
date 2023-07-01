<template>
  <header class="fixed z-50 p-3 top-0 left-0 right-0 shadow-sm bg-black mb-5">
    <nav class="container flex-row mx-auto flex justify-between text-white">
      <NuxtLink to="/" class="block px-8 py-3 font-bold text-xl"
        >THE DAILY SCOOP</NuxtLink
      >
      <ul class="flex">
        <li
          class="block border-x-2 border-black px-8 py-3 hover:bg-gray-50 hover:text-black"
        >
          <NuxtLink to="/selectedNews">Sport</NuxtLink>
        </li>
        <li class="block border-x px-8 py-3 hover:bg-gray-50 hover:text-black">
          <NuxtLink to="/selectedNews">Travel</NuxtLink>
        </li>
        <li class="block border-x px-8 py-3 hover:bg-gray-50 hover:text-black">
          <NuxtLink to="/selectedNews">Tech</NuxtLink>
        </li>
        <li class="block border-x px-8 py-3 hover:bg-gray-50 hover:text-black">
          <NuxtLink to="/selectedNews">Entertainment</NuxtLink>
        </li>
        <li class="block border-x px-8 py-3 hover:bg-gray-50 hover:text-black">
          <NuxtLink to="/testrun">SearchIcon</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>

  <!-- output page content -->
  <div class="container mx-auto p-4 mt-20">
    <slot />
  </div>

  <!-- footer  -->
  <footer class="shadow-sm bg-black">
    <nav class="container flex-row mx-auto flex justify-between text-white">
      <NuxtLink to="/" class="block px-8 py-3">THE DAILY SCOOP</NuxtLink>
      <ul class="flex">
        <li
          class="block border-x-2 px-8 py-3 hover:bg-gray-50 hover:text-black"
        >
          <NuxtLink to="/selectedNews">GITHUB</NuxtLink>
        </li>
      </ul>
    </nav>
  </footer>
</template>

<style scoped>
.router-link-exact-active {
  color: #db001b;
}
</style>
