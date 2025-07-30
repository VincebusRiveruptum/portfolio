<script setup lang="ts">
import {
  CoffeeIcon,
  HandMetalIcon,
  LightbulbIcon,
  ShapesIcon,
} from "lucide-vue-next";
</script>

<template>
  <div class="flex flex-col gap-12 bg-background p-12 sm:py-[5%] sm:px-[15%]">
    <h1>Personal information</h1>

    <div class="flex flex-col gap-18">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div class="col-span-2 flex flex-col gap-2 w-full">
          <h2>Degree</h2>
          <p>Pontificia Universidad Católica de Valparaíso</p>
          <p class="text-sm">
            Degree: "Ingeniero en Ejecución Informática" (2016 - december 2023)
          </p>
        </div>

        <div class="flex flex-col gap-2 w-full">
          <h2>Address</h2>
          <p>Valparaíso, Chile</p>
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-4 gap-8">
        <div class="flex flex-col gap-4">
          <LightbulbIcon />
          <h3>Generalist</h3>
          <p>
            I always try to reach the root of things and problems. Also, KISS
          </p>
        </div>
        <div class="flex flex-col gap-4">
          <ShapesIcon />
          <h3>Adaptability</h3>
          <p>I can get into anything</p>
        </div>
        <div class="flex flex-col gap-4">
          <CoffeeIcon />
          <h3>Resilency</h3>
          <p>Its our job to solve problems</p>
        </div>
        <div class="flex flex-col gap-4">
          <HandMetalIcon />
          <h3>Motivated</h3>
          <p>About code anything can be fun for me</p>
        </div>
      </div>
    </div>
  </div>
</template>
