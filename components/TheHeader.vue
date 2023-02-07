<template>
  <header
    class="absolute top-0 left-0 right-0 bg-[#000000]/20 text-text-white py-10 md:py-9 flex flex-col md:flex-row md:items-center md:justify-between px-10 md:px-17.5"
  >
    <AtomsLogoIcon />
    <div class="w-full flex flex-col md:flex-row">
      <MoleculesHeaderNavbar />
      <hr class="w-full h-px bg-text-white md:hidden" />
      <div class="hidden text-m md:block">|</div>
      <MoleculesHeaderIcons />
    </div>
  </header>
</template>

<script setup lang="ts"></script>

<style scoped></style>
