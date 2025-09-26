<script setup lang="ts">
import ExpItem from "@/components/home/ExpItem.vue";

const { expList } = useExperience();
</script>
<template>
  <div
    class="flex flex-col bg-background gap-12 p-12 sm:pb-[10%] sm:py-[5%] sm:px-[15%]"
  >
    <h1>Experience</h1>

    <div class="flex flex-col gap-18">
      <ExpItem v-for="exp in expList" :data="exp" :key="exp" />
    </div>
  </div>
</template>
