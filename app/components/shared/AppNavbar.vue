<script setup lang="ts">
import logo from "@/assets/logo.png";

import AppNavLinks from "./AppNav/AppNavLinks.vue";
import type { NavLink } from "../../types/global";
import { useRoute } from "vue-router";
import { onMounted, ref } from "vue";
import { useColorMode } from "@vueuse/core";
import { LightbulbIcon, LightbulbOffIcon } from "lucide-vue-next";

const route = useRoute();

const props = defineProps<{
  currentOffset?: number;
}>();

const mainSection = ref<HTMLElement | null>();

const mode = useColorMode();

const navLinks: NavLink[] = [
  {
    title: "Home",
    name: "home",
    type: "scroll",
    route: {
      path: "/home",
    },
    active: false,
  },
  {
    title: "Personal Information",
    name: "personal-info",
    type: "scroll",
    route: {
      path: "/home",
    },
    active: false,
  },
  {
    title: "Skills",
    name: "skills",
    type: "scroll",
    route: {
      path: "/home",
    },
    active: false,
  },
  {
    title: "Experience",
    name: "experience",
    type: "scroll",
    route: {
      path: "/home",
    },
    active: false,
  },
  {
    title: "Projects",
    name: "projects",
    type: "scroll",
    route: {
      path: "/home",
    },
    active: false,
  },
  {
    title: "Contact",
    name: "contact",
    type: "route",
    route: {
      path: "/contact",
    },
    active: false,
  },
];

const scrollUp = () => {
  if (mainSection.value)
    mainSection.value.scrollTo({ top: 0, behavior: "smooth" });
};

onMounted(() => {
  mainSection.value = document.getElementById("main");
});
</script>
<template>
  <div
    class="relative flex flex-row bg-background items-center gap-4 justify-between h-[90px] shadow-center-sm py-2 px-[8%]"
  >
    <div class="flex flex-row">
      <img
        class="w-14 aspect-square dark:invert"
        :src="logo"
        alt="vincebus-logo"
      />
    </div>

    <div class="flex flex-row gap-8">
      <AppNavLinks
        class="hidden sm:flex"
        :current-offset="props.currentOffset"
        :links="navLinks"
      />

      <div class="sm:hidden flex gap-8">
        <NuxtLink
          v-if="$route.path == '/home'"
          :to="{ ...navLinks[5].route }"
          class="btn-primary font-semibold !bg-purple-500"
          @click="scrollUp()"
        >
          Contact
        </NuxtLink>

        <NuxtLink
          v-if="$route.path == '/contact'"
          :to="{ ...navLinks[1].route }"
          class="btn-primary font-semibold !bg-purple-500"
          @click="scrollUp()"
        >
          Home
        </NuxtLink>

        <button @click="mode = mode === 'dark' ? 'light' : 'dark'">
          <LightbulbIcon v-if="mode === 'dark'" />
          <LightbulbOffIcon v-if="mode === 'light'" />
        </button>
      </div>
    </div>
  </div>
</template>
