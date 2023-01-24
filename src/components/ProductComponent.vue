<script setup>
import { useRouter } from 'vue-router';
defineProps(['producto'])

const router = useRouter();
function goToSingleProduct($id){
    router.push(`/product/${$id}`);
}
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