<template>
  <div class='portfolio-container'>
    <div class='project' v-for='project in projects' :key='project.id'>
      <h2>{{project.name}}</h2>
      <img class='demo' :src='require(`../../assets/${project.gif}`)' alt='Project demo'>
      <p>{{project.description}}</p>
      <div class='links-container'>
        <a 
          v-for='link in project.links' 
          :key='link.id' 
          :href='link.href'
          target='_blank'
        >
          {{link.text}}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  import projectData from './projectData.js'
  export default {
    data() {
      return {
        projects: projectData
      }
    }
  }
</script>

<style scoped>
  h2 {
    font-size: 2rem;
  }
  .project {
    background:#F8F8F8;
    margin: 6rem 1rem;
    padding: 3rem;
    border-radius: 3px;
    -webkit-box-shadow: 0 0 5px 2px lightgrey;
    -moz-box-shadow: 0 0 5px 2px lightgrey;
    box-shadow: 0 0 5px 2px lightgrey;
  }

  .demo {
    width: 90%;
  }

  .links-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  a {
    width: 15rem;
    margin: 1rem 1rem;
    padding: 1.2rem 0;
    color: black;
    border: 1px solid black;
    background: transparent;
    font-size: 1.4rem;
    text-decoration: none;
  }

  a:hover {
    color: white;
    background: black;
  }

  p {
    font-size: 1.8rem;
  }
</style>
