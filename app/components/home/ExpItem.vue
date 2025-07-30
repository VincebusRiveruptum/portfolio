<script setup lang="ts">
import { defineProps } from "vue";
const props = defineProps<{
  position: string;
  company: string;
  period: string;
}>();
</script>

<template>
  <div class="flex flex-col gap-8">
    <h3>{{ props.position }} | {{ props.company }} | {{ props.period }}</h3>
    <slot> </slot>
  </div>
</template>
