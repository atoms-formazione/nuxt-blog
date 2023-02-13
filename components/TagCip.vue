<script lang="ts" setup>
defineProps<{
  tag: string;
}>();
</script>

<template>
  <div class="p-2 rounded-lg w-fit bg-white/25 h-fit">
    <h4 class="text-xs font-bold text-white font-roboto">
      {{ tag.toUpperCase() }}
    </h4>
  </div>
</template>
