<script setup>
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, GithubAuthProvider} from 'firebase/auth';
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

function registerGoogle() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
    .then((userCredential) => {
        // The signed-in user info.
        const user = userCredential.user;
        router.push('/');
        // ...
    }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
    });
}

function registerGitHub(){
    const provider = new GithubAuthProvider();
    signInWithPopup(auth, provider)
    .then((userCredential) => {
        // The signed-in user info.
        const user = userCredential.user;
        router.push('/');
        // ...
    }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
    });
}

function goToLogin() {
    router.push('/login');
}
</script>

<template>
    <div class="container">
        <section class="login_signup">
            <div class="signup--container">
                <h1>Crear cuenta</h1>
                <p>Recuerda, !todos los usuarios creados por este formulario serán administradores!</p>
                <form class="SU_form" method="POST">
                    <input id="SU_mail" name="SU_mail" type="email" placeholder="tucorreo@dominio.com" v-model="email" required>
                    <input id="SU_psw" name="SU_psw" type="password" placeholder="Contraseña" v-model="psw" pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$" title="UpperCase, LowerCase, Number/SpecialChar and min 8 Chars" required>
                    <a @click="goToLogin()" id="activate_LI">¿Ya tienes cuenta? ¡Inicia sesión!</a>
                    <div @click="registerGoogle()" class="google-btn">
                    <div class="google-icon-wrapper">
                        <img class="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
                    </div>
                    <p class="google-btn-text"><b>Crear con Google</b></p>
                    </div>
                    <div @click="registerGitHub()" class="github-btn">
                    <div class="github-icon-wrapper">
                        <img class="github-icon" src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"/>
                    </div>
                    <p class="github-btn-text"><b>Crear con GitHub</b></p>
                    </div>
                    <button @click="register($event)" type="submit">Crear cuenta</button>
                </form>
            </div>
        </section>
        </div>
</template>