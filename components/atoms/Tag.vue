<template>
  <div
    class="inline-flex justify-start items-center font-tag text-[white] font-bold rounded-lg w-fit bg-tag-bg-gray px-2.5 py-1.5"
  >
    <p>{{ tag }}</p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  tag: String,
});
</script>

<style scoped></style>
