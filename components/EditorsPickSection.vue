<script setup lang="ts">
type Article = {
  title: string;
  description: string;
  image: string;
  publish_date: number;
  tag: string;
  id: string;
};
const articles: Article[] = await useFetch(
  "https://63e1285c65b57fe60652c60f.mockapi.io/Getdata?page=1&limit=3"
);
</script>
<template>
  <div class="max-w-7xl m-auto p-2 my-36">
    <h2 class="text-4xl font-bold text-[#495057] mb-16">Editor’s Pick</h2>
    <div>
      <div
        class="flex flex-wrap justify-center lg:justify-between gap-5 m-auto"
      >
        <EditorsPickCrd v-for="(article, index) in articles" :key="index"
        :title="article.title" title: string; :description="article.description"
        :image="article.image" :publish_date="article.publish_date"
        :tag="article.tag" :id="article.id" />
      </div>
    </div>
  </div>
</template>
<style></style>
