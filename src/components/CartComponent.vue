<script setup>
import Header from './Header.vue';
</script>

<template>
    <div class="container">
        <Header/>
        <section id="cart">
            <div class="cart--container">
                <h1>Carrito</h1>
                <div class="cart--products">
                    <ul class="cart--list">

                    </ul>
                </div>
                <div class="cart--total">
                    <h2 id="subtotal--text">Subtotal</h2>
                    <p id="subtotal--price"></p>
                    <h2 id="shipping--text">Envío</h2>
                    <p id="shipping--price">1.20€</p>
                    <h2 id="total--text">Total</h2>
                    <p id="total--price"></p>
                    <button class="buy">Comprar</button>
                </div>
        </div>
        </section>
    </div>
</template>