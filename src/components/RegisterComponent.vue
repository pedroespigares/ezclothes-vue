<script setup>
import Header from './Header.vue';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

var email = ref('');
var psw = ref('');

function register(event) {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, email.value, psw.value)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        email.value = '';
        psw.value = '';
        router.push('/login');
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
    });
}
</script>

<template>
    <div class="container">
        <Header/>
        <section class="login_signup">
            <div class="signup--container">
                <h1>¿No tienes cuenta?</h1>
                <p>Regístrate y disfruta de todas las ventajas de ser cliente de EzClothes</p>
                <form class="SU_form" method="POST">
                    <input id="SU_mail" name="SU_mail" type="email" placeholder="tucorreo@dominio.com" v-model="email" required>
                    <input id="SU_psw" name="SU_psw" type="password" placeholder="Contraseña" v-model="psw" pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$" title="UpperCase, LowerCase, Number/SpecialChar and min 8 Chars" required>
                    <a id="activate_LI">¿Ya tienes cuenta? ¡Inicia sesión!</a>
                    <button @click="register($event)" type="submit">Crear cuenta</button>
                </form>
            </div>
        </section>
        </div>
</template>