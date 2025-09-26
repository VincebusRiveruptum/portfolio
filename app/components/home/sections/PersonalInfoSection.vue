<script setup lang="ts">
import {
  CoffeeIcon,
  HandMetalIcon,
  LightbulbIcon,
  ShapesIcon,
} from "lucide-vue-next";
</script>

<template>
  <div class="flex flex-col gap-16 bg-background p-12 sm:py-[8%] sm:px-[15%]">
    <h1>{{ $t("personal-information") }}</h1>

    <div class="flex flex-col gap-16">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div class="col-span-2 flex flex-col gap-4 w-full">
          <h2>{{ $t("degree") }}</h2>
          <p>Pontificia Universidad Católica de Valparaíso</p>
          <p class="text-sm">
            {{ $t("degree") }}: "Ingeniero en Ejecución Informática" (2016 -
            december 2023)
          </p>
        </div>

        <div class="flex flex-col gap-4 w-full">
          <h2>{{ $t("address") }}</h2>
          <p>Valparaíso, Chile</p>
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-12">
        <div class="flex flex-col gap-4">
          <LightbulbIcon class="text-primary" />
          <h3>{{ $t("generalist") }}</h3>
          <p>
            {{ $t("generalist-paragraph") }}
          </p>
        </div>
        <div class="flex flex-col gap-4">
          <ShapesIcon class="text-primary" />
          <h3>{{ $t("adaptability") }}</h3>
          <p>{{ $t("adaptability-paragraph") }}</p>
        </div>
        <div class="flex flex-col gap-4">
          <CoffeeIcon class="text-primary" />
          <h3>{{ $t("resilency") }}</h3>
          <p>{{ $t("resilency-paragraph") }}</p>
        </div>
        <div class="flex flex-col gap-4">
          <HandMetalIcon class="text-primary"/>
          <h3>{{ $t("motivated") }}</h3>
          <p>{{ $t("motivated-paragraph") }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
