import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Administracion from "../views/Administracion.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/administracion",
    name: "Administracion",
    component: Administracion
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
