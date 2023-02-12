<script lang="ts" setup>
interface Article {
  title: string;
  description: string;
  image: string;
  publish_date: Date;
  tag: string;
  id: string;
}

const prop = defineProps<Article>();
</script>

<template>
  <div class="p-2 max-w-4xl m-auto relative">
    <div class="xl:absolute -left-44 top-3 mb-6">
      <p class="text-[#495057] font-bold text-sm inline-block">
        {{ publish_date.getDate() }}.{{ publish_date.getMonth() + 1 }}.{{
          publish_date.getFullYear()
        }}
      </p>
      <hr
        class="w-8 pb-1 mx-2 inline-block border-[#C4C4C4] border-solid border-t-[1px]"
      />
      <p class="text-[#495057] font-bold text-sm inline-block">
        {{ publish_date.getHours() }}.{{ publish_date.getMinutes() }} h
      </p>
    </div>
    <div class="">
      <h2 class="font-bold text-[#d4a373] text-4xl mb-12">"{{ title }}"</h2>
      <p class="font-normal text-sm text-[#495057]">{{ description }}</p>
    </div>
  </div>
</template>

<style scoped></style>
