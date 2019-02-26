<template>
  <div class='connect-container'>
    <img class='bg' src='../../assets/backgroundbridge.jpg'/>
    <a id='mail' class='connect-item' href='mailto:lolahef@gmail.com'>
      <img src='../../assets/mail.png' alt='Mail icon'>
      <div>lolahef@gmail.com</div>
    </a>
    <a id='phone' class='connect-item' href='tel:+13103868394'>
      <img src='../../assets/phone.png' alt='Phone icon'>
      <div>310.386.8394</div>
    </a>
    <a id='linkedin' class='connect-item' href='https://www.linkedin.com/in/lola-heffernan/'>
      <img src='../../assets/linkedin.png' alt='LinkedIn icon'>
      <div>LinkedIn</div>
    </a>
    <a id='github' class='connect-item' href='https://github.com/lolax/'>
      <img src='../../assets/github.png' alt='Github icon'>
      <div>Github</div>
    </a>
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
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 50rem;
    margin-top: 3rem;
    position: relative;
  }
  .bg {
    position: relative;
    z-index: 0;
    width: 140%;
  }
  .connect-item {
    display: flex;
    justify-content: center;
    background: #f6f6f6;
    opacity: 0.7;
    align-items: center;
    position: absolute;
    z-index: 1;
    padding: 0 1rem;
    height: 4rem;
  }
  #mail {
    width: 22rem;
    top: 0rem;
  }
  #phone {
    width: 18rem;
    top: 8rem;
  }
  #linkedin {
    width: 15rem;
    top: 16rem;
  }
  #github {
    width: 12rem;
    top: 24rem;
  }
  img {
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
</style>
