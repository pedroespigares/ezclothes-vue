<script setup>
import { productsCollection } from "../../firebase";
import ProductModificationComponent from "./ProductModificationComponent.vue";
</script>

<template>
  <div class="container">
    <section id="products">
      <div class="products--text">
        <h1>Panel de administración</h1>
      </div>
      <div>
        <div class="products--menu">
          <h2>Productos</h2>
          <router-link to="/admin-panel/create">
            <button class="add-product">Añadir producto</button>
          </router-link>
        </div>
        <div class="products-list">
          <ProductModificationComponent
            v-for="producto in productsCollection"
            :producto="producto"
            :key="producto.id"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<style>
.products-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin-top: 5rem;
  margin-bottom: 10rem;
  gap: 5rem;
}

.products--menu {
  width: 80vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 100%;
  padding-bottom: 5rem;
  padding-top: 3rem;
  border-bottom: 1px solid var(--hover-color);
}

button {
  font-size: 2.2rem;
  font-weight: var(--title-font-weight);
  color: var(--background-color);
  background-color: var(--button-color);
  border: none;
  border-radius: 0.5rem;
  padding: 2rem 3rem;
}

button:hover {
  background-color: var(--hover-color);
  cursor: pointer;
  transition: var(--transition-time);
}
</style>
