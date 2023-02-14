<script setup lang="ts">
import TheHero from "~~/components/molecules/TheHero.vue";
</script>

<template>
  <div>
    <TheHero></TheHero>
  </div>

  <MoleculesCardsSection></MoleculesCardsSection>

  <div>
    <TheHero textAlign="isCenter"></TheHero>
  </div>
  <div>
    <AtomsRelatedPosts title="Editor's Pick"></AtomsRelatedPosts>
  </div>
</template>

<style scoped lang="scss"></style>
