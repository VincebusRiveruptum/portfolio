<script setup lang="ts">
import { defineProps } from "vue";
import type { Tech } from "@/types/global";
import placeholder from "@/assets/placeholder.svg";
import AppTechButton from "@/components/shared/AppTechButton.vue";

const props = defineProps<{
  pictures?: Array<any>;
  title: string;
  description: string;
  background?: string;
  techStack?: Tech[];
}>();
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-16">
    <div
      class="rounded-xl shadow-xl mx-auto w-[80%] aspect-square dark:border-4 dark:border-white/50 dark:shadow-none"
      :class="[props.background]"
    >
      <img
        :src="props?.pictures ? props?.pictures[0] : placeholder"
        class="w-full h-full object-contain"
      />
    </div>

    <div class="flex flex-col gap-8">
      <h2 class="text-center sm:text-left">{{ props.title }}</h2>
      <div
        class="flex flex-row flex-wrap justify-center sm:justify-start gap-4"
        v-if="techStack && techStack?.length > 0"
      >
        <AppTechButton
          v-for="(tech, i) in techStack"
          :tech="tech"
          :key="i + '-tech'"
        />
      </div>
      <p class="text-center sm:text-left">{{ props.description }}</p>
    </div>
  </div>
</template>
