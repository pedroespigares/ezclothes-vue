<script setup>
import Header from './Header.vue';
import ProductInCartComponent from './ProductInCartComponent.vue';
import {ref} from 'vue';

var cart = localStorage.cart ? JSON.parse(localStorage.cart) : [];

var subtotal = ref(0);
var total = ref(0);

function calculateSubtotal(cart){
    subtotal.value = 0;
    cart.forEach(function(producto){
        subtotal.value += producto.precio * producto.quantity;
    });
    return subtotal.value;
}

function calculateTotal(subtotal){
    total.value = subtotal + 1.20;
    return total.value;
}
</script>

<template>
    <div class="container">
        <Header/>
        <section id="cart">
            <div class="cart--container">
                <h1>Carrito</h1>
                <div class="cart--products">
                    <ul class="cart--list">
                        <ProductInCartComponent v-for="producto in cart" :producto="producto" :key="producto.id"/>
                    </ul>
                </div>
                <div class="cart--total">
                    <h2 id="subtotal--text">Subtotal</h2>
                    <p id="subtotal--price">{{ calculateSubtotal(cart) }}</p>
                    <h2 id="shipping--text">Envío</h2>
                    <p id="shipping--price">1.20€</p>
                    <h2 id="total--text">Total</h2>
                    <p id="total--price">{{ calculateTotal(subtotal.value) }}</p>
                    <button class="buy">Comprar</button>
                </div>
        </div>
        </section>
    </div>
</template>