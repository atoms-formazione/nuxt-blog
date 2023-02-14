<script setup lang="ts">
type Article = {
  title: string;
  description: string;
  image: string;
  publish_date: Date;
  tag: string;
  id: string;
};

const route = useRoute();

const articles: Article[] = await useFetch(
  "https://63e1285c65b57fe60652c60f.mockapi.io/Getdata?page=1&limit=4"
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
          publish_date: new Date(element.publish_date),
          tag: element.tag,
          id: element.id,
        };
        res.push(newArticle);
      });
    }
    //console.log(res);
    return res;
  })
  .then((articlesFound: Article[]) => {
    if (!route.params.id) {
      articlesFound.splice(3, 1);
    } else {
      for (let i = 0; i < articlesFound.length; i++) {
        if (articlesFound[i].id == route.params.id[0]) {
          articlesFound.splice(i, 1);
          break;
        }
      }
    }

    return articlesFound.length > 3
      ? articlesFound.splice(3, 1)
      : articlesFound;
  });
</script>

<template>
  <div class="max-w-7xl m-auto p-2">
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
