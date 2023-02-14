<script lang="ts" setup>
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
  <div
    class="h-[36rem] bg-no-repeat bg-center bg-cover"
    :style="{ backgroundImage: `url(${image})` }"
  >
    <div class="m-auto pt-44 align-middle text-center text-white">
      <TagCip :tag="tag" class="m-auto mb-6" />
      <h1 class="m-auto mb-3 max-w-xl">{{ truncate(prop.title, 60) }}</h1>
      <p class="m-auto mb-6 max-w-md">
        {{ truncate(prop.description, 150) }}
      </p>
      <hr class="w-[30px] text-white px-2 m-auto mt-6 mb-4" />
      <small
        >{{ publish_date.getDate() }}.{{ publish_date.getMonth() + 1 }}.{{
          publish_date.getFullYear()
        }}</small
      >
    </div>
  </div>
</template>
