<template>
  <div>
    <Suspense>
      <AtomsHeroText v-bind="heroData" />
    </Suspense>
  </div>
</template>

<script setup lang="ts">
defineProps({
  heroData: {},
});
</script>

<style scoped></style>
