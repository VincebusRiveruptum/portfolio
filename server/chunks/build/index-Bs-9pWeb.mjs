import { defineComponent, mergeProps, unref, ref, computed, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderComponent } from 'vue/server-renderer';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import { _ as _export_sfc, n as navigateTo } from './server.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'vue-router';

const serviceId = "service_6a7ftpc";
const templateId = "template_uqmqfy5";
const options = {
  publicKey: "iY2CQOIl2A1-J9u4v"
};
const setForm = () => {
  return {
    email: "",
    subject: "",
    message: ""
  };
};
const useContact = () => {
  const isError = ref();
  const isPending = ref();
  const isSuccess = ref();
  const form = ref(setForm());
  const isFormFilled = computed(
    () => form.value.email && form.value.email.trim() != "" && form.value.subject && form.value.subject.trim() != "" && form.value.message && form.value.message.trim() != ""
  );
  const sendMessage = async () => {
    try {
      isPending.value = true;
      await emailjs.send(serviceId, templateId, form.value, options);
      await Swal.fire({
        icon: "success",
        title: "Success",
        text: "Message delivered!",
        timer: 3e3
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
        timer: 3e3
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
    sendMessage
  };
};
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full h-full fixed top-0 left-0 bg-white opacity-75 z-[999]" }, _attrs))}><div class="flex justify-center items-center mt-[50vh]"><div class="rounded-md h-12 w-12 border-4 border-t-4 border-blue-500 animate-spin absolute"></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shared/AppSpinnerScreen.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const AppSpinnerScreen = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]), { __name: "SharedAppSpinnerScreen" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { form, isFormFilled, isPending, isSuccess } = useContact();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col gap-12 bg-background-secondary p-12 sm:py-[5%] sm:px-[15%] lg:px-[25%]" }, _attrs))}><h1>Contact</h1><div class="flex flex-col gap-8"><p class="text-center sm:text-left"> If you&#39;re interested you can contact me directly by filling the form below. </p><form class="flex flex-col gap-8"><div class="flex flex-col gap-2"><label>Email</label><input${ssrRenderAttr("value", unref(form).email)} name="email"></div><div class="flex flex-col gap-2"><label>Subject</label><input${ssrRenderAttr("value", unref(form).subject)} name="subject"></div><div class="flex flex-col gap-2"><label>Message</label><textarea name="message">${ssrInterpolate(unref(form).message)}</textarea></div><button class="btn-primary sm:w-48 ml-auto w-full"${ssrIncludeBooleanAttr(!unref(isFormFilled) || unref(isPending) || unref(isSuccess)) ? " disabled" : ""} type="button"> Send </button></form></div>`);
      if (unref(isPending)) {
        _push(ssrRenderComponent(AppSpinnerScreen, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-Bs-9pWeb.mjs.map
