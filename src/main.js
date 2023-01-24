import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import MainComponent from './components/MainComponent.vue'
import AllProductsComponent from './components/AllProductsComponent.vue'
import WomanComponent from './components/WomanComponent.vue'
import MenComponent from './components/MenComponent.vue'
import KidsComponent from './components/KidsComponent.vue'
import BabyComponent from './components/BabyComponent.vue'
import UserAuthComponent from './components/UserAuthComponent.vue'
import CartComponent from './components/CartComponent.vue'
import SingleProductComponent from './components/SingleProductComponent.vue'
import App from './App.vue'

import './assets/main.css'

const routes = [
    { 
        path: "/", 
        component: MainComponent,
    },
    {
        path: '/all',
        component: AllProductsComponent
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
        path: '/baby',
        component: BabyComponent
    },
    {
        path: '/userAuth',
        component: UserAuthComponent
    },
    {
        path: '/cart',
        component: CartComponent
    },
    {
        path: '/product/:id',
        component: SingleProductComponent,
        props: true
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})
createApp(App).use(router).mount('#app')
