<template>
  <div class="max-w-6xl mx-auto py-8 primary-font pt-14 mb-28">
    <div class="text-center pt-8 text-3xl mb-14">Gallery</div>

    <div
      class="grid grid-cols-2 xl:grid-cols-3 pb-8 mx-auto justify-center xl:justify-between space-y-16"
    >
      <div
        v-for="img in images"
        :key="img.name"
        class="relative mt-16 px-4 flex items-center justify-center cursor-pointer"
      >
        <div
          class="h-full w-full opacity-0 hover:opacity-70 absolute bg-black card"
          @click="img.showImage = true"
        >
          <ul
            class="text-white flex flex-col items-center justify-center pt-20 space-y-8"
          >
            <li>{{ img.name }}</li>
            <li class="flex flex-col text-center">
              <span> {{ img.artist_name }} </span> <span>{{ img.size }}</span>
              <span>{{ img.category }}</span>
            </li>
            <li class="text-yellow-400">{{ img.price }}</li>
          </ul>
        </div>
        <img :src="img.url" class="max-w-lg w-full" />

        <div
          v-if="img.showImage"
          class="image-popup"
          @click="img.showImage = false"
        >
          <img :src="img.url" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        {
          name: "Deep",
          artist_name: "Filatova Polina",
          size: "70x70 cm",
          category: "Painting, Canvas",
          price: "$5,929",
          url: "https://679318.selcdn.ru/artonline24_img/-0EDmZHOm_W-sD2chYs-Z.jpeg",
          showImage: false,
        },
        {
          name: "Mystery of Confession C-5",
          artist_name: "Sarapyan Tigran",
          size: "40 x 40 cm",
          category: "abstract, painting",
          price: "$1,333",
          url: "https://679318.selcdn.ru/artonline24_img/HdXcTwDDA_zFNXEDgY1Rp.jpeg",
          showImage: false,
        },
        {
          name: "Moment",
          artist_name: "Kopittseva Anastasia",
          size: "90 x 90 cm",
          category: "realism, painting",
          price: "$4,444",
          url: "https://679318.selcdn.ru/artonline24_img/7wxEjtMJ1cxFGCmZAUbqq.jpeg",
          showImage: false,
        },
        {
          name: "Police in July",
          artist_name: "Pavel Polanski",
          size: "100 x 120 cm",
          category: "contemporary art, painting",
          price: "$9,066",
          url: "https://679318.selcdn.ru/artonline24_img/nSYgfGtVgoze5lIwic0Wy.jpeg",
          showImage: false,
        },
        {
          name: "Untitled 5",
          artist_name: "Chernoritskiy Nikita",
          size: "110 x 110 cm",
          category: "contemporary art, painting",
          price: "$3,378",
          url: "https://679318.selcdn.ru/artonline24_img/PtLiY0oZd6mKeKIBCXvtO.jpeg",
          showImage: false,
        },
        {
          name: "Unreality",
          artist_name: "Anonymous",
          size: "130 x 130 cm",
          category: "painting",
          price: "$12,888",
          url: "https://679318.selcdn.ru/artonline24_img/KG-fznN0E5unJ43LTyq1f.jpeg",
          showImage: false,
        },
      ],
    };
  },
};
</script>

<style scoped>
.card {
  transition: all 0.5s;
}
.image-popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}

.image-popup img {
  max-width: 80%;
  max-height: 80%;
}
</style>
