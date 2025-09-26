<script setup lang="ts">
import ExpItem from "@/components/home/ExpItem.vue";
</script>
<template>
  <div class="flex flex-col bg-background gap-12 p-12 sm:py-[5%] sm:px-[15%]">
    <h1>Experience</h1>

    <ExpItem
      position="Full-stack developer"
      company="Passmed"
      period="June 2025 - Present"
    >
      <ul>
        <li>
          Front-end and database design of system UI providing quality user
          experience and functionality.
        </li>
      </ul>
    </ExpItem>

    <ExpItem
      position="Full-stack Developer"
      company="Neering SPA"
      period="April 2024 - Present"
    >
      <ul>
        <li>
          Led frontend development across multiple SPA and monolithic systems
          using Laravel, Vue 2/3, and Tailwind.
        </li>
        <li>
          Implemented a Node.JS scraper with Puppeteer and Tesseract to automate
          the retrieval of documents from officialgovernment websites,
          optimizing internal customs dispatch processes.
        </li>
        <li>
          Developed internal notification systems and automated, personalized
          email delivery, enhancing communicationbetween users and system
          events.
        </li>
        <li>
          Integrated geographic visualizations using Mapbox.js to display
          addresses and routes.Optimized code and API performance, reducing load
          times and improving user experience.
        </li>
      </ul>
    </ExpItem>

    <ExpItem
      position="Research Assistant"
      company="PUCV"
      period="June 2023 - October 2023"
    >
      <ul>
        <li>
          Conducted research on video game development using Unity and C#.
        </li>
        <li>
          Implemented a Node.JS scraper with Puppeteer and Tesseract to automate
          the retrieval of documents from officialgovernment websites, opt
        </li>
      </ul>
    </ExpItem>

    <ExpItem
      position="Professional Internship"
      company="PUCV"
      period="April 2023 - June 2023"
    >
      <ul>
        <li>
          Implemented views using Bootstrap and handled requirements to improve
          the functionality of assigned projects.
        </li>
      </ul>
    </ExpItem>
  </div>
</template>
