<script setup>
  import Header from './components/Header.vue'
  import Footer from './components/Footer.vue'
</script>

<template>
  <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
  <Header />
  <router-view/>
  <Footer />
</template>