<script setup lang="ts">
import { projects } from "@/constants/data";
import ProjectItem from "../ProjectItem.vue";
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
        :title="project?.title"
        :description="project?.description"
        :tech-stack="project?.techStack"
        :pictures="project?.pictures"
        :background="project?.background"
      />
    </div>
  </div>
</template>
