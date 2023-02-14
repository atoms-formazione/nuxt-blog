<script setup lang="ts">
import Facebook from "../icons/facebook.svg";
import Twiter from "../icons/twitter.svg";
import Youtube from "../icons/youtube.svg";
import Pinterest from "../icons/pinterest.svg";
import Behance from "../icons/behance.svg";
const links = reactive([
  { name: "Home" },
  { name: "About" },
  { name: "Articles" },
  { name: "Contact Us" },
]);
</script>

<template>
  <header
    class="max-w-full h-12 md:flex justify-between items-center text-white absolute left-0 top-0 w-full"
  >
    <div class="absolute w-full h-full z-10 opacity-20 bg-black"></div>
    <div class="flex justify-between w-full px-10 gap-8 z-20 p-[20px] bg-transparent">
      <HeaderLogo />
      <nav class="hidden md:flex gap-10">
        <ul class="flex flex-none gap-10">
          <li
            v-for="{ name } in links"
            :key="name"
            class="cursor-pointer underline-offset-2 decoration-amber-600"
          >
            <a href="/">{{ name }}</a>
          </li>
        </ul>
        <span>|</span>
        <div class="md:flex w-full h-4 gap-3">
          <HeaderLogoSocial :icon="Facebook" class="cursor-pointer" />
          <HeaderLogoSocial :icon="Twiter" class="cursor-pointer" />
          <HeaderLogoSocial :icon="Youtube" class="cursor-pointer" />
          <HeaderLogoSocial :icon="Pinterest" class="cursor-pointer" />
          <HeaderLogoSocial :icon="Behance" class="cursor-pointer" />
        </div>
        <span>|</span>
        <div class="xs:hidden">
          <HeaderSearchIcon class="cursor-pointer" />
        </div>
      </nav>
      <div class="w-10 bg-transparent text-slate-400 mr-12 md:hidden">
        <select name="menu" id="menu" class="relative z-30">
          <option
            value="name"
            v-for="{ name } in links"
            :key="name"
            class="text-grey"
          >
            {{ name }}
          </option>
        </select>
      </div>
    </div>
  </header>
</template>
