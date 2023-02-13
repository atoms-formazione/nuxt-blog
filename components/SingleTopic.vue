<script setup lang="ts">
const props = defineProps({
  image: String,
  tag: String,
  date: Date,
  title: String,
  text: String,
});
</script>

<template>
  <div>
    <div class="relative w-80 mt-5">
      <div
        class="absolute top-0 left-0 w-full h-full z-10 bg-black-100 opacity-20"
      />
      <img :src="image" alt="Image" class="rounded-md w-80 h-[280px]" />
      <p
        class="text-xs font-bold absolute top-4 right-4 z-20 uppercase font-['Roboto'] text-white p-3 bg-white/20 rounded-lg"
      >
        {{ tag }}
      </p>
    </div>
    <p class="text-xs font-normal text-[#6c757d] mt-5">
      {{ date?.getDate() }}.{{ date?.getMonth() + 1 }}.{{ date?.getFullYear() }}
    </p>
    <p class="text-lg font-bold max-w-xs text-justify text-[#495057] mt-5">
      {{ title }}
    </p>
    <p
      class="text-xs font-normal max-w-xs max-h-16 text-clip overflow-hidden text-justify text-[#6c757d] mt-5"
    >
      {{ text }}
    </p>
  </div>
</template>
