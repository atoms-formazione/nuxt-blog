<script setup lang="ts">
const formatted = useDateFormat('1675700830', 'DD.MM.YYYY')
</script>

<template>
  <p class="text-4xl font-bold text-[#495057]">Popular Topics</p>
  <div>
    <SingleTopic
      :image="'https://loremflickr.com/640/480/city'"
      :tag="'Cameroon'"
      :date="formatted"
      :title="'Ipsum repellendus tempora fugiat. Officia corporis eum beatae quasi saepe tempora. A eos necessitatibus accusantium illo ipsam.'"
      :text="'Consectetur saepe fugit perspiciatis magnam aspernatur veritatis qui provident. Quisquam rem laudantium aperiam facere. Non quos cupiditate ipsum non maxime aliquam consectetur facilis. Culpa asperiores doloremque praesentium magni. Sunt inventore earum error quam amet quis.\nAt nobis iure expedita nesciunt deleniti provident corporis mollitia. Ab quos et expedita cumque natus voluptas consectetur repellendus. Asperiores exercitationem atque non suscipit fugit.\nAutem accusamus quis delectus nam culpa architecto dolores animi. Libero sed voluptatibus. Itaque tempora nesciunt laudantium vero suscipit. Illum laudantium fugit odio consectetur eveniet quos facilis laudantium aliquam. Amet consequuntur iste iste illum deleniti. Assumenda veniam in assumenda ipsum.'"
    />
  </div>
</template>