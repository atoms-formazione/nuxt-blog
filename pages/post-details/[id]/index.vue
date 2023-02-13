<script setup lang="ts">
interface Article {
  title: string;
  description: string;
  image: string;
  publish_date: Date;
  tag: string;
  id: string;
}

const route = useRoute();

const article: Article = await useFetch(
  `https://63e1285c65b57fe60652c60f.mockapi.io/Getdata/${route.params.id}`
)
  .then((response) => response.data.value as Promise<Article>)
  .then((json) => {
    console.log(json);
    const articleFound: Article = {
      title: json.title,
      description: json.description,
      image: json.image,
      publish_date: new Date(json.publish_date),
      tag: json.tag,
      id: json.id,
    };
    console.log(articleFound);
    return articleFound;
  });
</script>

<template>
  <Suspense>
    <PostDetailsSection
      v-bind="article"
      class="mt-24 mb-14"
    ></PostDetailsSection>
  </Suspense>
  <Suspense>
    <PostInfo v-bind="article" class="mb-24 mt-14"></PostInfo>
  </Suspense>
  <div class="w-full bg-[#e5e5e54d] py-24">
    <Suspense>
      <EditorsPickSection>
        <template v-slot:title>
          <h3 class="text-lg font-bold text-[#495057] mb-12">Related Posts</h3>
        </template>
      </EditorsPickSection>
    </Suspense>
  </div>
</template>

<style scoped lang="scss"></style>
