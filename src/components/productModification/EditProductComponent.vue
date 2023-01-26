<script setup>
import { useRoute } from "vue-router";
import { productsCollection } from "../../firebase.js";
import { ref } from "vue";

const route = useRoute();
const id = route.params.id;

const producto = productsCollection.value.find(
  (producto) => producto.id === id
);
</script>

<template>
  <div class="container">
    <section class="editProduct">
      <div class="edit--container">
        <h1>Editar producto</h1>
        <form class="editForm" method="POST">
          <input
            name="titulo"
            placeholder="Titulo de producto"
            v-model="titulo"
          />
          <select name="categoria" v-model="categoria">
            <option value="" selected disabled hidden>Categoria</option>
            <option value="mujer">Mujer</option>
            <option value="hombre">Hombre</option>
            <option value="niño">Niño</option>
            <option value="bebe">Bebe</option>
          </select>
          <textarea
            name="descripcion"
            placeholder="Descripción"
            v-model="descripcion"
          ></textarea>
          <input
            name="precio"
            placeholder="Precio"
            type="number"
            step="0.01"
            min="0"
            v-model="precio"
          />
          <input
            name="valoraciones"
            placeholder="Número de valoraciones"
            type="number"
            min="0"
            v-model="valoraciones"
          />
          <input
            name="punturacion"
            placeholder="Puntuación"
            type="number"
            step="0.1"
            min="0"
            max="5"
            v-model="puntuacion"
          />
          <input
            ref="imagen"
            type="file"
            accept="image/*"
            @change="uploadImage($event)"
          />
          <button @click="saveProduct($event)" type="submit">
            Crear Producto
          </button>
        </form>
      </div>
    </section>
  </div>
</template>

<style>
.editProduct {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  grid-column: 1 / -1;
  grid-row: 10 / 64;
}
.edit--container {
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.editForm {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.editForm input,
.editForm select {
  width: 100%;
  height: 40px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 0 10px;
}
.editForm textarea {
  width: 100%;
  height: 100px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 0 10px;
}
.editForm button {
  width: 100%;
  height: 40px;
  margin: 10px 0;
  border-radius: 5px;
  padding: 0 10px;
  background-color: var(--button-color);
  color: #fff;
  cursor: pointer;
}
.editForm button:hover {
  background-color: var(--hover-color);
  box-shadow: var(--box-shadow);
}
</style>
