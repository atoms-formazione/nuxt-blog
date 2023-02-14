<template>
  <Suspense>
    <div
      class="relative w-full h-[600px] grid grid-cols-4 md:grid-cols-12 px-20 py-32"
    >
      <div class="absolute inset-0 -z-10">
        <img :src="response.image" class="w-full h-full object-cover" />
      </div>

      <!-- <pre>{{ response }}</pre> -->
      <div
        class="z-20 col-span-4 md:col-span-6 fonr-serif flex flex-col"
        :class="{
          'items-center md:col-start-4': isCenter,
          'items-end': isRight,
        }"
      >
        <AtomsTag :tag="response.tag"></AtomsTag>

        <div class="">
          <h1 class="font-serif text-[white] text-3xl">{{ response.title }}</h1>
          <div class="flex py-4">
            <p class="text-text-white">
              {{ convertiData(response.publish_date) }}
            </p>

            <hr class="w-[30px] text-text-white px-2 m-3" />

            <p class="font-serif text-text-white line-clamp-2">
              {{ response.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </Suspense>
</template>

<script setup lang="ts">
const response = await fetch(
  "https://63e1285c65b57fe60652c60f.mockapi.io/Getdata/1"
)
  .then((res) => res.json())
  .catch((error) => console.error("ERROREEEEEEE:", error));
const props = defineProps({
  textAlign: String,
});

const isCenter = ref(props.textAlign === "center");
const isRight = ref(props.textAlign === "right");

function convertiData(a: String) {
  console.log(a);
  return (a =
    new Date().getDate() +
    "." +
    new Date().getMonth() +
    "." +
    new Date().getFullYear());
}
</script>

<style scoped></style>
