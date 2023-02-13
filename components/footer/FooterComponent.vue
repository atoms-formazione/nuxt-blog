<template>
    <div class="w-[200px] h-[200px] text-white">
        <h4 class="font-bold mb-3">{{ title }}</h4>
        <p class="cusor-pointer">{{ item1 }}</p>
        <p class="cusor-pointer">{{ item2 }}</p>
        <p class="cusor-pointer">{{ item3 }}</p>
        <p class="cusor-pointer">{{ item4 }}</p>
        <p class="cusor-pointer">{{ item5 }}</p>
    </div>
</template>
<script setup lang="ts">
    type FooterProps = {
    title: string;
    item1: string;
    item2: string;
    item3: string;
    item4: string;
    item5: string;
};
const props = defineProps<FooterProps>();
</script>
<style></style>