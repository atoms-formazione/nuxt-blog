<template>
  <!-- <div>
    <pre>{{ response }}</pre>
  </div> -->

  <div class="">
    <div
      v-if="response"
      class="grid grid-cols-1 gap-4 p-2 md:grid-cols-2 lg:grid-cols-4"
    >
      <div v-for="photo in response" class="">
        <NuxtLink :to="`/post/${photo.id}`">
          <div class="w-78 m-10">
            <div class="w-full h-70">
              <img :src="photo.image" :alt="photo.title" class="rounded" />
            </div>
            <div>
              <p class="font-serif font-normal text-xs text-title-gray mt-4">
                {{ convertiData(photo.publish_date) }}
              </p>
              <p class="line-clamp-2 mt-4 font-bold text-lg leading-6 w-fit">
                {{ photo.title }}
              </p>
              <p
                class="line-clamp-3 font-serif font-normal text-xs text-title-gray mt-4 mb-6 w-fit"
              >
                {{ photo.description }}
              </p>
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const response = await fetch(
  `https://63e1285c65b57fe60652c60f.mockapi.io/Getdata`
)
  .then((res) => res.json())
  .catch((error) => error);
// console.log("response", response.Getdata);
// console.log("AAAA", response);

// let dat = (response.publish_date =
//   new Date().getDate() +
//   "." +
//   new Date().getMonth() +
//   "." +
//   new Date().getFullYear());

function convertiData(a: String) {
  return (a =
    new Date().getDate() +
    "." +
    new Date().getMonth() +
    "." +
    new Date().getFullYear());
}

// var d = new Date(0); // The 0 there is the key, which sets the date to the epoch
// d.setUTCSeconds(response.publish_date);
</script>

<style scoped></style>
