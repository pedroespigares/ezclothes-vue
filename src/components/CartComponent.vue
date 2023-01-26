<script setup>
import ProductInCartComponent from "./ProductInCartComponent.vue";
import { getAuth } from "firebase/auth";
import { ref } from "vue";

// Obtenemos ID de usuario
const auth = getAuth();
const user = auth.currentUser;
var userID = ref(user.uid);

// Obtenemos el carrito del usuario
var cart = localStorage.cart ? JSON.parse(localStorage.cart) : [];
var filterCart = cart.filter((producto) => producto.userID === userID.value);
filterCart = ref(filterCart);

// Calculamos el subtotal y total
var subtotal = ref(0);
var total = ref(0);
var shipping = ref(1.2);

function calculateSubtotal(cart) {
  cart = cart.value;
  cart.forEach(function (producto) {
    subtotal.value += producto.precio * producto.cantidad;
  });
  return subtotal.value;
}

// Llamamos a la funcion
calculateSubtotal(filterCart);
total.value = subtotal.value + shipping.value;

// Redondeamos a 2 decimales
total.value = total.value.toFixed(2);
</script>

<template>
  <div class="container">
    <section id="cart">
      <div class="cart--container">
        <h1>Carrito</h1>
        <div class="cart--products">
          <ul class="cart--list">
            <ProductInCartComponent
              v-for="producto in filterCart"
              :producto="producto"
              :carrito="filterCart"
              :key="producto.id"
            />
          </ul>
        </div>
        <div class="cart--total">
          <h2 id="subtotal--text">Subtotal</h2>
          <p id="subtotal--price">{{ subtotal }}€</p>
          <h2 id="shipping--text">Envío</h2>
          <p id="shipping--price">1.20€</p>
          <h2 id="total--text">Total</h2>
          <p id="total--price">{{ total }}€</p>
          <button class="buy">Comprar</button>
        </div>
      </div>
    </section>
  </div>
</template>
