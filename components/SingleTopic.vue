<script setup lang="ts">
const props = defineProps({
  id: String,
  image: String,
  tag: String,
  date: Date,
  title: String,
  text: String,
});

function truncate(val: string, len: number) {
  if (val.length > len) {
    return val.substring(0, len) + "...";
  } else {
    return val;
  }
}
</script>

<template>
  <div v-if="date && title && text && tag && id">
    <NuxtLink :to="`/post-details/${id}`">
      <div class="relative w-80 mt-5">
        <div
          class="absolute top-0 left-0 w-full h-full z-10 bg-black-100 opacity-20"
        />
        <img :src="image" alt="Image" class="rounded-md w-80 h-[280px]" />
        <!--<p
        class="text-xs font-bold absolute top-4 right-4 z-20 uppercase font-['Roboto'] text-white p-3 bg-white/20 rounded-lg"
      >
        {{ tag }}
      </p>-->
        <TagCip :tag="tag" class="absolute right-5 top-5" />
      </div>
      <p class="text-xs font-normal text-grey-light mt-5">
        {{ date.getDate() }}.{{ date.getMonth() + 1 }}.{{ date.getFullYear() }}
      </p>
      <p class="text-lg font-bold max-w-xs text-justify text-grey-dark mt-5">
        {{ truncate(title, 60) }}
      </p>
      <p
        class="text-xs font-normal max-w-xs max-h-16 text-clip overflow-hidden text-justify text-grey-light mt-5"
      >
        {{ truncate(text, 150) }}
      </p>
    </NuxtLink>
  </div>
</template>
