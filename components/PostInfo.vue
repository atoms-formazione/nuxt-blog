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
  <div class="p-2 max-w-4xl m-auto">
    <div class="flex gap-3 flex-wrap">
      <div class="border-[#E5E5E5] border-solid border-[1px] px-2 py-1 rounded">
        <h4 class="font-bold text-xs text-[#6C757D] font-roboto">{{ tag }}</h4>
      </div>
      <div class="border-[#E5E5E5] border-solid border-[1px] px-2 py-1 rounded">
        <h4 class="font-bold text-xs text-[#6C757D] font-roboto">PHOTO</h4>
      </div>
      <div class="border-[#E5E5E5] border-solid border-[1px] px-2 py-1 rounded">
        <h4 class="font-bold text-xs text-[#6C757D] font-roboto">DESIGN</h4>
      </div>
    </div>
    <hr class="w-full my-12 border-[#C4C4C4] border-solid border-t-[0.5px]" />
    <div class="flex justify-between flex-wrap content-around">
      <div>
        <img
          src="../assets/Ellipse 4.png"
          alt="Profile"
          class="inline-block mr-4 bg-transparent"
        />
        <div class="inline-block align-middle">
          <h3 class="font-bold text-xs text-[#495057]">By Jennifer Lawrence</h3>
          <p class="font-normal text-xs text-[#495057]">Thinker & Designer</p>
        </div>
      </div>
      <div class="flex gap-2 items-center">
        <div class="cursor-pointer">
          <img src="../assets/logos/Fb.svg" alt="Facebook" />
        </div>
        <div class="cursor-pointer">
          <img src="../assets/logos/Tw.svg" alt="Twitter" />
        </div>
        <div class="cursor-pointer">
          <img src="../assets/logos/Pn.svg" alt="Pinterest" />
        </div>
        <div class="cursor-pointer">
          <img src="../assets/logos/Be.svg" alt="Be" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
