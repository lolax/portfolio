<template>
  <div class='about-container'>
    <progressive-img
      class='about-img'
      alt='Lola standing beside Lake Annecy'
      :src="require('../../assets/lola.jpg')"
      :placeholder="require('../../assets/lola-small.jpg')"
    />
    <h2>It's nice to meet you, I'm Lola Heffernan.</h2>
    <p>Towards the end of my pre-med Bachelor's program, 
      I was faced with a sizable list of potential clinical career paths. 
      After careful deliberation, I chose "none of the above" and set out to become a software engineer 
      - something I had never envisioned or considered for myself. 
      I have since spent over a year studying full stack web development and computer science, 
      both on my own and as a student at <a class='inline-link' href='https://lambdaschool.com/' target='_blank'>Lambda School</a>.
    </p>
    <p>I am currently seeking a role as a software engineer on an inclusive and ethical team. 
      If you're hiring, I'd love to hear from you. 
      Find my contact information <router-link to ='/connect' class='inline-link'>here</router-link> 
      and learn more about me by checking out my <router-link to='/resume' class='inline-link'>resume</router-link>.
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
    margin: 1rem 2rem;
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
  /* @media (max-width: 400px) {
    h2 {
      width: 23rem;
      margin: auto;
    }
    p {
      margin: 2rem 2rem;
    }
  } */
</style>
