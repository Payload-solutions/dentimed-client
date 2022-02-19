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
    path: "/productos/ortodoncia",
    component: () => import("../views/ortodoncia/Ortodoncia.vue"),
    name: "ortodoncia",
  },
  {
    path: "/productos/endodoncia",
    component: () => import("../views/endodoncia/Endodoncia.vue"),
    name: "endodoncia",
  },
  {
    path: "/productos/estuches",
    component: () => import("../views/estuches/Estuches.vue"),
    name: "estuches",
  },
  {
    path: "/productos/exodoncia",
    component: () => import("../views/exodoncia/Exodoncia.vue"),
    name: "exodoncia",
  },
  {
    path: "/productos/excavadores",
    component: () => import("../views/excavadores/Excavadores.vue"),
    name: "excavadores",
  },
  {
    path: "/productos/calibrador",
    component: () => import("../views/calibrador/Calibrador.vue"),
    name: "calibrador",
  },
  {
    path: "/productos/tijeras",
    component: () => import("../views/tijeras/Tijeras.vue"),
    name: "tijeras",
  },
  {
    path: "/productos/accesorios_odontologia",
    component: () => import("../views/accesorios_odontologia/Accesorios.vue"),
    name: "accesorios_odontologia",
  },
  {
    path: "/productos/exploradores",
    component: () => import("../views/exploradores/Exploradores.vue"),
    name: "exploradores",
  },
  {
    path: "/productos/amalgamas",
    component: () => import("../views/amalgamas/Amalgamas.vue"),
    name: "amalgamas",
  },
  {
    path: "/productos/pinzas_hemostaticas",
    component: () => import("../views/pinzas_hemostaticas/Pinzas.vue"),
    name: "pinzas_hemostaticas",
  },
  {
    path: "/productos/pinzas",
    component: () => import("../views/pinzas/Pinzas.vue"),
    name: "pinzas",
  },
  {
    path: "/productos/forceps",
    component: () => import("../views/forceps_varios/Forceps.vue"),
    name: "forceps",
  },
  {
    path: "/productos/obturadores",
    component: () => import("../views/obturadores/Obturadores.vue"),
    name: "obturadores",
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
