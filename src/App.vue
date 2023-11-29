<template>
  <div id="app">
    <Header></Header>

    <router-link to="/main">main</router-link>
		<router-view></router-view>	

    <Footer></Footer>
  </div>
</template>

<script setup lang="ts">
import Header from "./common/Header.vue";
import Footer from "./common/Footer.vue";

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
