import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";
import Registration from "@/views/Registration.vue";
import Boards from "@/views/Boards.vue";
import Board from "@/views/Board.vue";
import Notifications from "@/views/Notifications.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/registration",
    name: "Registration",
    component: Registration,
  },
  {
    path: "/boards",
    name: "Boards",
    component: Boards,
  },
  {
    path: "/boards/:id",
    name: "Board",
    component: Board,
  },
  {
    path: "/notifications",
    name: "Notifications",
    component: Notifications,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
