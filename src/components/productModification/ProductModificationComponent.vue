<script setup>
import { useRouter } from "vue-router";
import { db } from "../../firebase";
import { doc, deleteDoc } from "@firebase/firestore";
defineProps(["producto"]);

const router = useRouter();

function deleteProductFromDB(producto) {
  // Confirmación de eliminación para evitar pulsaciones accidentales
  let confirmDelete = confirm(
    "¿Estás seguro de que quieres eliminar este producto?"
  );
  if (confirmDelete) deleteDoc(doc(db, "productos", producto.id));
}

function goToSingleProduct($id) {
  router.push(`/product/${$id}`);
}

function editProduct($id) {
  router.push(`/admin-panel/edit/${$id}`);
}
</script>
<template>
  <li>
    <input id="product--id--cart" type="hidden" :value="producto.id" />
    <img :src="producto.imagen" :alt="producto.titulo" />
    <h3 @click="goToSingleProduct(producto.id)" id="cart--title--link">
      {{ producto.titulo }}
    </h3>
    <div class="actions">
      <i class="fa-solid fa-pen-nib" @click="editProduct(producto.id)"></i>
      <i class="fa-solid fa-trash" @click="deleteProductFromDB(producto)"></i>
    </div>
  </li>
</template>
