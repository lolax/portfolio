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
</style>
