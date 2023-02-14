<script setup lang="ts">
import TheHero from "~~/components/molecules/TheHero.vue";
</script>

<template>
  <div>
    <AtomsTheHero />
  </div>

  <MoleculesCardsSection></MoleculesCardsSection>

  <div>
    <AtomsTheHero :hero-data="{ textAlign: 'center' }" />
  </div>
  <div>
    <AtomsRelatedPosts title="Editor's Pick"></AtomsRelatedPosts>
  </div>
</template>

<style scoped lang="scss"></style>
