import Vue from "vue";
import App from "./App.vue";
import "./assets/tailwind.css";
import router from "./router";
import VueProgressiveImage from "vue-progressive-image";
import VueSimpleMarkdown from "vue-simple-markdown";

Vue.use(VueProgressiveImage);
Vue.use(VueSimpleMarkdown);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
