<script setup>

import Header from './Header.vue';
import Footer from './Footer.vue';
import ProductComponent from './ProductComponent.vue';
import { collection, query, where  } from '@firebase/firestore';
import { useCollection } from 'vuefire';
import { db } from '../firebase.js';

const productos = useCollection(query(collection(db, 'productos'), where('categoria', '==', 'niños')));


</script>

<template>
<div class="lds-ring"><div></div><div></div><div></div><div></div></div>
        <div class="container">
        <Header/>
        <section id="products">
        <input id="categoryForSort" type="hidden" value="mujer">
            <div class="products--text">
                <h1>Niños</h1>
            </div>
            <div class="sortProducts">
            <p>Ordenar por: </p>
                <select name="sort" id="sort">
                    <option value="">Selecciona una opción</option>
                    <option value="asc">Ascendente</option>
                    <option value="desc">Descendente</option>
                </select>
                <button class="sort--button">Ordenar</button>
            </div>
            <div class="products--container">
                <ProductComponent v-for="producto in productos" :key="producto.id" :producto="producto"/>
            </div>
        </section>
        <Footer/>
        </div>
</template>