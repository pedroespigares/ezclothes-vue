import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { firebaseApp } from './firebase'
import { VueFire, VueFireAuth } from 'vuefire'
import MainComponent from './components/MainComponent.vue'
import AllProductsComponent from './components/AllProductsComponent.vue'
import WomanComponent from './components/WomanComponent.vue'
import MenComponent from './components/MenComponent.vue'
import KidsComponent from './components/KidsComponent.vue'
import BabyComponent from './components/BabyComponent.vue'
import LoginComponent from './components/LoginComponent.vue'
import RegisterComponent from './components/RegisterComponent.vue'
import CartComponent from './components/CartComponent.vue'
import SingleProductComponent from './components/SingleProductComponent.vue'
import App from './App.vue'

import './assets/main.css'

var isLogged = false;

onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      isLogged = true;
    } else {
      isLogged = false;
    }
  });

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
        path: '/login',
        component: LoginComponent
    },
    {
        path: '/register',
        component: RegisterComponent
    },
    {
        path: '/cart',
        component: CartComponent,
        beforeEnter: (to, from) => {
            return isLogged ? true : '/login'
        }
    },
    {
        path: '/product/:id?',
        component: SingleProductComponent,
        props: true
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})
createApp(App).use(router).use(VueFire, {
    firebaseApp,
    modules: [
        VueFireAuth()
    ]
}).mount('#app')
