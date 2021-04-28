<template>
  <div class='about-container'>
    <progressive-img
      class='about-img'
      alt='Lorelei standing beside Lake Annecy'
      :src="require('../../assets/lola.jpg')"
      :placeholder="require('../../assets/lola-small.jpg')"
    />
    <h2>It's nice to meet you, I'm Lorelei Heffernan.</h2>
    <p>
      I'm a Software Engineer at <a class='inline-link' href='https://www.elsevier.com/' target='_blank'>Elsevier</a> in NYC.
      Before that I studied Computer Science with an emphasis in Web Development at <a class='inline-link' href='https://lambdaschool.com/' target='_blank'>Lambda School</a> and received a Bachelor's of Science in Health Sciences from Drexel University.
    </p>
    <div class='links'>
      <a class='connect-item' href='mailto:lolahef@gmail.com'>
        <img class='icon' src='../../assets/mail.png' alt='Mail icon'>
        <div class='link-text'>lolahef@gmail.com</div>
      </a>
      <a class='connect-item' href='https://linkedin.com/in/lolahef' target='_blank'>
        <img class='icon' src='../../assets/linkedin.png' alt='LinkedIn icon'>
        <div class='link-text'>LinkedIn</div>
      </a>
      <a class='connect-item' href='https://github.com/lolahef/' target='_blank'>
        <img class='icon' src='../../assets/github.png' alt='Github icon'>
        <div class='link-text'>Github</div>
      </a>
    </div>
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
