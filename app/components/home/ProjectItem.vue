<script setup lang="ts">
import { defineProps } from "vue";
import type { Project } from "@/types/global";
import placeholder from "@/assets/placeholder.svg";
import AppTechButton from "@/components/shared/AppTechButton.vue";

const props = defineProps<{
  data: Project;
}>();
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-16">
    <div
      class="rounded-xl shadow-xl mx-auto w-[80%] aspect-square dark:border-4  dark:border-white/50 dark:shadow-none !z-0"
      :class="[props.data.background]"
    >
      <img
        :src="props?.data.pictures ? props?.data.pictures[0] : placeholder"
        class="w-full h-full object-contain z-[50]"
      />
    </div>

    <div class="flex flex-col gap-8">
      <h2 class="text-center sm:text-left">{{ props.data.title }}</h2>
      <div
        class="flex flex-row flex-wrap justify-center sm:justify-start gap-4"
        v-if="props.data.techStack && props.data.techStack?.length > 0"
      >
        <AppTechButton
          v-for="(tech, i) in props.data.techStack"
          :tech="tech"
          :key="i + '-tech'"
        />
      </div>
      <p class="text-center sm:text-left">
        <span v-html="props.data.description"></span>
      </p>
    </div>
  </div>
</template>
