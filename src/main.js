import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueToast from "vue-toast-notification";
import "vue-toast-notification/dist/theme-default.css";
import Button from "@/components/app/Button.vue";

createApp(App)
  .use(store)
  .use(router)
  .use(VueToast)
  .component("custom-btn", Button)
  .mount("#app");
