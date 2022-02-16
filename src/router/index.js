import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import("../views/Home.vue"),
    name: "Home",
  },
  {
    path: "/productos",
    component: () => import("../views/Products.vue"),
    name: "Products",
  },
  {
    path: "/contactos",
    component: () => import("../views/Contact.vue"),
    name: "Contacts",
  },
  {
    path: "/ortodoncia",
    component: () => import("../views/ortodoncia/Ortodoncia.vue"),
    name: "ortodoncia",
  },
  {
    path: "/endodoncia",
    component: () => import("../views/endodoncia/Endodoncia.vue"),
    name: "endodoncia",
  },
  {
    path: "*",
    component: () => import("../views/NotFound.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
