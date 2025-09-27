<script setup lang="ts">
import { useContact } from "~/composables/useContact";
import AppSpinnerScreen from "@/components/shared/AppSpinnerScreen.vue";
import Swal from "sweetalert2";
import { alert } from "@/utils/swal";

const { form, isFormFilled, isPending, isSuccess, sendMessage } = useContact();
</script>

<template>
  <div class="relative h-full flex flex-col">
    <div class="fixed top-0 right-0 h-full pointer-events-none">
      <img src="/bg-tubes.png" class="object-cover w-full dark:invert" />
    </div>
    <div class="relative flex flex-col">
      <div
        class="flex flex-col gap-12 p-12 sm:py-[5%] sm:px-[15%] lg:px-[25%]"
      >
        <h1>{{ $t("contact") }}</h1>

        <div class="flex flex-col gap-8">
          <p class="text-center sm:text-left">
            {{ $t("contact-paragraph") }}
          </p>

          <form class="flex flex-col gap-8">
            <div class="flex flex-col gap-2">
              <label>{{ $t("email") }}</label>
              <input v-model="form.email" name="email" />
            </div>
            <div class="flex flex-col gap-2">
              <label>{{ $t("subject") }}</label>
              <input v-model="form.subject" name="subject" />
            </div>

            <div class="flex flex-col gap-2">
              <label>{{ $t("message") }}</label>
              <textarea v-model="form.message" name="message"> </textarea>
            </div>
            <button
              class="btn-primary sm:w-48 ml-auto w-full"
              :disabled="!isFormFilled || isPending || isSuccess"
              type="button"
              @click="sendMessage()"
            >
              {{ $t("send") }}
            </button>
          </form>
        </div>
        <AppSpinnerScreen v-if="isPending" />
      </div>
    </div>
  </div>
</template>
