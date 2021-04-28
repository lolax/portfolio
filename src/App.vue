<template>
  <div id="app">
    <router-view class="view" />
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,500');
#app {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.view {
  width: 70%;
  max-width: 70rem;
  margin: 3rem;
}
html {
  font-size: 62.5%;
  box-sizing: border-box;
}
body {
  margin: 0;
  background: #f6f6f6;
}
@media (max-width: 800px) {
  .view {
    width: 100%;
    max-width: 100rem;
  }
}
</style>
