import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { auth } from './firebase';
import { getAuth } from 'firebase/auth';
import { ref } from 'vue';
import { onAuthStateChanged } from 'firebase/auth';
import { firebaseApp } from './firebase'
import { VueFire, VueFireAuth } from 'vuefire'
import MainComponent from './components/MainComponent.vue'
import AllProductsComponent from './components/AllProductsComponent.vue'
import WomanComponent from './components/WomanComponent.vue'
import MenComponent from './components/MenComponent.vue'
import JewelryComponent from "./components/JewelryComponent.vue"
import AccessoriesComponent from "./components/AccessoriesComponent.vue"
import LoginComponent from './components/LoginComponent.vue'
import RegisterComponent from './components/RegisterComponent.vue'
import CartComponent from './components/CartComponent.vue'
import CheckoutComponent from './components/CheckoutComponent.vue'
import SingleProductComponent from './components/SingleProductComponent.vue'
import AdminPanelComponent from './components/productModification/AdminPanelComponent.vue'
import CreateProductComponent from './components/productModification/CreateProductComponent.vue'
import EditProductComponent from './components/productModification/EditProductComponent.vue'
import NotAllowedComponent from './components/NotAllowedComponent.vue'
import App from './App.vue'

import './assets/main.css'


window.onload = function() {
    document.getElementsByTagName('body')[0].style.opacity = '1';
    document.getElementsByClassName('lds-ring')[0].style.display = 'none';
};

var isLogged = false;

// -----------------------------------------------

export var cart = ref([]);

// -----------------------------------------------

onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      isLogged = true;
      if(localStorage.cart){
        var rawCart =  JSON.parse(localStorage.cart);
        cart.value = rawCart.filter(item => item.userID == uid);
      }
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
        path: '/jewelry',
        component: JewelryComponent
    },
    {
        path: '/accessories',
        component: AccessoriesComponent
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
        path: '/checkout',
        component: CheckoutComponent,
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
