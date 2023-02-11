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
)
  .then((response) => response.data.value)
  .then((json) => {
    let res: Article[] = [];
    //console.log(json);
    if (Array.isArray(json)) {
      json.forEach((element) => {
        const newArticle: Article = {
          title: element.title,
          description: element.description,
          image: element.image,
          publish_date: element.publish_date,
          tag: element.tag,
          id: element.id,
        };
        res.push(newArticle);
      });
    }
    //console.log(res);
    return res;
  });
</script>

<template>
  <div class="max-w-7xl m-auto p-2 my-36">
    <!--<h2 class="text-4xl font-bold text-[#495057] mb-16">Editor’s Pick</h2>-->
    <slot name="title"></slot>
    <div>
      <div
        class="flex flex-wrap justify-center lg:justify-between gap-5 m-auto"
      >
        <EditorsPickCrd
          v-for="article in articles"
          :key="article.id"
          v-bind="article"
        />
      </div>
    </div>
  </div>
</template>

<style></style>
