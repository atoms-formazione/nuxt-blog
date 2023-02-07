<script setup lang="ts">
 import Facebook from "../icons/facebook.svg"
 import Twiter from "../icons/twitter.svg"
 import Youtube from "../icons/youtube.svg"
 import Pinterest from "../icons/pinterest.svg"
  import Behance from "../icons/behance.svg"
const links = reactive([
  { name: 'Home', isActive: true },
  { name: 'About' },
  { name: 'Articles' },
  { name: 'Contact Us' },
  { name: 'Menu' },
])
</script>

<template>
    <header class="flex justify-between px-10 py-10 items-center">
    <div class="flex justify-between gap-8">
      <a href="/" class=" h-2 w-6 mr-8 font-Spartan">
        RUNO
      </a>

      <nav class="hidden md:block">
        <ul class="flex gap-8">
          <li v-for="{ name, isActive } in links" :key="name" class="text-grey" :class="{ 'text-black': isActive }">
            <a href="/">{{ name }}</a>
          </li>
        </ul>
      </nav>
       <HeaderLogoSocial :icon="Facebook" />
       <HeaderLogoSocial :icon="Twiter" />
       <HeaderLogoSocial :icon="Youtube" />
       <HeaderLogoSocial :icon="Pinterest" />
       <HeaderLogoSocial :icon="Behance" />
      <div>
      <HeaderSearchIcon></HeaderSearchIcon>
      </div>
    </div>  
  </header>
</template>
