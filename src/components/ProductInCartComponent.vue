<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
defineProps(["producto"]);

const router = useRouter();

var cart = localStorage.cart ? JSON.parse(localStorage.cart) : [];
var quantitySelected = ref(1);

function goToSingleProduct($id) {
  router.push(`/product/${$id}`);
}

function updateQuantiy(cart, id, newQuantity) {
  cart.forEach(function (productInCart) {
    if (productInCart.id == id) {
      productInCart.quantity = newQuantity;
    }
  });
  localStorage.cart = JSON.stringify(cart);
}

function deleteProductFromCart(cart, id) {
  cart.forEach(function (productInCart, index) {
    if (productInCart.id == id) {
      cart.splice(index, 1);
    }
  });
  localStorage.cart = JSON.stringify(cart);
  location.reload();
}
</script>

<template>
  <li>
    <input id="product--id--cart" type="hidden" :value="producto.id" />
    <img :src="producto.imagen" :alt="producto.titulo" />
    <h3 @click="goToSingleProduct(id)" id="cart--title--link">
      {{ producto.titulo }}
    </h3>
    <p class="price">{{ producto.precio }}€</p>
    <p>{{ producto.talla }}</p>
    <input
      id="product--quantity"
      type="number"
      min="1"
      v-model="quantitySelected"
    />
    <div class="actions">
      <i
        @click="updateQuantiy(cart, producto.id, quantitySelected)"
        class="fa-solid fa-arrows-rotate"
      ></i>
      <i @click="deleteProductFromCart(cart, producto.id)" class="fa-solid fa-trash"></i>
    </div>
  </li>
</template>
