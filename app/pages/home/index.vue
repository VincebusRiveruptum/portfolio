<script setup lang="ts">
import ExpSection from "@/components/home/sections/ExpSection.vue";
import MeSection from "@/components/home/sections/MeSection.vue";
import PersonalInfoSection from "@/components/home/sections/PersonalInfoSection.vue";
import ProjectsSection from "@/components/home/sections/ProjectsSection.vue";
import SkillsSection from "@/components/home/sections/SkillsSection.vue";
//import TechSection from "@/components/home/sections/TechSection.vue";
</script>

<template>
  <div class="relative h-full flex flex-col">
    <div class="fixed top-0 right-0 h-full z-[0] pointer-events-none">
      <img src="/bg-tubes.png" class="object-cover w-full dark:invert" />
    </div>
    <div class="relative flex flex-col z-[22]">
      <MeSection id="home" />
      <PersonalInfoSection id="personal-info" />
      <SkillsSection id="skills" />

      <!--
    <TechSection />
    -->
      <ExpSection id="experience" />
      <ProjectsSection id="projects" />
    </div>
  </div>
</template>
