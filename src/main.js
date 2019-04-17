import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import EvaIcons from "vue-eva-icons";
import "prismjs";
import VuePrismEditor from "vue-prism-editor";
import VueSnackbar from "vue-snack";
import VCalendar from "v-calendar";

Vue.component("prism-editor", VuePrismEditor);
Vue.use(EvaIcons);
Vue.use(VueSnackbar, { close: true, position: "bottom-left" });
// Use v-calendar & v-date-picker components
Vue.use(VCalendar, {});

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
