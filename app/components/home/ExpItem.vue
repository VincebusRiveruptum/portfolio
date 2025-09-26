<script setup lang="ts">
import { defineProps } from "vue";
import type { CareerExperience } from "~/types/global";

const props = defineProps<{
  data: CareerExperience;
}>();
</script>

<template>
  <div class="flex flex-col gap-8">
    <div class="flex justify-between gap-8">
      <h3>
        {{ $t(props.data.position) }} |
        <a :href="props.data.company?.url ?? '#'">{{
          props.data.company.name
        }}</a>
      </h3>
      <h4 class="!font-semibold !text-black/80">
        {{ formatDate(props.data.start_date, "long") }}
        {{
          props.data.end_date
            ? `- ${formatDate(props.data.end_date, "long")}`
            : ` - ${$t("current_position")}`
        }}
      </h4>
    </div>
    <div>
      <ul class="flex flex-col gap-8 mx-8">
        <li v-for="section in props.data.content.sections">
          {{ section }}
        </li>
      </ul>
    </div>
  </div>
</template>
