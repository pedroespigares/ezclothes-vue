<script setup>
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  GithubAuthProvider,
} from "firebase/auth";
import { auth } from "../firebase";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

var email = ref("");
var psw = ref("");

// Variable para mostrar mensaje de error en caso de que el usuario o la contraseña sean incorrectos
var isWrong = ref(false);

function login(event) {
  event.preventDefault();
  signInWithEmailAndPassword(auth, email.value, psw.value)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      email.value = "";
      psw.value = "";
      isWrong.value = false;
      router.push("/");
    })
    .catch((error) => {
      isWrong.value = true;
    });
}

function loginGoogle() {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((userCredential) => {
      // The signed-in user info.
      const user = userCredential.user;
      router.push("/");
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
    });
}

function loginGithub() {
  const provider = new GithubAuthProvider();
  signInWithPopup(auth, provider)
    .then((userCredential) => {
      // The signed-in user info.
      const user = userCredential.user;
      router.push("/");
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GithubAuthProvider.credentialFromError(error);
      // ...
    });
}
</script>

<template>
  <div class="container">
    <section class="login_signup">
      <div class="login--container">
        <h1>Iniciar sesión</h1>
        <form class="LI_form" method="POST">
          <input
            id="LI_username"
            name="LI_username"
            type="text"
            placeholder="Nombre de usuario"
            v-model="email"
            required
          />
          <input
            id="LI_psw"
            name="LI_psw"
            type="password"
            placeholder="Contraseña"
            v-model="psw"
            required
          />
          <a>¿Has olvidado tu contraseña?</a>
          <div @click="loginGoogle()" class="google-btn">
            <div class="google-icon-wrapper">
              <img
                class="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              />
            </div>
            <p class="google-btn-text"><b>Iniciar con Google</b></p>
          </div>
          <div @click="loginGithub()" class="github-btn">
            <div class="github-icon-wrapper">
              <img
                class="github-icon"
                src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
              />
            </div>
            <p class="github-btn-text"><b>Iniciar con Github</b></p>
          </div>
          <p v-if="isWrong" id="login--error">
            Usuario o contraseña incorrectos
          </p>
          <button @click="login($event)" type="submit">Iniciar sesión</button>
        </form>
      </div>
    </section>
  </div>
</template>
