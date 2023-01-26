<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const props = defineProps(["producto", "carrito"]);

const router = useRouter();

var quantitySelected = ref(props.producto.cantidad);

function goToSingleProduct($id) {
  router.push(`/product/${$id}`);
}

function updateQuantiy(cart, id, newQuantity) {
  cart.forEach(function (product) {
    if (product.id == id) {
      product.cantidad = newQuantity;
    }
  });
  localStorage.cart = JSON.stringify(cart);
  router.push("/cart");
}

function deleteProductFromCart(cart, producto) {
  cart.splice(cart.indexOf(producto), 1);
  localStorage.cart = JSON.stringify(cart);
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
        @click="updateQuantiy(carrito, producto.id, quantitySelected)"
        class="fa-solid fa-arrows-rotate"
      ></i>
      <i
        @click="deleteProductFromCart(carrito, producto)"
        class="fa-solid fa-trash"
      ></i>
    </div>
  </li>
</template>
