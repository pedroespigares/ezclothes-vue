<script setup>
import { useRouter } from "vue-router";
import { db } from "../../firebase";
import { doc, deleteDoc } from "@firebase/firestore";
import { getStorage, ref as ref2, deleteObject } from "@firebase/storage";
const props = defineProps(["producto"]);

const router = useRouter();
const storage = getStorage();
const desertRef = ref2(storage, props.producto.imagen);

function deleteProductFromDB(producto) {
  // Confirmación de eliminación para evitar borrarlo sin querer
  let confirmDelete = confirm(
    "¿Estás seguro de que quieres eliminar este producto?"
  );
  if (confirmDelete) deleteDoc(doc(db, "productos", producto.id));
  deleteObject(desertRef);
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
