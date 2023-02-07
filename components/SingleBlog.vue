<script setup lang="ts">
const props = defineProps({
  image: String,
  tag: String,
  date: String,
  title: String,
  text: String,
});
</script>

<template>
  <div>
    <img :src="image" alt="Image" class="rounded-bl-md"/>
    <p>{{ tag }}</p>
    <p>{{ date }}</p>
    <p>{{ title }}</p>
    <p>{{ text }}</p>
  </div>
</template>