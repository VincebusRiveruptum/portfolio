<script setup lang="ts">
import { techs } from "@/constants/data";
import AppTechButton from "@/components/shared/AppTechButton.vue";
</script>

<template>
  <div class="flex flex-col gap-12 bg-background-secondary p-12 sm:py-[5%] sm:px-[15%]">
    <h1>Skills</h1>

    <div class="flex flex-col gap-8">
      <h3>Web dev.</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div class="flex flex-col gap-8">
          <ul>
            <li>Back-end : Laravel, MVC architecture</li>
            <li>Front-end: Vue 2/3, Pinia, Blade, DOM</li>
            <li>UI Libraries: Tailwind-CSS, Shadcn, Bootstrap</li>
          </ul>

          <h3>Databases</h3>

          <p>SQL Database management, MySQL, Postgresql</p>

          <h3>Documentation</h3>

          <ul>
            <li>Relational data modeling</li>
            <li>Basic knowledge of BPMN, UML and E-R Diagrams</li>
          </ul>

          <h3>Languajes</h3>

          <ul>
            <li>English-intermediate</li>
          </ul>
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
