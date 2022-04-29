import Vue from "vue";
import VueRouter from "vue-router";
import JokeView from "../views/JokeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Joke",
    component: JokeView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
