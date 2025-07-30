<script setup lang="ts">
import { useContact } from "~/composables/useContact";
import AppSpinnerScreen from "@/components/shared/AppSpinnerScreen.vue";

const { form, isFormFilled, isPending, isSuccess, sendMessage } = useContact();
</script>

<template>
  <div
    class="flex flex-col gap-12 bg-background-secondary p-12 sm:py-[5%] sm:px-[15%] lg:px-[25%]"
  >
    <h1>Contact</h1>

    <div class="flex flex-col gap-8">
      <p class="text-center sm:text-left">
        If you're interested you can contact me directly by filling the form
        below.
      </p>

      <form class="flex flex-col gap-8">
        <div class="flex flex-col gap-2">
          <label>Email</label>
          <input v-model="form.email" name="email" />
        </div>
        <div class="flex flex-col gap-2">
          <label>Subject</label>
          <input v-model="form.subject" name="subject" />
        </div>

        <div class="flex flex-col gap-2">
          <label>Message</label>
          <textarea v-model="form.message" name="message"> </textarea>
        </div>
        <button
          class="btn-primary sm:w-48 ml-auto w-full"
          :disabled="!isFormFilled || isPending || isSuccess"
          type="button"
          @click="sendMessage()"
        >
          Send
        </button>
      </form>
    </div>
    <AppSpinnerScreen v-if="isPending" />
  </div>
</template>
