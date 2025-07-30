<script setup lang="ts">
import myself from "@/assets/me.png";
import cl from "@/assets/cl.png";
import { GithubIcon, LinkedinIcon } from "lucide-vue-next";
</script>

<template>
  <div
    class="grid grid-cols-1 sm:grid-cols-2 gap-12 bg-background-secondary p-12 sm:py-[5%] sm:px-[15%]"
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
        <h3>Full Stack Developer & IT Engineer</h3>
      </div>
      <div class="text-center sm:text-left">
        <p>
          I'm a Full-stack developer from Chile with 1+ year experience in the
          field, a professional developer with a good set of problem solving and
          technical experience.
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
        <button class="btn-primary w-full">Contact me</button>
      </NuxtLink>
    </div>
  </div>
</template>
