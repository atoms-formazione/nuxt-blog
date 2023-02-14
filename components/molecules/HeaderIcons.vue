<template>
  <div class="flex justify-around md:border-left border-text-white md:px-12">
    <AtomsSocialIcon v-for="i in socialMediaIconProps" v-bind="i" />
  </div>
</template>

<script setup lang="ts">
defineProps({
  socialMediaIconProps: Array,
});

const socialMediaIconProps = [
  {
    iconUrl: "/assets/images/icons/facebook.svg",
    urlPath: "https://it-it.facebook.com/",
  },
  {
    iconUrl: "./assets/images/icons/pinterest-icon.png",
    urlPath: "https://it-it.facebook.com/",
  },
];
</script>

<style scoped></style>
