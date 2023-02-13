<template>
    <div class="h-5 w-5">
      <img :src="icon" alt="Icon-Social">
    </div>
</template>
<script setup lang="ts">
    type IconProps = {
    icon: string;
};
const props = defineProps<IconProps>();
</script>
