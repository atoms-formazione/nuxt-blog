<template>
  <div class="w-5/6 h-80 lg:w-[32%] lg:h-80 rounded-md">
    <div
      class="relative bg-cover bg-center bg-img editors-pick1 h-full rounded-md"
      :style="{ backgroundImage: image }"
    >
      <div
        class="absolute right-5 top-5 p-2 rounded-lg w-fit bg-white/25 h-fit"
      >
        <h4 class="text-xs font-bold text-white">{{ tag }}</h4>
      </div>
      <div class="text-white p-6 lg:p-10 absolute bottom-0">
        <small class="text-xs font-normal">{{ tag }}</small>
        <h3 class="text-lg font-bold">
          {{ title }}
        </h3>
        <p class="text-xs font-normal">
          {{ description }}
        </p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
defineProps<{
  title: string;
  description: string;
  image: string;
  publish_date: number;
  tag: string;
  id: string;
}>();
</script>
<style scoped>
.bg-img {
  background-image: url(../assets/BlogImage1.png);
}
</style>
