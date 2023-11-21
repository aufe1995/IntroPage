<template>
  <div id="app">
    <Header></Header>

    <HelloWorld msg="Welcome to Your Vue.js App" />

    <Footer></Footer>
  </div>
</template>

<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
import Header from "./components/common/Header.vue";
import Footer from "./components/common/Footer.vue";

</script>

<style scoped>
html,
body {
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
}
</style>
