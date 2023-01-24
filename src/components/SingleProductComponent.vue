<script setup>
import Header from './Header.vue';
import Footer from './Footer.vue';
import { useRoute } from 'vue-router';
import { doc, getDoc } from '@firebase/firestore';
import { db } from '../firebase.js';

const route = useRoute();
const id = route.params.id;
const docRef = doc(db, "productos", id);
const docSnap = await getDoc(docRef);
const producto = docSnap.data();


console.log(producto);
</script>

<template>
    <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
            <div class="container">
            <Header/>
            <section id="single--product">
                <img :src="producto.imagen" :alt=producto.titulo>
                <div class="product--info">
                    <input id="product--id--single-product" type="hidden" :value=producto.id>
                    <h1>{{producto.titulo}}</h1>
                    <span>${{producto.categoria}}</span>
                    <div class="rating">
                        <i :data-star="producto.puntuacion"></i>
                        <p>({{producto.valoraciones}})</p>
                    </div>
                    <p class="price">{{producto.precio}}€</p>
                    <p>{{producto.descripcion}}</p>
                    <div class="tallas">
                        <label for="product--size">Talla</label>
                        <select name="size" class="size">
                            <option value="XS">XS</option>
                            <option value="S">S</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                            <option value="XL">XL</option>
                        </select>
                    </div>
                    <button class="add-to-cart">Añadir al carrito</button>
                </div>
            </section>
            <Footer/>
    </div>
</template>