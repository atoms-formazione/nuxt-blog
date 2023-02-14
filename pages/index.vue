<script setup lang="ts">
interface Article {
  title: string;
  description: string;
  image: string;
  publish_date: Date;
  tag: string;
  id: string;
}

const article: Article = await useFetch(
  `https://63e1285c65b57fe60652c60f.mockapi.io/Getdata/9`
)
  .then((response) => response.data.value as Promise<Article>)
  .then((json) => {
    //console.log(json);
    const articleFound: Article = {
      title: json.title,
      description: json.description,
      image: json.image,
      publish_date: new Date(json.publish_date),
      tag: json.tag,
      id: json.id,
    };
    //console.log(articleFound);
    return articleFound;
  });
</script>

<template>
  <TheHero class="mb-36" />
  <Suspense>
    <PopularTopics class="my-36" />
  </Suspense>
  <Suspense>
    <BigPost v-bind="article" class="my-36" />
  </Suspense>
  <Suspense>
    <EditorsPickSection class="my-36">
      <template v-slot:title>
        <h2 class="text-4xl font-bold text-grey-dark mb-16">Editor’s Pick</h2>
      </template>
    </EditorsPickSection>
  </Suspense>
</template>

<style scoped lang="scss"></style>
