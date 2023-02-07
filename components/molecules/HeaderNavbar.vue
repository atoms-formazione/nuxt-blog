<template>
  <div class="w-full font-bold font-tag">
    <ul
      class="list-none flex flex-col items-center h-1/8 md:flex-row md:gap-8 px-10"
    >
      <li
        v-for="l of navLinks"
        class="hover:border-b-4 hover:border-b-active-gold hover:border-solid md:text-xs w-fit text-center max-w-max"
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
* {
  border: solid 1px black;
}
</style>
