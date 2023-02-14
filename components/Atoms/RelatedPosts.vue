<template>
  <h1 class="font-serif font-bold text-4xl text-title-gray ml-12 mt-[10%]">
    {{ title }}
  </h1>
  <!-- <div class="flex wrap">
        <div >
        </div>
    </div> -->
  <div
    v-if="response"
    class="grid grid-cols-1 gap-4 p-2 md:grid-cols-2 lg:grid-cols-3"
  >
    <div v-for="photo in response.slice(0, 3)" class="">
      <NuxtLink :to="`/post/${photo.id}`">
        <div class="w-78 m-10">
          <div class="w-full h-70 relative">
            <img
              :src="photo.image"
              :alt="photo.title"
              class="hover:opacity-70"
            />

            <div
              class="absolute top-0 right-0 px-4 py-2 bg-gray-800 opacity-70"
            >
              <div
                class="inline-flex justify-center items-center font-tag text-[white] font-bold rounded-lg bg-tag-bg-gray px-2.5 py-1.5"
              >
                <p>{{ photo.tag }}</p>
              </div>
            </div>
            <div class="absolute bottom-0 left-0 right-0 px-4 py-2 bg-gray-800">
              <h3
                class="font-serif font-normal text-xs text-text-white mt-4 mb-6 w-fit"
              >
                {{ convertiData(photo.publish_date) }}
              </h3>
              <p
                class="line-clamp-2 mt-4 font-bold text-lg leading-6 w-fit text-text-white font-bold"
              >
                {{ photo.title }}
              </p>
              <p
                class="mt-2 text-sm line-clamp-3 font-serif font-normal text-xs text-text-white mt-4 mb-6 w-fit"
              >
                {{ photo.description }}
              </p>
            </div>
          </div>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: String,
});

const response = await fetch(
  `https://63e1285c65b57fe60652c60f.mockapi.io/Getdata`
)
  .then((res) => res.json())
  .catch((error) => error);

function convertiData(a: String) {
  return (a =
    new Date().getDate() +
    "." +
    new Date().getMonth() +
    "." +
    new Date().getFullYear());
}
</script>

<style scoped></style>
