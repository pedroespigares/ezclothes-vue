<script setup>
import { useRoute } from "vue-router";
import { productsCollection } from "../firebase.js";
import { getAuth } from "firebase/auth";
import { ref } from "vue";

const route = useRoute();
const id = route.params.id;
const auth = getAuth();
const user = auth.currentUser;

var userID = ref("");
var isLogged = ref(false);

// Variable para saber si se ha añadido el producto al carrito
var addedToCart = ref(false);

// Vamos a diferenciar si el usuario está logueado o no para mostrar el botón de añadir al carrito
if (user) {
  userID.value = user.uid;
  isLogged.value = true;
}

const producto = productsCollection.value.find(
  (producto) => producto.id === id
);

var cart = localStorage.cart ? JSON.parse(localStorage.cart) : [];

// Por defecto, la talla es XS
var talla = ref("XS");

function goToLogin() {
  route.push("/login");
}

function addProductToCart(product, size, cart) {

  // Creamos el producto junto al userID para poder filtrar el carrito por usuario
  
  let createdProduct = {
    id: product.id,
    titulo: product.titulo,
    precio: product.precio,
    imagen: product.imagen,
    categoria: product.categoria,
    talla: size,
    cantidad: 1,
    userID: userID.value,
  };

  let productExists = false;

  cart.forEach(function (productInCart) {
    if (
      productInCart.id == createdProduct.id &&
      productInCart.size == createdProduct.size
    ) {
      productInCart.quantity++;
      productExists = true;
    }
  });

  if (!productExists) {
    cart.push(createdProduct);
  }

  addedToCart.value = true;
  localStorage.cart = JSON.stringify(cart);
}
</script>

<template>
  <div class="container">
    <section id="single--product">
      <img :src="producto.imagen" :alt="producto.titulo" />
      <div class="product--info">
        <input
          id="product--id--single-product"
          type="hidden"
          :value="producto.id"
        />
        <h1>{{ producto.titulo }}</h1>
        <span>{{ producto.categoria }}</span>
        <div class="rating">
          <i :data-star="producto.puntuacion"></i>
          <p>({{ producto.valoraciones }})</p>
        </div>
        <p class="price">{{ producto.precio }}€</p>
        <p>{{ producto.descripcion }}</p>
        <div class="tallas">
          <label for="product--size">Talla</label>
          <select name="size" class="size" v-model="talla">
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
          </select>
        </div>
        <button
          @click="addProductToCart(producto, talla, cart)"
          v-if="isLogged"
          class="add-to-cart"
        >
          Añadir al carrito
        </button>
        <button @click="goToLogin" v-else class="add-to-cart" disabled>
          Inicia sesión para añadir al carrito
        </button>
        <p class="addedToCart" v-if="addedToCart">
          ¡Producto añadido al carrito!
        </p>
      </div>
    </section>
  </div>
</template>
