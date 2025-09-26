<script setup lang="ts">
import { techs } from "@/constants/data";
import AppTechButton from "@/components/shared/AppTechButton.vue";
import SkillItem from "../SkillItem.vue";

const { skills } = useSkills();
</script>

<template>
  <div
    class="flex flex-col gap-16 bg-background-secondary p-12 sm:py-[5%] sm:px-[15%]"
  >
    <h1>{{ $t("skills") }}</h1>

    <div class="flex flex-col gap-8">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div class="flex flex-col gap-16">
          <SkillItem v-for="skill in skills" :key="skill" :data="skill" />
        </div>

        <div class="flex flex-row flex-wrap justify-center gap-4">
          <AppTechButton
            size="xl"
            :tech="techs[8]"
            class="intersect:motion-preset-slide-up motion-delay-50"
          />
          <AppTechButton
            size="xl"
            :tech="techs[9]"
            class="intersect:motion-preset-slide-up motion-delay-150"
          />
          <AppTechButton
            size="xl"
            :tech="techs[14]"
            class="intersect:motion-preset-slide-up motion-delay-250"
          />
          <AppTechButton
            size="xl"
            :tech="techs[10]"
            class="intersect:motion-preset-slide-up motion-delay-300"
          />
          <AppTechButton
            size="xl"
            :tech="techs[3]"
            class="intersect:motion-preset-slide-up motion-delay-450"
          />
          <AppTechButton
            size="xl"
            :tech="techs[25]"
            class="intersect:motion-preset-slide-up motion-delay-500"
          />
          <AppTechButton
            size="xl"
            :tech="techs[2]"
            class="intersect:motion-preset-slide-up motion-delay-700"
          />
          <AppTechButton
            size="xl"
            :tech="techs[26]"
            class="intersect:motion-preset-slide-up motion-delay-780"
          />
          <AppTechButton
            size="xl"
            :tech="techs[0]"
            class="intersect:motion-preset-slide-up motion-delay-890"
          />
          <AppTechButton
            size="xl"
            :tech="techs[24]"
            class="intersect:motion-preset-slide-up motion-delay-1000"
          />
          <AppTechButton
            size="xl"
            :tech="techs[6]"
            class="intersect:motion-preset-slide-up motion-delay-1100"
          />
        </div>
      </div>
    </div>
  </div>
</template>
