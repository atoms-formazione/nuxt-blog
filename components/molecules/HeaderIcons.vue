<template>
  <div
    class="flex place-content-evenly lg:border-left lg:border-text-white lg:px-6 lg:gap-6"
  >
    <AtomsSocialIcon v-for="i in socialMediaIconProps" v-bind="i" />
  </div>
</template>

<script setup lang="ts">
defineProps({
  socialMediaIconProps: Array,
});

const socialMediaIconProps = [
  {
    iconUrl: "/images/icons/facebook.svg",
    urlPath: "https://it-it.facebook.com/",
  },
  {
    iconUrl: "/images/icons/twitter.svg",
    urlPath: "https://twitter.com",
  },
  {
    iconUrl: "/images/icons/youtube.svg",
    urlPath: "https://youtube.com",
  },
  {
    iconUrl: "/images/icons/pinterest.svg",
    urlPath: "https://www.pinterest.it/",
  },
  {
    iconUrl: "/images/icons/behance.svg",
    urlPath: "https://www.behance.net/",
  },
];
</script>

<style scoped></style>
