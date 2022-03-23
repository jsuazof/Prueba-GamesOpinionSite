import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Administracion from "../views/Administracion.vue";
import Editar from "../views/Editar.vue"
import Navbar from "../components/Navbar.vue"
import Opiniones from "../views/Opiniones.vue"
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
  },
  {
    path: "/editar/:id",
    name: "Editar",
    props: true,
    component: Editar
  },
  {
    path: "/navbar",
    name: "Navbar",
    component: Navbar
  },
  {
    path: "/Opiniones",
    name: "Opiniones",
    component: Opiniones
  },
  {
   path: "/404",
   name: "Error",
   component: ()=>import("../views/Error.vue")
  },
  {
    path: "/:catchAll(.*)",
    redirect: "404"
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
