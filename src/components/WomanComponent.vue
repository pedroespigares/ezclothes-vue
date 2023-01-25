<script setup>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import ProductComponent from "./ProductComponent.vue";
import { productsCollection } from "../firebase.js";

const productos = productsCollection.value.filter(
  (producto) => producto.categoria === "mujer"
);
</script>

<template>
  <div class="container">
    <Header />
    <section id="products">
      <div class="products--text">
        <h1>Mujer</h1>
      </div>
      <div class="products--container">
        <ProductComponent
          v-for="producto in productos"
          :key="producto.id"
          :producto="producto"
        />
      </div>
    </section>
    <Footer />
  </div>
</template>
