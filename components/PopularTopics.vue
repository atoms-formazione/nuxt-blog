<script setup lang="ts">
import { AnyMxRecord } from "dns";
import { ref } from "vue";
import SingleTopic from "./SingleTopic.vue";

const data = ref(null);
await fetch("https://63e1285c65b57fe60652c60f.mockapi.io/Getdata")
  .then((res) => res.json())
  .then((json) => (data.value = json));

function formatted(time: any) {
  let formtime: Any;
  formtime = useDateFormat(time, "DD.MM.YYYY");
  return formtime;
}
const props = defineProps({
  clicked: String,
});
</script>

<template>
  <p class="text-4xl font-bold text-[#495057]">Popular Topics</p>
  <div class="flex text-xs font-bold gap-5 text-[#495057]">
    <p
      v-on:click="clicked = 'all'"
      class="{ active === 'all' ? 'text-[#d4a373]' : 'text-[#495057]' }"
    >
      All
    </p>
    <p
      (click)="active = 'adventure'"
      class="{ active === 'adventure' ? 'text-[#d4a373]' : 'text-[#495057]' }"
    >
      Adventure
    </p>
    <p
      (click)="active = 'travel'"
      class="{ active === 'travel' ? 'text-[#d4a373]' : 'text-[#495057]' }"
    >
      Travel
    </p>
    <p
      (click)="active = 'fashion'"
      class="{ active === 'fashion' ? 'text-[#d4a373]' : 'text-[#495057]' }"
    >
      Fashion
    </p>
    <p
      (click)="active = 'technology'"
      class="{ active === 'technology' ? 'text-[#d4a373]' : 'text-[#495057]' }"
    >
      Technology
    </p>
    <p
      (click)="active = 'branding'"
      class="{ active === 'branding' ? 'text-[#d4a373]' : 'text-[#495057]' }"
    >
      Branding
    </p>
  </div>
  <pre>{{ data }}</pre>
  <div>
    <SingleTopic
      v-for="topic in data?.topics"
      v-bind:key="topic.id"
      :image="topic.image"
      :tag="topic.tag"
      :date="formatted(topic.publish_date)"
      :title="topic.title"
      :text="topic.description"
    />
  </div>
</template>
