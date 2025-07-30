<script setup lang="ts">
import { FrownIcon } from "lucide-vue-next";
import type { Tech } from "../../types/global";

import placeholder from "@/assets/placeholder.svg";

const props = defineProps<{
  tech: Tech;
  size?: string;
}>();
</script>

<template>
  <a
    :href="props.tech?.uri"
    class="w-8 h-8 aspect-square flex flex-row items-center justify-center"
    :class="{ 'w-24 h-24': size == 'xl' }"
  >
    <FrownIcon
      v-if="!props.tech?.icon && !props.tech?.logo"
      :alt="props.tech?.longName"
      class="hover:motion-preset-shake cursor-pointer"
    />

    <img
      v-if="typeof props.tech?.icon === 'string'"
      :src="props.tech?.icon ?? placeholder"
      :alt="props.tech?.longName"
      class="hover:motion-preset-shake w-full h-full object-contain cursor-pointer"
    />
  </a>
</template>
