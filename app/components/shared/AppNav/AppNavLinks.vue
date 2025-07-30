<script setup lang="ts">
import { type NavLink } from "@/types/global";
import AppNavlink from "./AppNavlink.vue";
import { ref } from "vue";

const props = defineProps<{
  links: NavLink[];
  currentOffset?: number;
}>();

const linkRefs = ref<NavLink[]>([...props.links]);

const currentSection = ref<HTMLElement | null>();

const currentLink = ref<NavLink | null>();

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
  </div>
</template>
