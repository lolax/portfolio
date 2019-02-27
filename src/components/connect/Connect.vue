<template>
  <div class='connect-container'>
    <img class='side-img' src='../../assets/genevastatue.jpg'/>
    <div class='links'>
      <a class='connect-item' href='mailto:lolahef@gmail.com'>
        <img class='icon' src='../../assets/mail.png' alt='Mail icon'>
        <div>lolahef@gmail.com</div>
      </a>
      <a class='connect-item' href='tel:+13103868394'>
        <img class='icon' src='../../assets/phone.png' alt='Phone icon'>
        <div>310.386.8394</div>
      </a>
      <a class='connect-item' href='https://www.linkedin.com/in/lola-heffernan/' target='_blank'>
        <img class='icon' src='../../assets/linkedin.png' alt='LinkedIn icon'>
        <div>LinkedIn</div>
      </a>
      <a class='connect-item' href='https://github.com/lolax/' target='_blank'>
        <img class='icon' src='../../assets/github.png' alt='Github icon'>
        <div>Github</div>
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
    margin-top: 3rem;
  }
  .side-img {
    width: 70%;
  }
  .connect-item {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 4rem;
    padding: 1rem;
    margin: 0.5rem;
    border: 1px solid transparent;
  }
  .connect-item:hover {
    border: 1px solid black;
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
 
  @media (max-width: 700px) {
  .connect-container {
    flex-direction: column;
    padding-bottom: 2rem;
    height: auto;
  }
  .connect-item {
    justify-content: space-between;
  }
  .side-img {
    width: 98%;
  }
}
</style>
