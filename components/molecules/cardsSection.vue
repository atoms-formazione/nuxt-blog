<template>
  <div class="m-4 mt-[10%]">
    <h1 class="font-serif font-bold text-4xl text-title-gray ml-12">
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
    class="ml-12 mt-4"
    >
    </AtomsCardsNavBar>
    <div class="m-auto">
      <AtomsSingleCard></AtomsSingleCard>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
