import { TagCip } from '../.nuxt/components';
<template lang="">
  <div>
    <div
      class="h-[36rem] bg-[url('~/assets/TheHero.png')] bg-no-repeat bg-center bg-cover"
    >
      <!--<img
        src="~/assets/TheHero.png"
        class="object-cover mix-blend-overlay w-full"
      />-->
      <div class="relative top-64 left-2 md:top-80 md:left-20 max-w-lg">
        <TagCip :tag="'ADVENTURE'" />
        <div class="text-white not-italic text-4xl font-bold max-w-lg">
          Richird Norton photorealistic <br />
          rendering as real photos
        </div>
        <div class="flex flex-wrap">
          <p class="text-white text-sm font-normal">08.08.2021</p>
          <hr class="w-[30px] text-white px-2 m-3" />
          <p class="text-white text-sm font-normal line-clamp-2 max-w-md">
            {{ truncate(response.description, 150) }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const response = await fetch(
  "https://63e1285c65b57fe60652c60f.mockapi.io/Getdata/1"
).then((res) => res.json());

function truncate(val: string, len: number) {
  if (val.length > len) {
    return val.substring(0, len) + "...";
  } else {
    return val;
  }
}
</script>
<style lang=""></style>
