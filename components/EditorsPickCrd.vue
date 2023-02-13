<script setup lang="ts">
interface Article {
  title: string;
  description: string;
  image: string;
  publish_date: Date;
  tag: string;
  id: string;
}

const prop = defineProps<Article>();

function truncate(val: string, len: number) {
  if (val.length > len) {
    return val.substring(0, len) + "...";
  } else {
    return val;
  }
}
</script>

<template>
  <div class="w-5/6 h-80 lg:w-[31%] rounded-md cursor-pointer hover:opacity-80">
    <NuxtLink :to="`/post-details/${id}`">
      <div
        class="relative bg-cover bg-center editors-pick1 h-full rounded-md"
        :style="{ backgroundImage: `url(${prop.image})` }"
      >
        <TagCip :tag="tag" class="absolute right-5 top-5" />
        <!--<div
          class="absolute right-5 top-5 p-2 rounded-lg w-fit bg-white/25 h-fit"
        >
          <h4 class="text-xs font-bold text-white font-roboto">
            {{ prop.tag }}
          </h4>
        </div>-->
        <div class="text-white p-6 lg:p-10 absolute bottom-0">
          <small class="text-xs font-normal">{{
            prop.publish_date.getFullYear()
          }}</small>
          <h3 class="text-lg font-bold">
            {{ truncate(prop.title, 60) }}
          </h3>
          <p class="text-xs font-normal">
            {{ truncate(prop.description, 150) }}
          </p>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<style scoped></style>
