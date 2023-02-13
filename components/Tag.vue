<template>
    <div class="text-white bg-white/20 rounded-lg w-[95px] justify-center text-sm">
        <p>{{ tag }}</p>
    </div>
</template>
<script setup >
    const props = defineProps({
        tag: String,
    });
</script>
<style>
</style>