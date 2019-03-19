<template>
  <div class='connect-container'>
    <progressive-img
      class='side-img'
      alt='Lola standing beside a statue in Geneva'
      :src="require('../../assets/genevastatue.jpg')"
      :placeholder="require('../../assets/genevastatue-small.jpg')"
    />
    <div class='links'>
      <a class='connect-item' href='mailto:lolahef@gmail.com'>
        <img class='icon' src='../../assets/mail.png' alt='Mail icon'>
        <div class='link-text'>lolahef@gmail.com</div>
      </a>
      <a class='connect-item' href='tel:+13103868394'>
        <img class='icon' src='../../assets/phone.png' alt='Phone icon'>
        <div class='link-text'>310.386.8394</div>
      </a>
      <a class='connect-item' href='www.linkedin.com/in/lolahef' target='_blank'>
        <img class='icon' src='../../assets/linkedin.png' alt='LinkedIn icon'>
        <div class='link-text'>LinkedIn</div>
      </a>
      <a class='connect-item' href='https://github.com/lolax/' target='_blank'>
        <img class='icon' src='../../assets/github.png' alt='Github icon'>
        <div class='link-text'>Github</div>
      </a>
    </div>
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
  .connect-item {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 4rem;
    padding: 1rem;
    margin: 2rem;
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
    margin-left: 2rem;
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
