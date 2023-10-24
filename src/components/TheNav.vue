<template>
  <div class="bg-black text-white">
    <div
      class="max-w-6xl mx-auto py-8 px-8 flex flex-col items-center space-y-8 md:space-y-0 md:flex-row justify-between primary-font"
    >
      <div class="text-xl cursor-pointer hover:text-gray-400 animated">
        <a href="https://github.com/tenshinoakumaa">Moshi Kikiyama</a>
      </div>
      <ul class="flex flex-row space-x-32">
        <li class="hover:text-gray-400 cursor-pointer animated">
          <router-link to="/gallery">Gallery</router-link>
        </li>
        <li class="hover:text-gray-400 cursor-pointer animated">
          <router-link to="/about-me">About me</router-link>
        </li>
        <li class="hover:text-gray-400 cursor-pointer animated">
          <router-link to="/faq">FAQ</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Nanum+Pen+Script&family=Sometype+Mono&family=Space+Mono&display=swap");
.animated {
  transition: all 0.5s;
}
.animated:hover {
  transform: scale(1.2);
}
</style>
