import { createRouter, createWebHistory } from "vue-router";
import Signup from "../page/Signup.vue";
import Login from "../page/Login.vue";
import DashAdmin from "../components/DashAdmin.vue";
import Dashbord from "../page/Dashbord.vue";
import Edge from "../page/Edge.vue";
import Profile from "../page/Profile.vue";
import Responsable from "../page/Responsable.vue";
import Service from "../page/Service.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
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

    {
      path: "/dashbord",
      component: Dashbord,
      name: "dashbord",
    },

    {
      path: "/dashAdmin",
      component: DashAdmin,
      name: "dashAdmin",
    },
    {
      path: "/edge",
      component: Edge,
      name: "edge",
    },
    {
      path: "/profile",
      component: Profile,
      name: "profile",
    },
    {
      path: "/responsable",
      component: Responsable,
      name: "responsable",
    },
    {
      path: "/service",
      component: Service,
      name: "service",
    },
  ],
});
export default router;
