<script setup>
import ProductComponent from "./ProductComponent.vue";
import { productsCollection } from "../firebase.js";
// import { collection, query, where } from "@firebase/firestore";
// import { useCollection } from "vuefire";
// import { db } from "../firebase.js";
// import { ref } from "vue";
// import { watchEffect } from "vue";

// const loading = ref(true);
// console.log(loading.value);
// const productos = useCollection(
//   query(collection(db, "productos"), where("categoria", "==", "mujer"))
// );

// watchEffect(() => {
//   if (productos.value) {
//     loading.value = false;
//   }
// });


// He intentado con el codigo de arriba el preload de los productos
// el loading funciona bien, si esta en true (cargando los productos en teoria) muestra el spinner,
// y al cargar los productos, se oculta el spinner y se muestran los productos
// pero no termino de ver si realmente el spinner se muestra antes de cargar los productos pq la carga va muy rapida
// (aunque creo q no se muestra)


// Además, para hacerlo necesitaría hacer una petición para cada categoría, y eso en tema de eficiencia no es muy rentable,
// porque con como lo estoy haciendo solo hago una petición a la base de datos y me devuelve todos los productos
// y luego los filtro por categoría con el filter

const productos = productsCollection.value.filter(
  (producto) => producto.categoria === "mujer"
);
</script>

<template>
  <div class="container">
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
  </div>
</template>
