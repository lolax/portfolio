<template>
  <div class='connect-container'>
    <progressive-img
      class='side-img'
      alt='Lorelei standing beside a statue in Geneva'
      :src="require('../../assets/genevastatue.jpg')"
      :placeholder="require('../../assets/genevastatue-small.jpg')"
    />
  </div>
</template>

<script>
export default {
  name: 'Connect',
}
</script>

<style scoped>
  .connect-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 50rem;
    margin-top: 1rem;
  }
  .side-img {
    width: 70%;
    height: auto;
    -webkit-box-shadow: 0 0 3px 2px lightgrey;
    -moz-box-shadow: 0 0 3px 2px lightgrey;
    box-shadow: 0 0 3px 2px lightgrey;
  }
  
  @media (max-width: 980px) {
    .connect-container {
      flex-direction: column-reverse;
      padding-bottom: 2rem;
      height: auto;
    }
    .side-img {
      width: 98%;
    }
    
  }
  /* @media (max-width: 980px) {
    .connect-container {
      flex-direction: column-reverse;
      padding-bottom: 2rem;
      height: auto;
    }
    .side-img {
      width: 100%;
      max-width: 70rem!important;
    }
    .connect-item {
      font-size: 4rem;
    }
    .icon {
      width: 5rem;
    }
    .links {
      margin: 3rem 0;
    }
  } */
</style>
