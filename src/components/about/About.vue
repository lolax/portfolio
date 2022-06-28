<template>
  <div class='about-container'>
    There's nothing here right now :)
  </div>
</template>

<script>
export default {
  name: 'About',
}
</script>

<style scoped>
  .about-img {
    width: 100%;
    height: auto;
    -webkit-box-shadow: 0 0 2px 2px lightgrey;
    -moz-box-shadow: 0 0 2px 2px lightgrey;
    box-shadow: 0 0 2px 2px lightgrey;
    margin: 1rem 0;
  }
  h2 {
    width: 100%;
    font-size: 2rem;
    font-weight: 500;
  }
  p {
    text-align: left;
    font-size: 1.8rem;
    margin: 3rem 4rem;
  }
  .inline-link {
    border-bottom: 1px solid black;
    text-decoration: none;
    color: black;
  }
  .inline-link:hover {
    background: #bcdcea;
  }
  @media (max-width: 700px) {
    h2 {
      width: 23rem;
      margin: 1rem auto;
    }
    .links {
      flex-direction: column;
      align-items: flex-start !important;
    }
  }
  .connect-item {
    display: flex;
    align-items: center;
    height: 4rem;
    padding: 1rem;
    margin: 0 2rem 2rem;
  }
  .link-text {
    border-bottom: 1px solid black;
  }
  .link-text:hover {
    background: #bcdcea;
  }
  .icon {
    width: 3rem;
    margin-right: 3rem;
    height: auto;
  }
  a {
    text-decoration: none;
    font-size: 1.8rem;
    color: black;
    outline: none;
  }
  .links {
    align-items: center;
    justify-content: center;
    display: flex;
  }
</style>
