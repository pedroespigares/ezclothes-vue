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
import AdminPanelComponent from './components/productModification/AdminPanelComponent.vue'
import CreateProductComponent from './components/productModification/CreateProductComponent.vue'
import EditProductComponent from './components/productModification/EditProductComponent.vue'
import NotAllowedComponent from './components/NotAllowedComponent.vue'
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
        path: '/register-only-for-admins',
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
    },
    {
        path: '/not-allowed',
        component: NotAllowedComponent
    },
    {
        path: '/admin-panel',
        component: AdminPanelComponent,
        beforeEnter: (to, from) => {
            return isLogged ? true : '/not-allowed'
        }
    },
    {
        path: '/admin-panel/create',
        component: CreateProductComponent,
        beforeEnter: (to, from) => {
            return isLogged ? true : '/not-allowed'
        }
    }, 
    {
        path: '/admin-panel/edit/:id?',
        component: EditProductComponent,
        beforeEnter: (to, from) => {
            return isLogged ? true : '/not-allowed'
        }
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
