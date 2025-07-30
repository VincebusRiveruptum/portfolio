<script setup lang="ts">
import { techs } from "@/constants/data";
import AppTechButton from "@/components/shared/AppTechButton.vue";
</script>
<template>
  <div class="flex flex-col gap-12 text-center px-4 sm:py-[5%] sm:px-[15%]">
    <h1>Tech Stack</h1>

    <div class="flex flex-col text-center items-center gap-4">
      <h3>Front-end</h3>

      <div class="flex flex-row gap-4">
        <AppTechButton size="xl" :tech="techs[8]" />
        <AppTechButton size="xl" :tech="techs[9]" />
        <AppTechButton size="xl" :tech="techs[14]" />
        <AppTechButton size="xl" :tech="techs[10]" />
        <AppTechButton size="xl" :tech="techs[3]" />
        <AppTechButton size="xl" :tech="techs[25]" />
      </div>
    </div>
    <div class="flex flex-col text-center items-center gap-4">
      <h3>Back-end</h3>

      <div class="flex flex-row gap-4">
        <AppTechButton size="xl" :tech="techs[2]" />
      </div>
    </div>
    <div class="flex flex-col text-center items-center gap-4">
      <h3>DB</h3>

      <div class="flex flex-row gap-4">
        <AppTechButton size="xl" :tech="techs[26]" />
      </div>
    </div>
    <div class="flex flex-col text-center items-center gap-4">
      <h3>Tools</h3>

      <div class="flex flex-row gap-4">
        <AppTechButton size="xl" :tech="techs[0]" />
        <AppTechButton size="xl" :tech="techs[24]" />
        <AppTechButton size="xl" :tech="techs[6]" />
      </div>
    </div>
  </div>
</template>
