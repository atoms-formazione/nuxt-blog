<template>
  <div>
    <NuxtLink class="h-30" :to="urlPath"
      ><img :src="iconUrl" class="h-full"
    /></NuxtLink>
  </div>
</template>

<script setup lang="ts">
defineProps({
  iconUrl: String,
  urlPath: String,
});
</script>

<style scoped></style>
