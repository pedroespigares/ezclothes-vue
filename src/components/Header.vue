<script setup>
import { ref } from 'vue';
import { signOut } from 'firebase/auth';
import { useRouter } from 'vue-router';
import { auth} from '../firebase';

const router = useRouter();
var isLogged = ref(false);
var name= ref('');

auth.onAuthStateChanged((user) => {
    if (user) {
        isLogged.value = true;
        user.email = user.email.split('@')[0];
        name.value = user.email;
    }
});

function logout() {
    auth.signOut();
    isLogged.value = false;
    router.push('/');
}
</script>

<template>
    <header>
            <router-link to="/">
                <img src="../assets/media/logo.png" alt="EzClothes Logo" id="logo-img">
            </router-link>
            <nav>
                <!-- Div para el menu hamburguesa -->
                <div class="checkbtn">
                    <div class="hamburger-lines">
                        <span class="line line1"></span>
                        <span class="line line2"></span>
                        <span class="line line3"></span>
                    </div> 
                </div>
                <ul class="menu">
                    <li><router-link to="/all">Productos</router-link></li>
                    <li><router-link to="/woman">Mujer</router-link></li>
                    <li><router-link to="/men">Hombre</router-link></li>
                    <li><router-link to="/kids">Niños</router-link></li>
                    <li><router-link to="/baby">Bebé</router-link></li>
                    <li v-if="isLogged"><router-link to="/admin-panel">Administración</router-link></li>
                </ul>
            </nav>
            <div class="login_cart">
                <span id="username" title="Cerrar sesión" v-if="isLogged" @click="logout()">{{ name.toUpperCase() }}</span>
                <router-link to="/login" v-if="!isLogged"><i class="fas fa-user"></i></router-link>
                <router-link to="/cart"><i class="fas fa-shopping-cart"></i></router-link>
            </div>
        </header>
</template>