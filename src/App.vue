<template>
  <div id="app">
    <Nav />
    <router-view class="view" />
  </div>
</template>

<script>
import Nav from './components/nav/Nav.vue'
export default {
  name: 'app',
  components: {
    Nav,
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.view {
  width: 60%;
  max-width: 60rem;
}
@media (max-width: 980px) {
  .view {
    width: 100%;
  }
}
html {
  font-size: 62.5%;
  box-sizing: border-box;
}
body {
  margin: 0;
  background: #f6f6f6;
}
</style>
