<!-- <template>
  <div>
    <h1>{{ singlePost.title }}</h1>
    <hr />
    <p>{{ singlePost.description }}</p>
  </div>
</template> -->
<template>
  <div
    class="relative w-full h-[600px] grid grid-cols-4 md:grid-cols-12 px-20 py-32"
  >
    <div class="absolute inset-0 -z-10">
      <img :src="singlePost.image" class="w-full h-full object-cover" />
    </div>

    <!-- <pre>{{ response }}</pre> -->
    <div
      class="z-20 col-span-4 md:col-span-6 fonr-serif flex flex-col items-center md:col-start-4"
    >
      <AtomsTag :tag="singlePost.tag"></AtomsTag>

      <div class="">
        <h1 class="font-serif text-[white] text-3xl">{{ singlePost.title }}</h1>
        <div class="flex py-4">
          <p class="font-serif text-text-white line-clamp-2">
            {{ singlePost.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
console.log("ROUTEEE", route.params.id);
//  const { data: singlePost } = useFetch(
//    `https://63e1285c65b57fe60652c60f.mockapi.io/Getdata` + route.params.id
//  );
const { data: singlePost } = await useFetch(
  `https://63e1285c65b57fe60652c60f.mockapi.io/Getdata/${route.params.id}`
);
</script>

<style scoped></style>
