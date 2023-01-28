<script setup>
import { useRoute, useRouter } from "vue-router";
import { productsCollection } from "../../firebase.js";
import { updateDoc, doc } from "@firebase/firestore";
import {
  getStorage,
  ref as ref2,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";
import { db } from "../../firebase.js";

import { ref } from "vue";

const route = useRoute();
const router = useRouter();

// Como haciamos antes, obtenemos el id del producto a editar mediante la ruta

const id = route.params.id;
const storage = getStorage();

const producto = productsCollection.value.find(
  (producto) => producto.id === id
);

const titulo = ref(producto.titulo);
const categoria = ref(producto.categoria);
const descripcion = ref(producto.descripcion);
const precio = ref(producto.precio);
const valoraciones = ref(producto.valoraciones);
const puntuacion = ref(producto.puntuacion);
const imagen = ref(producto.imagen);

function uploadImage(e) {
  const file = e.target.files[0];
  const storageRef = ref2(storage, file.name);
  uploadBytes(storageRef, file).then(() => {
    getDownloadURL(storageRef).then((url) => {
      imagen.value = url;
    });
  });
}

function updateProduct(event){
  event.preventDefault();
  const docRef = doc(db, "productos", id)
  if(imagen.value != typeof String){
    imagen.value = producto.imagen
  }
  var updatedProduct ={
    titulo: titulo.value,
    categoria: categoria.value,
    descripcion: descripcion.value,
    precio: precio.value,
    valoraciones: valoraciones.value,
    puntuacion: puntuacion.value,
    imagen: imagen.value,
  }
  updateDoc(docRef, updatedProduct)
  .then(() => {
    router.push("/admin-panel");
  })
}
</script>

<template>
  <div class="container">
    <section class="editProduct">
      <div class="edit--container">
        <div class="edit--container--title">
          <h1>Editar producto</h1>
          <img :src="producto.imagen" alt="imagen" />
        </div>
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
            <option value="joyeria">Joyeria</option>
            <option value="accesorios">Accesorios</option>
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
          <button @click="updateProduct($event)" type="submit">
            Actualizar producto
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
  font-family: var(--font-family);
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

.edit--container--title{
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
}

.edit--container--title img{
  width: 10%;
  object-fit: cover;
}
</style>
