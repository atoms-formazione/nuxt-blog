<template>
  <div class="m-4">
    <h1 class="font-serif font-bold text-4xl text-title-gray">
      Popular Topics
    </h1>
    <AtomsCardsNavBar
      :links="[
        'All',
        'Adventure',
        'Travel',
        'Fashion',
        'Technology',
        'Branding',
      ]"
    >
    </AtomsCardsNavBar>
    <div class="m-auto">
      <AtomsSingleCard></AtomsSingleCard>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
