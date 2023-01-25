<script setup>
import { useRouter } from 'vue-router';
defineProps(['producto'])

const router = useRouter();
function goToSingleProduct($id){
    router.push(`/product/${$id}`);
}

// var file = ref();

// Subir imagenes a Firebase Storage
// function uploadImage(){
    // const storageRef = ref2(storage, 'images');
    // uploadBytes(storageRef, file).then((snapshot) => {
    // console.log('Uploaded a blob or file!');
// });

// Subir archivo: <input type="file" ref="image" @change="uploadImage">

// Obtener imagenes de Firebase Storage
// getDownloadURL(storageRef).then((url) => {
//     console.log(url);
// }).catch((error) => {
//     console.log(error);
// });
</script>

<template>
    <article class="product">
        <input id="product--id--all-products" type="hidden" :value="producto.id">
            <img @click="goToSingleProduct(producto.id)" class="product--img" :src="producto.imagen" :alt="producto.titulo">
            <h3 @click="goToSingleProduct(producto.id)" class="product--title" >{{producto.titulo}}</h3>
            <span>{{producto.categoria}}</span>
            <div class="rating">
                <i :data-star="producto.puntuacion"></i>
                <p>{{producto.valoraciones}}</p>
            </div>
            <p class="price">{{producto.precio}}€</p>
    </article>
</template>