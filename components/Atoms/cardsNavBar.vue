<template>
  <div>
    <ul class="flex">
      <li v-for="link in links" :key="link">
        <a
          :href="'#' + link"
          class="font-serif text-xs text-title-gray active:text-active-gold target:text-active-gold mr-20 mt-30"
        >
          {{ link }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
type NavLInksProps = {
  links: string[];
};
defineProps<NavLInksProps>();
</script>

<style scoped></style>
