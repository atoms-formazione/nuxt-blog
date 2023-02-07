<template>
  <div class="flex justify-around">
    <AtomsSocialIcon v-for="i in socialMediaIconProps" v-bind="i" />
  </div>
</template>

<script setup lang="ts">
defineProps({
  socialMediaIconProps: Array,
});

const socialMediaIconProps = [
  {
    iconUrl: "/assets/images/icons/facebook-icon.svg",
    urlPath: "https://it-it.facebook.com/",
  },
  {
    iconUrl: "/assets/images/icons/pinterest-icon.png",
    urlPath: "https://it-it.facebook.com/",
  },
];
</script>

<style scoped></style>
