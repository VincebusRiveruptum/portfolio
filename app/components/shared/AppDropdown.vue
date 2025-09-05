<script setup lang="ts">
import { onClickOutside } from "@vueuse/core";
import { useTemplateRef } from "vue";
import { ref } from "vue";

const dropdownRef = useTemplateRef("dropdown");
const show = ref<boolean>(false);
const toggleDropdown = () => {
  show.value = !show.value;
};
onClickOutside(dropdownRef, () => (show.value = false));
</script>

<template>
  <div class="relative">
    <button
      class="flex items-center hover:scale-105 transition-all"
      @click="toggleDropdown()"
      type="button"
    >
      <slot name="button"></slot>
    </button>
    <ul
      ref="dropdown"
      class="absolute top-8 right-0 z-20 flex flex-col bg-background shadow-md rounded-lg transition-all font-semibold"
      :class="{ hidden: !show }"
      @click="toggleDropdown()"
    >
      <slot name="items"></slot>
    </ul>
  </div>
</template>
