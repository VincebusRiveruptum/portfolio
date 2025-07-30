<script setup lang="ts">
import logoWhite from "@/assets/logo_white.png";

const scrollTop = () => {
  const mainSection = document.getElementById("main");
  if (mainSection) mainSection.scrollTo({ top: 0, behavior: "smooth" });
};
</script>

<template>
  <div
    class="flex flex-col items-center sm:flex-row sm:justify-between gap-8 p-8 sm:px-[4%] sm:py-[2%] w-full h-[500px] bg-background-tertiary text-white"
  >
    <div class="flex flex-row items-center gap-4">
      <img :src="logoWhite" alt="vincebus-logo" class="aspect-square w-20" />
      <h3>Vincebus</h3>
    </div>

    <div class="flex flex-row items-center">
      <p class="text-center sm:text-left">
        (c) {{ new Date().getFullYear() }} - Vincebus Riveruptum, All rights
        reserved.
      </p>
    </div>

    <div class="flex flex-row items-center">
      <button class="hover:scale-105 transition-all" @click="scrollTop()">
        Back to top
      </button>
    </div>
  </div>
</template>
