<script setup>
import { ref } from "vue";
import { db } from "../../firebase";
import { collection, addDoc } from "@firebase/firestore";
import {
  getStorage,
  ref as ref2,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";
import { useRouter } from "vue-router";

const router = useRouter();
const titulo = ref("");
const categoria = ref("");
const descripcion = ref("");
const precio = ref("");
const valoraciones = ref("");
const puntuacion = ref("");
const imagen = ref();

const storage = getStorage();

// Funcion para subir imagenes a Firebase Storage, la cual se ejecuta al seleccionar una imagen y guarda la url en la variable imagen

function uploadImage(e) {
  const file = e.target.files[0];
  const storageRef = ref2(storage, `Products/${file.name}`);
  uploadBytes(storageRef, file).then(() => {
    getDownloadURL(storageRef).then((url) => {
      imagen.value = url;
    });
  });
}

// Funcion de guardar producto en Firebase

function saveProduct(event) {
  event.preventDefault();

  //   Creamos un objeto con los datos del producto y lo guardamos en la coleccion productos de Firebase
  const newProduct = {
    titulo: titulo.value,
    categoria: categoria.value,
    descripcion: descripcion.value,
    precio: precio.value,
    valoraciones: valoraciones.value,
    puntuacion: puntuacion.value,
    imagen: imagen.value,
  };

  addDoc(collection(db, "productos"), newProduct)
    .then(() => {
      router.push("/admin-panel");
    })
    .catch((error) => {
      console.log(error);
    });
}
</script>
<template>
  <div class="container">
    <section class="createProduct">
      <div class="create--container">
        <h1>Crear Producto</h1>
        <form class="createForm" method="POST">
          <input
            name="titulo"
            placeholder="Titulo de producto"
            v-model="titulo"
            required
          />
          <select name="categoria" v-model="categoria" required>
            <option value="" selected disabled hidden>Categoria</option>
            <option value="mujer">Mujer</option>
            <option value="hombre">Hombre</option>
            <option value="joyeria">Joyería</option>
            <option value="accesorios">Accesorios</option>
          </select>
          <textarea
            name="descripcion"
            placeholder="Descripción"
            v-model="descripcion"
            required
          ></textarea>
          <input
            name="precio"
            placeholder="Precio"
            type="number"
            step="0.01"
            min="0"
            v-model="precio"
            required
          />
          <input
            name="valoraciones"
            placeholder="Número de valoraciones"
            type="number"
            min="0"
            v-model="valoraciones"
            required
          />
          <input
            name="puntuacion"
            placeholder="Puntuación"
            type="number"
            step="0.1"
            min="0"
            max="5"
            v-model="puntuacion"
            required
          />
          <!-- Este input subirá la imagen a Firestore -->
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
.createProduct {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  grid-column: 1 / -1;
  grid-row: 10 / 64;
}
.create--container {
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.createForm {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.createForm input,
.createForm select {
  width: 100%;
  height: 40px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 0 10px;
}
.createForm textarea {
  width: 100%;
  height: 100px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 0 10px;
  font-family: var(--font-family);
}
.createForm button {
  width: 100%;
  height: 40px;
  margin: 10px 0;
  border-radius: 5px;
  padding: 0 10px;
  background-color: var(--button-color);
  color: #fff;
  cursor: pointer;
}
.createForm button:hover {
  background-color: var(--hover-color);
  box-shadow: var(--box-shadow);
}

.createForm p{
  color: green;
}
</style>
