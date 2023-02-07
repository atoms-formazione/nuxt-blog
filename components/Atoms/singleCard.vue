<template>
  <div class="w-10">
    <div v-if="response" class="grid grid-cols-4 gap-5">
      <div v-for="photo in response">
        <div>
          <img :src="photo.image" :alt="photo.title" />
        </div>
        <div>
          <p>{{ photo.title }}</p>
          <p>{{ photo.publish_date }}</p>
          <p>{{ photo.description }}</p>
        </div>
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
console.log("response", response.Getdata);
console.log("AAAA", response);
</script>

<style scoped></style>
