<script setup lang="ts">
import type { Skill } from "~/types/global";

const props = defineProps<{
  data: Skill;
}>();
</script>

<template>
  <div class="flex flex-col gap-8 text-center sm:text-left">
    <h2>{{ $t(props.data.title) }}</h2>
    <p v-if="props.data.content.body">{{ props.data.content.body }}</p>
    <div class="flex flex-col gap-4">
      <div v-if="props.data.content.sections" class="flex flex-col gap-8 mx-8">
        <ul v-for="section in props.data.content.sections" :key="section">
          <li>
            <span class="font-semibold">
              {{ section.name ? `${$t(section.name)} :` : "" }}
            </span>
            {{ section.content }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
