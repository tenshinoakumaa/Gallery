import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";

import TheGallery from "./components/TheGallery.vue";
import AboutMe from './components/AboutMe.vue';
import TheFAQ from './components/TheFAQ.vue';
import NotFound from './components/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
        path: '/:pathMatch(.*)*',
        component: NotFound,
    },
    {
        path: '/',
        redirect: 'gallery',
    },
    {
      path: "/gallery",
      component: TheGallery,
    },
    {
        path: '/about-me',
        component: AboutMe,
    },
    {
        path: '/faq',
        component: TheFAQ,
    }
  ],
});

createApp(App).use(router).mount("#app");
