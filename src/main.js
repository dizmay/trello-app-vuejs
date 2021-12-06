import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueToast from "vue-toast-notification";
import "vue-toast-notification/dist/theme-default.css";
import { ClickOutsideDirective } from "@/utils";
import Loader from '@/components/app/Loader.vue';
import Button from "@/components/app/Button.vue";
import Modal from "@/components/app/Modal.vue";

createApp(App)
  .use(store)
  .use(router)
  .use(VueToast)
  .directive("click-outside", ClickOutsideDirective)
  .component("loader", Loader)
  .component("custom-btn", Button)
  .component("custom-modal", Modal)
  .mount("#app");
