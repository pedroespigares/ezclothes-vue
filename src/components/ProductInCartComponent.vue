<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { cart } from "../main.js";

const props = defineProps(["producto"]);
const router = useRouter();

function goToSingleProduct(id) {
  router.push(`/product/${id}`);
}

function updateProducto(productID, productSize, newQuantity) {
  cart.value.forEach(producto => {
    if(producto.id == productID && producto.talla == productSize){
      producto.cantidad = newQuantity;
    }
  })
  localStorage.cart = JSON.stringify(cart.value);
}

function deleteProductFromCart(productID, productSize){
  cart.value.forEach(producto => {
    if(producto.id == productID && producto.talla == productSize){
      cart.value.splice(cart.value.indexOf(producto), 1);
    }
  })
  localStorage.cart = JSON.stringify(cart.value);
}

var quantitySelected = ref(parseInt(props.producto.cantidad));

// import { ref } from "vue";
// import { useRouter } from "vue-router";
// const props = defineProps(["producto", "carrito"]);

// const router = useRouter();

// var quantitySelected = ref(props.producto.cantidad);

// function goToSingleProduct($id) {
//   router.push(`/product/${$id}`);
// }

// function updateQuantiy(cart, id, newQuantity) {
//   cart.forEach(function (product) {
//     if (product.id == id) {
//       product.cantidad = newQuantity;
//     }
//   });
//   localStorage.cart = JSON.stringify(cart);
//   router.push("/cart");
// }

// function deleteProductFromCart(cart, producto) {
//   cart.splice(cart.indexOf(producto), 1);
//   localStorage.cart = JSON.stringify(cart);
// }
</script>

<template>
  <li>
    <input id="product--id--cart" type="hidden" :value="producto.id" />
    <img :src="producto.imagen" :alt="producto.titulo" />
    <h3 @click="goToSingleProduct(producto.id)" id="cart--title--link">
      {{ producto.titulo }}
    </h3>
    <p class="price">{{ producto.precio }}€</p>
    <p>{{ producto.talla }}</p>
    <input
      id="product--quantity"
      type="number"
      min="1"
      v-model="quantitySelected"
      @change="updateProducto(producto.id, producto.talla, quantitySelected)"
    />
    <div class="actions">
      <i
        @click="deleteProductFromCart(producto.id, producto.talla)"
        class="fa-solid fa-trash"
      ></i>
    </div>
  </li>
</template>
