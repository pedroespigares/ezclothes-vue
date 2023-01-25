<script setup>
import Header from './Header.vue';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

var email = ref('');
var psw = ref('');

function login(event) {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email.value, psw.value)
    .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        email.value = '';
        psw.value = '';
        router.push('/');
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });
}

function changeToRegisterRoute() {
    router.push('/register');
}
</script>

<template>
    <div class="container">
        <Header/>
        <section class="login_signup">
            <div class="login--container">
                <h1>Soy Cliente/a</h1>
                <form class="LI_form" method="POST">
                    <input id="LI_username" name="LI_username" type="text" placeholder="Nombre de usuario" v-model="email" required>
                    <input id="LI_psw" name="LI_psw" type="password" placeholder="Contraseña" v-model="psw" required>
                    <a>¿Has olvidado tu contraseña?</a>
                    <a @click="changeToRegisterRoute()">¿No tienes cuenta? ¡Regístrate!</a>
                    <p id="login--message">Sesión iniciada</p>
                    <p id="login--error">Usuario o contraseña incorrectos</p>
                    <button @click="login($event)" type="submit">Iniciar sesión</button>
                </form>
            </div>
        </section>
        </div>
</template>