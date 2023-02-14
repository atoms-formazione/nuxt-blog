<script setup lang="ts">
import TheHero from "~~/components/molecule/TheHero.vue";
</script>

<template>
  <div>
    <TheHero></TheHero>
  </div>

  <MoleculesCardsSection></MoleculesCardsSection>

  <div>
<<<<<<< HEAD
    <TheHero :hero-data="{ textAlign: 'center' }" />
=======
    <TheHero textAlign="isCenter"></TheHero>
>>>>>>> 2e026231bc2260c4ad0f6d61fcf8593944046d6d
  </div>
  <div>
    <AtomsRelatedPosts title="Editor's Pick"></AtomsRelatedPosts>
  </div>
</template>

<style scoped lang="scss"></style>
