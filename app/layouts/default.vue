<script setup lang="ts">
import { Observer } from "tailwindcss-intersect";
import "animate.css";

import AppNavbar from "@/components/shared/AppNavbar.vue";
import AppFooter from "@/components/shared/AppFooter.vue";
import { onMounted, useTemplateRef, watch } from "vue";

import { useScroll } from "@vueuse/core";

const mainWindow = useTemplateRef<HTMLElement>("main");
const { isScrolling, y } = useScroll(mainWindow);
const hideNavbar = ref<boolean>(false);

let timeout: ReturnType<typeof setTimeout> | null = null;

watch(
  () => isScrolling.value,
  (newValue) => {
    if (newValue === true) {
      hideNavbar.value = true;
    } else {
      if (timeout) clearTimeout(timeout);

      timeout = setTimeout(() => {
        hideNavbar.value = false;
      }, 1000);
    }
  }
);

onMounted(() => {
  Observer.start();
});
</script>

<template>
  <div class="relative flex flex-col h-screen overflow-clip bg-background">
    <AppNavbar
      :current-offset="y"
      :class="[
        hideNavbar ? 'sm:-translate-y-2' : '',
        'transition-all duration-500 delay-100 absolute !z-25 top-0',
      ]"
    />
    <div
      id="main"
      ref="main"
      class="relative flex flex-col h-full overflow-auto -mt-2"
    >
      <div
        class="absolute top-0 right-0 h-full bg-gradient-to-b from-transparent to-blue-50 pointer-events-none !z-50"
      ></div>
      <div class="grow">
        <NuxtPage />
      </div>
      <AppFooter class="z-20" />
    </div>
  </div>
</template>
