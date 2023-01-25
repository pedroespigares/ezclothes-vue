<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
</script>

<template>
        <div class="container">
        <section id="christmas">
            <img src="../assets/media/christmas.jpg" alt="Christmas">
        </section>
        <section id="banner">
            <div class="banner--img">
                <img src="../assets/media/banner.jpg" alt="Banner">
            </div>
            <div class="banner--text">
                <h1>¡Bienvenido a EzClothes!</h1>
                <p>En EzClothes encontrarás todo lo que necesitas para vestirte de la mejor manera. 
                    Tenemos una gran variedad de productos para que puedas elegir lo que más te guste.</p>
                <button id="seeAllProductsButton"><router-link to="/all">Ver todo</router-link></button>
            </div>
        </section>
        <section id="carrousel">
            <img src="../assets/media/carrousel/couple.jpg" id="carrousel-img" alt="Imagen Carrousel">
        </section>
        <section id="follow_us">
           <img src="../assets/media/follow_us_1.jpg" alt="Follow Us First Image" id="FU1" class="FU">
           <img src="../assets/media/follow_us_2.jpg" alt="Follow Us First Image" id="FU2" class="FU">
           <img src="../assets/media/follow_us_3.jpg" alt="Follow Us First Image" id="FU3" class="FU">
            <div class="follow-us--text">
                <h1>¡Síguenos!</h1>
                <p>Te esperamos en nuestras redes sociales.
                    Aquí sucede todo. No te lo pierdas.</p>
                <div class="social-media">
                    <a href="https://www.instagram.com/ezclothes/" target="_blank"><i class="fab fa-instagram"></i></a>
                    <a href="https://www.facebook.com/ezclothes" target="_blank"><i class="fab fa-facebook-f"></i></a>
                    <a href="https://twitter.com/ezclothes" target="_blank"><i class="fab fa-twitter"></i></a>
                </div>
            </div>
        </section>
        <section id="news">
            <div class="news--text">
                <h1>¡Suscríbete a nuestro newsletter!</h1>
                <p>Recibe las últimas novedades y ofertas de EzClothes.</p>
                <form class="NL_form">
                    <input type="email" name="NL_mail" placeholder="Introduce tu email" required>
                    <button type="submit">Suscribirse</button>
                </form>
            </div>
        </section>
    </div>
</template>