<script setup lang="ts">
import TheHero from "~~/components/molecules/TheHero.vue";
</script>

<template>
  <div>
    <TheHero></TheHero>
  </div>

  <MoleculesCardsSection></MoleculesCardsSection>

  <div>
    <TheHero :hero-data="{ textAlign: 'center' }" />
  </div>
  <div>
    <AtomsRelatedPosts title="Editor's Pick"></AtomsRelatedPosts>
  </div>
</template>

<style scoped lang="scss"></style>
