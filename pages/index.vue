<script setup lang="ts">
import TheHero from "~~/components/molecule/TheHero.vue";
</script>

<template>
  <div>
    <TheHero></TheHero>
  </div>
  
  <MoleculesCardsSection></MoleculesCardsSection>
  
  <div>
    <TheHero class="isCenter"></TheHero>
  </div>
  <div>
    <AtomsRelatedPosts title="Editor's Pick"></AtomsRelatedPosts>
  </div>
</template>

<style scoped lang="scss"></style>
