<template>
  <div>
    <h1>{{ singlePost.title }}</h1>
    <hr />
    <p>{{ singlePost.description }}</p>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
console.log("ROUTEEE", route.params.id);
//  const { data: singlePost } = useFetch(
//    `https://63e1285c65b57fe60652c60f.mockapi.io/Getdata` + route.params.id
//  );
const { data: singlePost } = await useFetch(
  `https://63e1285c65b57fe60652c60f.mockapi.io/Getdata/${route.params.id}`
);
</script>

<style scoped></style>
