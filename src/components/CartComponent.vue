<script setup>
import ProductInCartComponent from "./ProductInCartComponent.vue";
import { cart } from "../main.js";
import { useRouter } from "vue-router";

const router = useRouter();

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

function goToCheckout() {
  router.push("/checkout");
}
</script>

<template>
  <div class="container">
    <section id="cart">
      <div class="cart--container">
        <h1>Carrito</h1>
        <div class="cart--products">
          <ul class="cart--list">
            <ProductInCartComponent
              v-for="producto in cart"
              :producto="producto"
              :key="producto.id"
            />
          </ul>
        </div>
        <div class="cart--total">
          <h2 id="subtotal--text">Subtotal</h2>
          <p id="subtotal--price">{{ calculateSubtotal() }}€</p>
          <h2 id="shipping--text">Envío</h2>
          <p id="shipping--price">1.20€</p>
          <h2 id="total--text">Total</h2>
          <p id="total--price">{{ calculateTotal() }}€</p>
          <button class="buy" @click="goToCheckout()">Comprar</button>
        </div>
      </div>
    </section>
  </div>
</template>
