<script setup>
</script>

<template>
    <header>
            <router-link to="/">
                <img src="../assets/media/logo.png" alt="EzClothes Logo" id="logo-img">
            </router-link>
            <nav>
                <!-- Div para el menu hamburguesa -->
                <div class="checkbtn">
                    <div class="hamburger-lines">
                        <span class="line line1"></span>
                        <span class="line line2"></span>
                        <span class="line line3"></span>
                    </div> 
                </div>
                <ul class="menu">
                    <li><router-link to="/all">Productos</router-link></li>
                    <li><router-link to="/woman">Mujer</router-link></li>
                    <li><router-link to="/men">Hombre</router-link></li>
                    <li><router-link to="/kids">Niños</router-link></li>
                    <li><router-link to="/baby">Bebé</router-link></li>
    
                </ul>
            </nav>
            <div class="login_cart">
                <router-link to="/userAuth"><i class="fas fa-user"></i></router-link>
                <router-link to="/cart"><i class="fas fa-shopping-cart"></i></router-link>
                <i class="fa-solid fa-circle-half-stroke"></i>
            </div>
        </header>
</template>