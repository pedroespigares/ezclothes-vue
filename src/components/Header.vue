<script setup>
import { ref } from "vue";
import { signOut } from "firebase/auth";
import { useRouter } from "vue-router";
import { auth } from "../firebase";
import { cart } from "../main.js";

const router = useRouter();
var isLogged = ref(false);
var userID = ref("");

var hamburguesa = ref(false);

// Ponemos un watcher para que se actualice la variable isLogged cuando se inicie sesion o se cierre

auth.onAuthStateChanged((user) => {
  if (user) {
    isLogged.value = true;
    userID.value = user.uid;
  }
});

function returningCartLenght() {
  return cart.value.length;
}

function calculateSubtotal() {
  var subtotal = 0;
  for (let product of cart.value) {
    subtotal += product.precio * product.cantidad;
  }
  return subtotal;
}

function calculateTotal() {
  var subtotal = calculateSubtotal();
  var total = subtotal + 1.2;
  return total.toFixed(2);
}

function logout() {
  auth.signOut();
  isLogged.value = false;
  router.push("/");
}

function activateHamburguer() {
  hamburguesa.value = !hamburguesa.value;
}

function desactivarHamburguer() {
  hamburguesa.value = false;
}
</script>

<template>
  <header>
    <router-link to="/">
      <img
        src="https://firebasestorage.googleapis.com/v0/b/ezclothes-vue.appspot.com/o/Main%20Page%20Images%2Flogo.png?alt=media&token=facf0a68-e212-4391-9723-1774015a2f5f"
        alt="EzClothes Logo"
        id="logo-img"
      />
    </router-link>
    <nav>
      <!-- Div para el menu hamburguesa -->
      <div
        @click="activateHamburguer"
        :class="['checkbtn', { open: hamburguesa }]">
        <div class="hamburger-lines">
          <span class="line line1"></span>
          <span class="line line2"></span>
          <span class="line line3"></span>
        </div>
      </div>
      <ul class="menu">
        <li>
          <router-link to="/all" @click="desactivarHamburguer()">Productos</router-link>
        </li>
        <li>
          <router-link to="/woman" @click="desactivarHamburguer()"
            >Mujer</router-link
          >
        </li>
        <li>
          <router-link to="/men" @click="desactivarHamburguer()">Hombre</router-link>
        </li>
        <li>
          <router-link to="/jewelry" @click="desactivarHamburguer()">Joyería</router-link>
        </li>
        <li>
          <router-link to="/accessories" @click="desactivarHamburguer()">Accesorios</router-link>
        </li>
        <li v-if="isLogged">
          <router-link to="/admin-panel" @click="desactivarHamburguer()">Administración</router-link>
        </li>
      </ul>
    </nav>
    <div class="login_cart">
      <i
        class="fa-solid fa-right-to-bracket"
        v-if="isLogged"
        @click="logout()"></i>
      <router-link to="/login" v-else @click="desactivarHamburguer()"
        ><i class="fas fa-user"></i>
      </router-link>
      <router-link to="/cart" @click="desactivarHamburguer()">
        <i class="fas fa-shopping-cart" :value="cartLenght"></i>
      </router-link>
      <span class="cartTotal" v-if="isLogged">{{ calculateTotal() }}€</span>
    </div>
    <span class="cartLength" v-if="isLogged">{{ returningCartLenght() }}</span>
  </header>
</template>

<style>
.cartTotal {
  position: relative;
  right: 0rem;
  color: var(--text-color);
  padding: 0 10px 0 10px;
  font-size: 1.2rem;
  font-weight: bold;
  line-height: 1.2;
}

.cartLength {
  font-size: 2rem;
  color: var(--background-color);
  background: var(--hover-color);
  border-radius: 50%;
  padding: 0 7px;
  position: relative;
  right: 8.2rem;
  top: -4rem;
  opacity: 0.9;
  left: 80vw;
}
</style>
