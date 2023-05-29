import { createRouter, createWebHistory } from "vue-router";
import Home from "../page/Home.vue";
import Signup from "../page/Signup.vue";
import Login from "../page/Login.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/home",
      component: Home,
      name: "home",
    },
    {
        path: "/signup",
        component: Signup,
        name: "signup",
      },
      {
        path: "/login",
        component: Login,
        name: "login",
      },
  ],
});


export default router;
