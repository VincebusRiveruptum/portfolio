<script setup lang="ts">
import { projects } from "@/constants/data";
import ProjectItem from "../ProjectItem.vue";
</script>
<template>
  <div class="flex flex-col gap-12 bg-background-secondary p-12 sm:py-[5%] sm:px-[15%]">
    <h1>Projects</h1>
    <div class="flex flex-col gap-16">
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
