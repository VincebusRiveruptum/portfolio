<script setup lang="ts">
import ExpSection from "@/components/home/sections/ExpSection.vue";
import MeSection from "@/components/home/sections/MeSection.vue";
import PersonalInfoSection from "@/components/home/sections/PersonalInfoSection.vue";
import ProjectsSection from "@/components/home/sections/ProjectsSection.vue";
import SkillsSection from "@/components/home/sections/SkillsSection.vue";
//import TechSection from "@/components/home/sections/TechSection.vue";
</script>

<template>
  <div class="h-full flex flex-col">
    <MeSection id="home" />
    <PersonalInfoSection id="personal-info" />
    <SkillsSection id="skills" />

    <!--
    <TechSection />
    -->
    <ExpSection id="experience" />
    <ProjectsSection id="projects" />
  </div>
</template>
