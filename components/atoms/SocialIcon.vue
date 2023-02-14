<template>
  <div>
    <NuxtLink to=""><img :src="`require(${iconUrl})`" /></NuxtLink>
  </div>
</template>

<script setup lang="ts">
defineProps({
  iconUrl: String,
  urlPath: String,
});
</script>

<style scoped></style>
