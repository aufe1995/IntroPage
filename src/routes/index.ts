import { createRouter, createWebHistory } from "vue-router";

import Main from "../views/main.vue";
import Menu1 from "../views/menu1.vue";
import Menu2 from "../views/menu2.vue";
import Menu3 from "../views/menu3.vue";
import Menu4 from "../views/menu4.vue";

const routes = [
  {
    path: "/",
    component: Main,
  },
  {
    path: "/Menu1",
    component: Menu1,
  },
  {
    path: "/Menu2",
    component: Menu2,
  },
  {
    path: "/Menu3",
    component: Menu3,
  },
  {
    path: "/Menu4",
    component: Menu4,
  },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;