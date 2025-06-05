// Composables
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/views/layout/adminLayout.vue"),
    children: [
      {
        path: "empty",
        component: () => import("@/views/admin/emptyComponent.vue"),
      },
      {
        path: "create",
        component: () => import("@/views/admin/createComponent.vue"),
      },
      {
        path: "analyze",
        component: () => import("@/views/admin/analyzeComponent.vue"),
      },

      {
        path: "/",
        component: () => import("@/views/admin/defaultComponent.vue"),
      },
    ],
  },
  {
    path: "/index",
    component: () => import("@/views/layout/indexPage.vue"),
  },
  {
    path: "/list",
    component: () => import("@/views/layout/knowledgePage.vue"),
    children: [
      {
        path: "empty",
        component: () => import("@/views/knowledge/emptyComponent.vue"),
      },
      {
        path: "card",
        component: () => import("@/views/knowledge/cardComponent.vue"),
      },
      {
        path: "loading",
        component: () => import("@/views/knowledge/loadingComponent.vue"),
      },
    ],
  },
  {
    path: "/login",
    component: () => import("@/views/layout/loginPage.vue"),
  },
  {
    path: "/result",
    component: () => import("@/views/layout/resultComponent.vue"),
  },
  {
    path: "/explain",
    component: () => import("@/views/layout/explainComponent.vue"),
  },
];

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
