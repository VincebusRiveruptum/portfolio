import { a as __nuxt_component_0 } from './server.mjs';
import { defineComponent, useTemplateRef, ref, watch, mergeProps, unref, shallowRef, computed, toValue, reactive, nextTick, withCtx, createTextVNode, getCurrentScope, onScopeDispose, getCurrentInstance, toDisplayString, useSSRContext, isRef } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
import { _ as __nuxt_component_0$1 } from './nuxt-link-C3g-8Hjv.mjs';
import { useRoute } from 'vue-router';
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

const logo = "" + __buildAssetsURL("logo.dv3Q1bms.png");
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "AppNavlink",
  __ssrInlineRender: true,
  props: {
    type: {},
    title: {},
    to: {},
    active: { type: Boolean }
  },
  emits: ["click"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const route = useRoute();
    const isCurrentRoute = computed(() => route.name === props.to?.name);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "text-center text-nowrap" }, _attrs))}>`);
      if (props.type === "route" && props.to || !isCurrentRoute.value) {
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: { ...props.to },
          class: ["hover:text-purple-600 font-semibold antialiased transition-all", { "text-purple-500": props.active }],
          onClick: ($event) => _ctx.$emit("click")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(props.title ?? "route here!")}`);
            } else {
              return [
                createTextVNode(toDisplayString(props.title ?? "route here!"), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<button class="${ssrRenderClass([{ "text-purple-500": props.active }, "hover:text-purple-600 font-semibold antialiased transition-all"])}">${ssrInterpolate(props.title ?? "Route here!")}</button>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shared/AppNav/AppNavlink.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const AppNavlink = Object.assign(_sfc_main$4, { __name: "SharedAppNavAppNavlink" });
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "AppNavLinks",
  __ssrInlineRender: true,
  props: {
    links: {},
    currentOffset: {}
  },
  setup(__props) {
    const props = __props;
    const linkRefs = ref([...props.links]);
    const currentSection = ref();
    const currentLink = ref();
    const setActive = (index) => {
      linkRefs.value.forEach((link, i) => {
        if (index === i) {
          link.active = true;
          currentSection.value = (void 0).getElementById(link.name);
          currentLink.value = { ...link };
          if (currentSection.value) {
            currentSection.value.scrollIntoView({ behavior: "smooth" });
          }
          if (link.type == "route") {
            const mainSection = (void 0).getElementById("main");
            if (mainSection) mainSection.scrollTo({ top: 0, behavior: "smooth" });
          }
        } else {
          link.active = false;
        }
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-row items-center gap-8 w-full" }, _attrs))}><!--[-->`);
      ssrRenderList(linkRefs.value, (link, i) => {
        _push(ssrRenderComponent(AppNavlink, {
          ref_for: true,
          ref: "navLinks",
          title: link.title,
          type: link.type,
          to: link.route,
          key: i,
          active: link.active,
          onClick: ($event) => setActive(i)
        }, null, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shared/AppNav/AppNavLinks.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const AppNavLinks = Object.assign(_sfc_main$3, { __name: "SharedAppNavLinks" });
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "AppNavbar",
  __ssrInlineRender: true,
  props: {
    currentOffset: {}
  },
  setup(__props) {
    const route = useRoute();
    const props = __props;
    const mainSection = ref();
    const navLinks = [
      {
        title: "Home",
        name: "home",
        type: "scroll",
        route: {
          path: "/home"
        },
        active: false
      },
      {
        title: "Personal Information",
        name: "personal-info",
        type: "scroll",
        route: {
          path: "/home"
        },
        active: false
      },
      {
        title: "Skills",
        name: "skills",
        type: "scroll",
        route: {
          path: "/home"
        },
        active: false
      },
      {
        title: "Experience",
        name: "experience",
        type: "scroll",
        route: {
          path: "/home"
        },
        active: false
      },
      {
        title: "Projects",
        name: "projects",
        type: "scroll",
        route: {
          path: "/home"
        },
        active: false
      },
      {
        title: "Contact",
        name: "contact",
        type: "route",
        route: {
          path: "/contact"
        },
        active: false
      }
    ];
    const scrollUp = () => {
      if (mainSection.value)
        mainSection.value.scrollTo({ top: 0, behavior: "smooth" });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative flex flex-row bg-background items-center gap-4 justify-between h-[90px] shadow-center-sm py-2 px-[8%]" }, _attrs))}><div class="flex flex-row"><img class="w-14 aspect-square dark:invert"${ssrRenderAttr("src", unref(logo))} alt="vincebus-logo"></div><div class="flex flex-row gap-8">`);
      _push(ssrRenderComponent(AppNavLinks, {
        class: "hidden sm:flex",
        "current-offset": props.currentOffset,
        links: navLinks
      }, null, _parent));
      _push(`<div class="sm:hidden">`);
      if (unref(route).name === "landing-page") {
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: { ...navLinks[5].route },
          class: "btn-primary font-semibold !bg-purple-500",
          onClick: ($event) => scrollUp()
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Contact `);
            } else {
              return [
                createTextVNode(" Contact ")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(route).name === "contact-view") {
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: { ...navLinks[1].route },
          class: "btn-primary font-semibold !bg-purple-500",
          onClick: ($event) => scrollUp()
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Home `);
            } else {
              return [
                createTextVNode(" Home ")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shared/AppNavbar.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const AppNavbar = Object.assign(_sfc_main$2, { __name: "SharedAppNavbar" });
const logoWhite = "" + __buildAssetsURL("logo_white.B0SaGX39.png");
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AppFooter",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col items-center sm:flex-row sm:justify-between gap-8 p-8 sm:px-[4%] sm:py-[2%] w-full h-[500px] bg-background-tertiary text-white" }, _attrs))}><div class="flex flex-row items-center gap-4"><img${ssrRenderAttr("src", unref(logoWhite))} alt="vincebus-logo" class="aspect-square w-20"><h3>Vincebus</h3></div><div class="flex flex-row items-center"><p class="text-center sm:text-left"> (c) ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} - Vincebus Riveruptum, All rights reserved. </p></div><div class="flex flex-row items-center"><button class="hover:scale-105 transition-all"> Back to top </button></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shared/AppFooter.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const AppFooter = Object.assign(_sfc_main$1, { __name: "SharedAppFooter" });
function tryOnScopeDispose(fn) {
  if (getCurrentScope()) {
    onScopeDispose(fn);
    return true;
  }
  return false;
}
typeof WorkerGlobalScope !== "undefined" && globalThis instanceof WorkerGlobalScope;
const notNullish = (val) => val != null;
const toString = Object.prototype.toString;
const isObject = (val) => toString.call(val) === "[object Object]";
const noop = () => {
};
function createFilterWrapper(filter, fn) {
  function wrapper(...args) {
    return new Promise((resolve, reject) => {
      Promise.resolve(filter(() => fn.apply(this, args), { fn, thisArg: this, args })).then(resolve).catch(reject);
    });
  }
  return wrapper;
}
function debounceFilter(ms, options = {}) {
  let timer;
  let maxTimer;
  let lastRejector = noop;
  const _clearTimeout = (timer2) => {
    clearTimeout(timer2);
    lastRejector();
    lastRejector = noop;
  };
  let lastInvoker;
  const filter = (invoke2) => {
    const duration = toValue(ms);
    const maxDuration = toValue(options.maxWait);
    if (timer)
      _clearTimeout(timer);
    if (duration <= 0 || maxDuration !== void 0 && maxDuration <= 0) {
      if (maxTimer) {
        _clearTimeout(maxTimer);
        maxTimer = void 0;
      }
      return Promise.resolve(invoke2());
    }
    return new Promise((resolve, reject) => {
      lastRejector = options.rejectOnCancel ? reject : resolve;
      lastInvoker = invoke2;
      if (maxDuration && !maxTimer) {
        maxTimer = setTimeout(() => {
          if (timer)
            _clearTimeout(timer);
          maxTimer = void 0;
          resolve(lastInvoker());
        }, maxDuration);
      }
      timer = setTimeout(() => {
        if (maxTimer)
          _clearTimeout(maxTimer);
        maxTimer = void 0;
        resolve(invoke2());
      }, duration);
    });
  };
  return filter;
}
function throttleFilter(...args) {
  let lastExec = 0;
  let timer;
  let isLeading = true;
  let lastRejector = noop;
  let lastValue;
  let ms;
  let trailing;
  let leading;
  let rejectOnCancel;
  if (!isRef(args[0]) && typeof args[0] === "object")
    ({ delay: ms, trailing = true, leading = true, rejectOnCancel = false } = args[0]);
  else
    [ms, trailing = true, leading = true, rejectOnCancel = false] = args;
  const clear = () => {
    if (timer) {
      clearTimeout(timer);
      timer = void 0;
      lastRejector();
      lastRejector = noop;
    }
  };
  const filter = (_invoke) => {
    const duration = toValue(ms);
    const elapsed = Date.now() - lastExec;
    const invoke2 = () => {
      return lastValue = _invoke();
    };
    clear();
    if (duration <= 0) {
      lastExec = Date.now();
      return invoke2();
    }
    if (elapsed > duration && (leading || !isLeading)) {
      lastExec = Date.now();
      invoke2();
    } else if (trailing) {
      lastValue = new Promise((resolve, reject) => {
        lastRejector = rejectOnCancel ? reject : resolve;
        timer = setTimeout(() => {
          lastExec = Date.now();
          isLeading = true;
          resolve(invoke2());
          clear();
        }, Math.max(0, duration - elapsed));
      });
    }
    if (!leading && !timer)
      timer = setTimeout(() => isLeading = true, duration);
    isLeading = false;
    return lastValue;
  };
  return filter;
}
function toArray(value) {
  return Array.isArray(value) ? value : [value];
}
function getLifeCycleTarget(target) {
  return getCurrentInstance();
}
// @__NO_SIDE_EFFECTS__
function useDebounceFn(fn, ms = 200, options = {}) {
  return createFilterWrapper(
    debounceFilter(ms, options),
    fn
  );
}
// @__NO_SIDE_EFFECTS__
function useThrottleFn(fn, ms = 200, trailing = false, leading = true, rejectOnCancel = false) {
  return createFilterWrapper(
    throttleFilter(ms, trailing, leading, rejectOnCancel),
    fn
  );
}
function tryOnMounted(fn, sync = true, target) {
  const instance = getLifeCycleTarget();
  if (instance)
    ;
  else if (sync)
    fn();
  else
    nextTick(fn);
}
function watchImmediate(source, cb, options) {
  return watch(
    source,
    cb,
    {
      ...options,
      immediate: true
    }
  );
}
const defaultWindow = void 0;
function unrefElement(elRef) {
  var _a;
  const plain = toValue(elRef);
  return (_a = plain == null ? void 0 : plain.$el) != null ? _a : plain;
}
function useEventListener(...args) {
  const cleanups = [];
  const cleanup = () => {
    cleanups.forEach((fn) => fn());
    cleanups.length = 0;
  };
  const register = (el, event, listener, options) => {
    el.addEventListener(event, listener, options);
    return () => el.removeEventListener(event, listener, options);
  };
  const firstParamTargets = computed(() => {
    const test = toArray(toValue(args[0])).filter((e) => e != null);
    return test.every((e) => typeof e !== "string") ? test : void 0;
  });
  const stopWatch = watchImmediate(
    () => {
      var _a, _b;
      return [
        (_b = (_a = firstParamTargets.value) == null ? void 0 : _a.map((e) => unrefElement(e))) != null ? _b : [defaultWindow].filter((e) => e != null),
        toArray(toValue(firstParamTargets.value ? args[1] : args[0])),
        toArray(unref(firstParamTargets.value ? args[2] : args[1])),
        // @ts-expect-error - TypeScript gets the correct types, but somehow still complains
        toValue(firstParamTargets.value ? args[3] : args[2])
      ];
    },
    ([raw_targets, raw_events, raw_listeners, raw_options]) => {
      cleanup();
      if (!(raw_targets == null ? void 0 : raw_targets.length) || !(raw_events == null ? void 0 : raw_events.length) || !(raw_listeners == null ? void 0 : raw_listeners.length))
        return;
      const optionsClone = isObject(raw_options) ? { ...raw_options } : raw_options;
      cleanups.push(
        ...raw_targets.flatMap(
          (el) => raw_events.flatMap(
            (event) => raw_listeners.map((listener) => register(el, event, listener, optionsClone))
          )
        )
      );
    },
    { flush: "post" }
  );
  const stop = () => {
    stopWatch();
    cleanup();
  };
  tryOnScopeDispose(cleanup);
  return stop;
}
// @__NO_SIDE_EFFECTS__
function useMounted() {
  const isMounted = shallowRef(false);
  getCurrentInstance();
  return isMounted;
}
// @__NO_SIDE_EFFECTS__
function useSupported(callback) {
  const isMounted = /* @__PURE__ */ useMounted();
  return computed(() => {
    isMounted.value;
    return Boolean(callback());
  });
}
function useMutationObserver(target, callback, options = {}) {
  const { window: window2 = defaultWindow, ...mutationOptions } = options;
  let observer;
  const isSupported = /* @__PURE__ */ useSupported(() => window2 && "MutationObserver" in window2);
  const cleanup = () => {
    if (observer) {
      observer.disconnect();
      observer = void 0;
    }
  };
  const targets = computed(() => {
    const value = toValue(target);
    const items = toArray(value).map(unrefElement).filter(notNullish);
    return new Set(items);
  });
  const stopWatch = watch(
    () => targets.value,
    (targets2) => {
      cleanup();
      if (isSupported.value && targets2.size) {
        observer = new MutationObserver(callback);
        targets2.forEach((el) => observer.observe(el, mutationOptions));
      }
    },
    { immediate: true, flush: "post" }
  );
  const takeRecords = () => {
    return observer == null ? void 0 : observer.takeRecords();
  };
  const stop = () => {
    stopWatch();
    cleanup();
  };
  tryOnScopeDispose(stop);
  return {
    isSupported,
    stop,
    takeRecords
  };
}
const ARRIVED_STATE_THRESHOLD_PIXELS = 1;
function useScroll(element, options = {}) {
  const {
    throttle = 0,
    idle = 200,
    onStop = noop,
    onScroll = noop,
    offset = {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    },
    observe: _observe = {
      mutation: false
    },
    eventListenerOptions = {
      capture: false,
      passive: true
    },
    behavior = "auto",
    window: window2 = defaultWindow,
    onError = (e) => {
      console.error(e);
    }
  } = options;
  const observe = typeof _observe === "boolean" ? {
    mutation: _observe
  } : _observe;
  const internalX = shallowRef(0);
  const internalY = shallowRef(0);
  const x = computed({
    get() {
      return internalX.value;
    },
    set(x2) {
      scrollTo(x2, void 0);
    }
  });
  const y = computed({
    get() {
      return internalY.value;
    },
    set(y2) {
      scrollTo(void 0, y2);
    }
  });
  function scrollTo(_x, _y) {
    var _a, _b, _c, _d;
    if (!window2)
      return;
    const _element = toValue(element);
    if (!_element)
      return;
    (_c = _element instanceof Document ? window2.document.body : _element) == null ? void 0 : _c.scrollTo({
      top: (_a = toValue(_y)) != null ? _a : y.value,
      left: (_b = toValue(_x)) != null ? _b : x.value,
      behavior: toValue(behavior)
    });
    const scrollContainer = ((_d = _element == null ? void 0 : _element.document) == null ? void 0 : _d.documentElement) || (_element == null ? void 0 : _element.documentElement) || _element;
    if (x != null)
      internalX.value = scrollContainer.scrollLeft;
    if (y != null)
      internalY.value = scrollContainer.scrollTop;
  }
  const isScrolling = shallowRef(false);
  const arrivedState = reactive({
    left: true,
    right: false,
    top: true,
    bottom: false
  });
  const directions = reactive({
    left: false,
    right: false,
    top: false,
    bottom: false
  });
  const onScrollEnd = (e) => {
    if (!isScrolling.value)
      return;
    isScrolling.value = false;
    directions.left = false;
    directions.right = false;
    directions.top = false;
    directions.bottom = false;
    onStop(e);
  };
  const onScrollEndDebounced = /* @__PURE__ */ useDebounceFn(onScrollEnd, throttle + idle);
  const setArrivedState = (target) => {
    var _a;
    if (!window2)
      return;
    const el = ((_a = target == null ? void 0 : target.document) == null ? void 0 : _a.documentElement) || (target == null ? void 0 : target.documentElement) || unrefElement(target);
    const { display, flexDirection, direction } = getComputedStyle(el);
    const directionMultipler = direction === "rtl" ? -1 : 1;
    const scrollLeft = el.scrollLeft;
    directions.left = scrollLeft < internalX.value;
    directions.right = scrollLeft > internalX.value;
    const left = Math.abs(scrollLeft * directionMultipler) <= (offset.left || 0);
    const right = Math.abs(scrollLeft * directionMultipler) + el.clientWidth >= el.scrollWidth - (offset.right || 0) - ARRIVED_STATE_THRESHOLD_PIXELS;
    if (display === "flex" && flexDirection === "row-reverse") {
      arrivedState.left = right;
      arrivedState.right = left;
    } else {
      arrivedState.left = left;
      arrivedState.right = right;
    }
    internalX.value = scrollLeft;
    let scrollTop = el.scrollTop;
    if (target === window2.document && !scrollTop)
      scrollTop = window2.document.body.scrollTop;
    directions.top = scrollTop < internalY.value;
    directions.bottom = scrollTop > internalY.value;
    const top = Math.abs(scrollTop) <= (offset.top || 0);
    const bottom = Math.abs(scrollTop) + el.clientHeight >= el.scrollHeight - (offset.bottom || 0) - ARRIVED_STATE_THRESHOLD_PIXELS;
    if (display === "flex" && flexDirection === "column-reverse") {
      arrivedState.top = bottom;
      arrivedState.bottom = top;
    } else {
      arrivedState.top = top;
      arrivedState.bottom = bottom;
    }
    internalY.value = scrollTop;
  };
  const onScrollHandler = (e) => {
    var _a;
    if (!window2)
      return;
    const eventTarget = (_a = e.target.documentElement) != null ? _a : e.target;
    setArrivedState(eventTarget);
    isScrolling.value = true;
    onScrollEndDebounced(e);
    onScroll(e);
  };
  useEventListener(
    element,
    "scroll",
    throttle ? /* @__PURE__ */ useThrottleFn(onScrollHandler, throttle, true, false) : onScrollHandler,
    eventListenerOptions
  );
  tryOnMounted(() => {
    try {
      const _element = toValue(element);
      if (!_element)
        return;
      setArrivedState(_element);
    } catch (e) {
      onError(e);
    }
  });
  if ((observe == null ? void 0 : observe.mutation) && element != null && element !== window2 && element !== void 0) {
    useMutationObserver(
      element,
      () => {
        const _element = toValue(element);
        if (!_element)
          return;
        setArrivedState(_element);
      },
      {
        attributes: true,
        childList: true,
        subtree: true
      }
    );
  }
  useEventListener(
    element,
    "scrollend",
    onScrollEnd,
    eventListenerOptions
  );
  return {
    x,
    y,
    isScrolling,
    arrivedState,
    directions,
    measure() {
      const _element = toValue(element);
      if (window2 && _element)
        setArrivedState(_element);
    }
  };
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const mainWindow = useTemplateRef("main");
    const { isScrolling, y } = useScroll(mainWindow);
    const hideNavbar = ref(false);
    let timeout = null;
    watch(
      () => isScrolling.value,
      (newValue) => {
        if (newValue === true) {
          hideNavbar.value = true;
        } else {
          if (timeout) clearTimeout(timeout);
          timeout = setTimeout(() => {
            hideNavbar.value = false;
          }, 1e3);
        }
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtPage = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative flex flex-col h-screen overflow-clip bg-background" }, _attrs))}>`);
      _push(ssrRenderComponent(AppNavbar, {
        "current-offset": unref(y),
        class: [
          unref(hideNavbar) ? "sm:-translate-y-2" : "",
          "transition-all duration-500 delay-100 absolute z-25 top-0"
        ]
      }, null, _parent));
      _push(`<div id="main" class="flex flex-col h-full overflow-auto -mt-2"><div class="grow">`);
      _push(ssrRenderComponent(_component_NuxtPage, null, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(AppFooter, null, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default-6GL9u0ZX.mjs.map
