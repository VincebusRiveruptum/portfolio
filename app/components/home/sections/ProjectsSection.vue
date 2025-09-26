<script setup lang="ts">
import ProjectItem from "../ProjectItem.vue";
import { useProjects } from "@/composables/useProjects";
const { projects } = useProjects();
</script>
<template>
  <div
    class="flex flex-col gap-20 bg-background-secondary p-12 sm:py-[8%] sm:px-[15%]"
  >
    <h1>{{ $t("projects") }}</h1>
    <div class="flex flex-col gap-20">
      <ProjectItem
        v-for="(project, i) in projects"
        :key="'project' + i"
        :data="project"
      />
    </div>
  </div>
</template>
