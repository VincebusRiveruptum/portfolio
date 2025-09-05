<script setup lang="ts">
import { type NavLink } from "@/types/global";
import AppNavlink from "./AppNavlink.vue";
import { ref } from "vue";
import {
  LightbulbIcon,
  LightbulbOffIcon,
  LanguagesIcon,
} from "lucide-vue-next";
import { useColorMode } from "@vueuse/core";
import AppDropdown from "../AppDropdown.vue";

const props = defineProps<{
  links: NavLink[];
  currentOffset?: number;
}>();

const linkRefs = ref<NavLink[]>([...props.links]);

const currentSection = ref<HTMLElement | null>();

const currentLink = ref<NavLink | null>();

const mode = useColorMode();

const { locales, setLocale } = useI18n();

const setActive = (index: number) => {
  linkRefs.value.forEach((link: NavLink, i: number) => {
    if (index === i) {
      link.active = true;

      currentSection.value = document.getElementById(link.name);
      currentLink.value = { ...link };

      if (currentSection.value) {
        currentSection.value.scrollIntoView({ behavior: "smooth" });
      }

      if (link.type == "route") {
        const mainSection = document.getElementById("main");
        if (mainSection) mainSection.scrollTo({ top: 0, behavior: "smooth" });
      }
    } else {
      link.active = false;
    }
  });
};
</script>

<template>
  <div class="flex flex-row items-center gap-8 w-full">
    <AppNavlink
      ref="navLinks"
      v-for="(link, i) in linkRefs"
      :title="link.title"
      :type="link.type"
      :to="link.route"
      :key="i"
      :active="link.active"
      @click="setActive(i)"
    />

    <button
      class="hover:scale-105 transition-all"
      @click="mode = mode === 'dark' ? 'light' : 'dark'"
    >
      <LightbulbIcon v-if="mode === 'dark'" />
      <LightbulbOffIcon v-if="mode === 'light'" />
    </button>

    <AppDropdown>
      <template #button>
        <LanguagesIcon />
      </template>
      <template #items>
        <ul
          v-for="locale in locales"
          @click="setLocale(locale.code)"
          class="hover:bg-purple-50 px-4 py-2 transition-all cursor-pointer dark:hover:bg-gray-500 dark:hover:text-white"
        >
          {{
            locale.name
          }}
        </ul>
      </template>
    </AppDropdown>
  </div>
</template>
