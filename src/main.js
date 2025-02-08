import './assets/main.css'
import "bootstrap/dist/css/bootstrap.css";
import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes'
import "bootstrap/dist/js/bootstrap.js";

// Membuat router
const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        return { top: 0 }
    }
})

// Membuat dan mount aplikasi Vue dengan router
createApp(App).use(router).mount('#app')
