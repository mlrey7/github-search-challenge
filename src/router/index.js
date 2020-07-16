import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import JobPosting from "@/views/JobPosting.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/:id",
    name: "JobPosting",
    component: JobPosting,
    props: true,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
