<script setup lang="ts">
interface Article {
  title: string;
  description: string;
  image: string;
  publish_date: number;
  tag: string;
  id: string;
}

const prop = defineProps<Article>();

function truncate(val: string, len: number) {
  if (val.length > len) {
    return val.substring(0, len) + "...";
  } else {
    return val;
  }
}

/*Object.keys("truncate").forEach((text: string, stop: number, clamp: string) => {
  return text.slice(0, stop) + (stop < text.length ? clamp || "..." : "");
});*/
/*Vue.filter("truncate", function (text: string, stop: number, clamp: string) {
  return text.slice(0, stop) + (stop < text.length ? clamp || "..." : "");
});*/
</script>

<template>
  <div class="w-5/6 h-80 lg:w-[31%] rounded-md cursor-pointer hover:opacity-80">
    <div
      class="relative bg-cover bg-center bg-img editors-pick1 h-full rounded-md"
      :style="{ backgroundImage: prop.image }"
    >
      <div
        class="absolute right-5 top-5 p-2 rounded-lg w-fit bg-white/25 h-fit"
      >
        <h4 class="text-xs font-bold text-white">{{ prop.tag }}</h4>
      </div>
      <div class="text-white p-6 lg:p-10 absolute bottom-0">
        <small class="text-xs font-normal">{{ prop.publish_date }}</small>
        <h3 class="text-lg font-bold">
          {{ truncate(prop.title, 60) }}
        </h3>
        <p class="text-xs font-normal">
          {{ truncate(prop.description, 150) }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg-img {
  background-image: url(../assets/BlogImage1.png);
}
</style>
