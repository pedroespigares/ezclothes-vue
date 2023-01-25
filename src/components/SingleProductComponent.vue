<script setup>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import { useRoute } from "vue-router";
import { productsCollection } from '../firebase.js';
import { ref } from 'vue';

const route = useRoute();
const id = route.params.id;

const producto = productsCollection.value.find(
  (producto) => producto.id === id
);

var cart = localStorage.cart ? JSON.parse(localStorage.cart) : [];
var talla = ref("XS");

function addProductToCart(product, size, cart) {
        let createdProduct = {
            id: product.id,
            titulo: product.titulo,
            precio: product.precio,
            imagen: product.imagen,
            categoria: product.categoria,
            talla: size,
            cantidad: 1
        }
    
        let productExists = false;
    
        cart.forEach(function(productInCart) {
            if(productInCart.id == createdProduct.id && productInCart.size == createdProduct.size){
                productInCart.quantity++;
                productExists = true;
            }
        });
    
        if(!productExists){
            cart.push(createdProduct);
        }
    
        localStorage.cart = JSON.stringify(cart);
    }

</script>

<template>
  <div class="container">
    <Header />
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
        <button @click="addProductToCart(producto,talla,cart)" class="add-to-cart">Añadir al carrito</button>
      </div>
    </section>
    <Footer />
  </div>
</template>
