<script setup lang="ts">
type Article = {
  title: string;
  description: string;
  image: string;
  publish_date: Date;
  tag: string;
  id: string;
};

const articles: Article[] = await useFetch(
  "https://63e1285c65b57fe60652c60f.mockapi.io/Getdata"
)
  .then((response) => response.data.value)
  .then((json) => {
    let res: Article[] = [];
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
    return res;
  });
</script>

<template>
  <p class="text-4xl font-bold text-[#495057]">Popular Topics</p>
  <div class="flex text-xs font-bold gap-5 text-[#495057]">
    <p class="text-[#d4a373]">All</p>
    <p>Adventure</p>
    <p>Travel</p>
    <p>Fashion</p>
    <p>Technology</p>
    <p>Branding</p>
  </div>

  <div class="grid grid-cols-4">
    <SingleTopic
      v-for="topic in articles"
      v-bind:key="topic.id"
      :image="topic.image"
      :tag="topic.tag"
      :date="topic.publish_date"
      :title="topic.title"
      :text="topic.description"
    />
  </div>
</template>
