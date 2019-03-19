<template>
  <div class='portfolio-container'>
    <div class='project' v-for='project in projects' :key='project.id'>
      <a class='title-link' :href='project.links[0].href' target='_blank'>
        <h2>{{project.name}}</h2>
      </a>
      <img 
        class='demo' 
        :src='require(`../../assets/${project.gif}`)' 
        alt='Project demo'>
      <p>{{project.description}}</p>
      <p>{{project.stack}}</p>
      <div class='links-container'>
        <a 
          class='link'
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
  .title-link {
    color: black;
    text-decoration: none;
  }
  h2 {
    font-size: 2rem;
    font-weight: 500;
  }
  .project {
    background:#F8F8F8;
    margin: 1rem 1rem 4rem;
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
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  .link {
    width: 15rem;
    margin: 1rem 1rem;
    padding: 1.2rem 0;
    color: black;
    border: 1px solid black;
    background: transparent;
    font-size: 1.2rem;
    font-weight: 400;
    text-decoration: none;
  }
  .link:hover {
    color: white;
    background: black;
    font-weight: 500;
  }
  p {
    font-size: 1.8rem;
  }
  @media (max-width: 980px) {
    .project {
      padding: 1rem;
      margin: 3rem 1rem 5rem;
    }
    .demo {
      width: 100%;
    }
    .links-container {
      flex-direction: column;
    }
    .link {
      width: 80%;
    }
  }
</style>
