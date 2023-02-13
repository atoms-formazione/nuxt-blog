<script setup lang="ts"></script>

<template>
  <Suspense> <PopularTopics /> </Suspense>
  <Suspense>
    <EditorsPickSection>
      <template v-slot:title>
        <h2 class="text-4xl font-bold text-[#495057] mb-16">Editor’s Pick</h2>
      </template>
    </EditorsPickSection>
  </Suspense>
</template>

<style scoped lang="scss"></style>
