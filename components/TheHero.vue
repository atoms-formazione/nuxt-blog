<template lang="">
    <div>
    <div class="relative">
        <img src="~/assets/TheHero.png" class="object-cover mix-blend-overlay" />
        <TheHeader />
        <div class="absolute top-5 left-5 md:top-80 md:left-20" >
            <Tag :tag="'ADVENTURE'" class="font-bold"/>
            <div class="text-white not-italic text-3xl font-bold">Richird Norton photorealistic <br> rendering as real photos</div>
            <div class="flex">
                 <p  class="text-white"> 08.08.2021</p>
                 <hr class="w-[30px] text-white px-2 m-3" />
                 <p class="text-white line-clamp-2"> {{ response.description }}</p>
            </div>
        </div>
    </div>
    </div>
</template>
<script setup>
const response = await fetch(
  "https://63e1285c65b57fe60652c60f.mockapi.io/Getdata/1"
).then((res) => res.json());
</script>
<style lang="">
    
</style>