<script setup lang="ts">
import myself from "@/assets/me.png";
import cl from "@/assets/cl.png";
import { GithubIcon, LinkedinIcon } from "lucide-vue-next";
</script>

<template>
  <div class="relative">
    <div
      class="absolute left-0 top-0 h-full w-full !z-[0] overflow-clip mask-alpha mask-b-from-black mask-b-to-transparent "
    >
    </div>
    <div
      class="relative grid grid-cols-1 sm:grid-cols-2 gap-16 p-12 sm:py-[8%] sm:px-[15%] !z-[50]"
    >
      <div class="m-auto">
        <img
          class="w-[80%] m-auto aspect-square shadow-2xl dark:shadow-center rounded-xl"
          :src="myself"
          alt="yep thats me"
        />
      </div>

      <div class="flex flex-col gap-8">
        <h1 class="text-center sm:text-left">VICENTE RIVEROS GARAY</h1>
        <div class="flex flex-col sm:flex-row items-center gap-4">
          <img :src="cl" alt="Chile" class="w-8" />
          <h3>{{ $t("about-header") }}</h3>
        </div>
        <div class="text-center sm:text-left">
          <p>
            {{ $t("about-me") }}
          </p>
        </div>
        <div
          class="flex flex-row items-center justify-center sm:justify-start gap-8"
        >
          <a href="https://github.com/VincebusRiveruptum">
            <GithubIcon class="hover:scale-110 transition-all" />
          </a>
          <a
            href="https://www.linkedin.com/in/vicente-ignacio-riveros-garay-5a545925b/"
          >
            <LinkedinIcon class="hover:scale-110 transition-all" />
          </a>
        </div>

        <NuxtLink :to="{ path: 'contact' }" class="w-full">
          <button class="btn-primary w-full">{{ $t("contact-me") }}</button>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
