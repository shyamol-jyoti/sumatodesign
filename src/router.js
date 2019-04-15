import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Button from "./views/Button.vue";
import Alert from "./views/Alert.vue";
import Checkbox from "./views/Checkbox.vue";
import Radio from "./views/Radio.vue";
import Switch from "./views/Switch.vue";
import Icons from "./views/Icons.vue";
import Typography from "./views/Typography.vue";
import Colors from "./views/Colors.vue";
import Toast from "./views/Toast.vue";
import Calendar from "./views/Calendar.vue";
import Datepicker from "./views/Datepicker.vue";
import Texteditor from "./views/Texteditor.vue";
import Search from "./views/Search.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },

    {
      path: "/button",
      name: "button",
      component: Button
    },

    {
      path: "/alerts",
      name: "alert",
      component: Alert
    },

    {
      path: "/calendar",
      name: "calendar",
      component: Calendar
    },

    {
      path: "/checkbox",
      name: "checkbox",
      component: Checkbox
    },

    {
      path: "/datepicker",
      name: "datepicker",
      component: Datepicker
    },

    {
      path: "/texteditor",
      name: "texteditor",
      component: Texteditor
    },

    {
      path: "/radio",
      name: "radio",
      component: Radio
    },

    {
      path: "/search",
      name: "search",
      component: Search
    },

    {
      path: "/switch",
      name: "switch",
      component: Switch
    },

    {
      path: "/icons",
      name: "icons",
      component: Icons
    },

    {
      path: "/typography",
      name: "typography",
      component: Typography
    },

    {
      path: "/colors",
      name: "colors",
      component: Colors
    },

    {
      path: "/toast",
      name: "toast",
      component: Toast
    },

    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
