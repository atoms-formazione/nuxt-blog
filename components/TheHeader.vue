<template>
  <header
    class="absolute top-0 left-0 right-0 bg-[#000000]/40 text-text-white py-10 md:py-9 flex flex-col md:flex-row md:items-center lg:justify-between px-10 md:px-17.5"
  >
    <AtomsLogoIcon />
    <div class="w-full flex flex-col lg:flex-row lg:justify-end">
      <MoleculesHeaderNavbar />
      <hr class="w-full h-px bg-text-white md:hidden" />
      <AtomsVerticalSeparator />
      <MoleculesHeaderIcons />
    </div>
  </header>
</template>

<script setup lang="ts"></script>

<style scoped></style>
