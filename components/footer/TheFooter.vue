
<script setup lang="ts">
import Facebook from "../icons/facebook.svg"
import Twiter from "../icons/twitter.svg"
import Youtube from "../icons/youtube.svg"
import Pinterest from "../icons/pinterest.svg"
import Behance from "../icons/behance.svg"

</script>



<template>
  <footer>
    <div class="sm:flex block md:flex justify-between px-10 bg-[#212529] pt-10 ">
      <FooterComponent 
      :title="'Contact the Publisher'" 
      :item1="'mike@runo.com'" 
      :item2="'+944 450 904 505'"/>
      <FooterComponent 
      :title="'Explorate'" 
      :item1="'About'" 
      :item2="'Partners'"
      :item3="'Job Opportunities'"
      :item4="'Advertise'"
      :item5="'Membership'" />
      <FooterComponent 
      :title="'Headquarter'" 
      :item1="'191 Middleville Road, NY 1001, Sydney Australia'"
      />
      <div class="">
       <h3 class="text-white font-bold">Connections</h3>
       <br>
        <div class="flex justify-center gap-3 pr-5">
          <HeaderLogoSocial :icon="Facebook" class="cursor-pointer" />
          <HeaderLogoSocial :icon="Twiter" class="cursor-pointer" />
          <HeaderLogoSocial :icon="Youtube" class="cursor-pointer" />
          <HeaderLogoSocial :icon="Pinterest" class="cursor-pointer" />
          <HeaderLogoSocial :icon="Behance" class="cursor-pointer" />
        </div>
      </div>
    </div>
    <div class="sm:flex block text-[#E5E5E5] bg-[#343A40]  px-10 md:flex justify-between">
      <p>2021 | RUNO Publisher Studio</p>
      <p>Subscribe Now</p>
    </div>
  </footer>
</template>
