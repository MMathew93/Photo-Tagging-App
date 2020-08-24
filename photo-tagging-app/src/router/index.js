import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/Game",
    name: "Game",
    component: () => import(/* webpackChunkName: 'Game' */ "../views/Game")
  },
  {
    path: "/Hi-scores",
    name: "HiScores",
    component: () =>
      import(/* webpackChunkName: 'Hi-Scores' */ "../views/HiScores")
  }
];

const router = new VueRouter({
  routes
});

export default router;
