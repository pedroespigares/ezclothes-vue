import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import MainComponent from './components/MainComponent.vue'
import WomanComponent from './components/WomanComponent.vue'
import MenComponent from './components/MenComponent.vue'
import KidsComponent from './components/KidsComponent.vue'
import JewelryComponent from './components/JewelryComponent.vue'
import UserAuthComponent from './components/UserAuthComponent.vue'
import CartComponent from './components/CartComponent.vue'
import App from './App.vue'

import './assets/main.css'

const routes = [
    { 
        path: "/", 
        component: MainComponent,
    },
    { 
        path: '/woman', 
        component: WomanComponent,
    },
    {
        path: '/men',
        component: MenComponent
    },
    {
        path: '/kids',
        component: KidsComponent
    },
    {
        path: '/jewelry',
        component: JewelryComponent
    },
    {
        path: '/userAuth',
        component: UserAuthComponent
    },
    {
        path: '/cart',
        component: CartComponent
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})
createApp(App).use(router).mount('#app')
