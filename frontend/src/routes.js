import { createWebHistory, createRouter } from "vue-router";

import Posts from "@/views/Posts";
import Login from "@/views/Login";
import Logout from "@/views/Logout";

const routes = [
  {
    path: "/",
    name: "posts",
    component: Posts,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/logout",
    name: "logout",
    component: Logout,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
