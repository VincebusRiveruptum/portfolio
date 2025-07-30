import { ref, computed } from "vue";
import emailjs from "@emailjs/browser";
import { serviceId, templateId, options } from "@/constants/config";
import type { ContactForm } from "@/types/global";
import Swal from "sweetalert2";

const setForm = () => {
  return {
    email: "",
    subject: "",
    message: "",
  };
};

const useContact = () => {
  const isError = ref<boolean | undefined>();
  const isPending = ref<boolean | undefined>();
  const isSuccess = ref<boolean | undefined>();
  const form = ref<ContactForm>(setForm());

  const isFormFilled = computed(
    () =>
      form.value.email &&
      form.value.email.trim() != "" &&
      form.value.subject &&
      form.value.subject.trim() != "" &&
      form.value.message &&
      form.value.message.trim() != ""
  );

  const sendMessage = async () => {
    try {
      isPending.value = true;
      await emailjs.send(serviceId, templateId, form.value, options);
      await Swal.fire({
        icon: "success",
        title: "Success",
        text: "Message delivered!",
        timer: 3000,
      });
      isSuccess.value = true;
      navigateTo({ path: "home" });
    } catch (err) {
      isError.value = true;
      console.error(err);
      await Swal.fire({
        icon: "error",
        title: "Error",
        text: "Oops, there was a problem!",
        timer: 3000,
      });
    } finally {
      isPending.value = false;
    }
  };

  return {
    form,
    isFormFilled,
    isError,
    isPending,
    isSuccess,

    sendMessage,
  };
};

export { useContact };
