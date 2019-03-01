<template>
  <div class='notfound-container'>
    <h2>404</h2>
    <progressive-img
      class='shrug-img'
      :src="require('../../assets/shrug.jpg')"
    />
    <h3>Sorry, I couldn't find that page.</h3>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
}
</script>

<style scoped>
  .shrug-img {
    width: 70%;
    -webkit-box-shadow: 0 0 3px 2px lightgrey;
    -moz-box-shadow: 0 0 3px 2px lightgrey;
    box-shadow: 0 0 3px 2px lightgrey;
  }
  h2 {
    font-size: 2.2rem;
  }
  h3 {
    font-size: 2rem;
  }
</style>
