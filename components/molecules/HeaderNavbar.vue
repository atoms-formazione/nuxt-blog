<template>
  <div class="w-fit font-bold font-tag item lg:px-6">
    <ul
      class="list-none flex flex-col items-center h-1/8 lg:flex-row lg:justify-center lg:gap-8 lg:px-0 px-10"
    >
      <li
        v-for="l of navLinks"
        class="lg:hover:border-b-4 lg:hover:border-b-active-gold lg:hover:border-solid w-fit text-center max-w-max lg:text-base"
      >
        <nuxt-link :to="l.linkPath" class="display-block">{{
          l.linkValue
        }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const navLinks = [
  {
    linkValue: "Home",
    linkPath: "/",
  },
  {
    linkValue: "About",
    linkPath: "/",
  },
  {
    linkValue: "Articles",
    linkPath: "/",
  },
  {
    linkValue: "Contact Us",
    linkPath: "/",
  },
];
</script>

<style scoped>
/* * {
  border: solid 1px black;
} */
</style>
