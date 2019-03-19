<template>
  <div class='resume-container'>
    <img class='resume' src='../../assets/Lola Heffernan.png' alt='Lola Heffernan Resume'>
     <a class='resume-download' href='../../assets/LolaHeffernan.png' download>download</a>
  </div>
</template>

<script>

export default {
  name: 'Resume'
}
</script>

<style scoped>
  .resume-container {
    width: 100%;
    max-width: 80rem;
  }
  .resume {
    width: 100%;
    margin: 1rem 0 3rem;
  }
  .resume-download {
    width: 18rem;
    margin: 3rem;
    padding: 2rem;
    color: black;
    border: 1px solid black;
    background: transparent;
    font-size: 1.2rem;
    font-weight: 400;
    text-decoration: none;
  }
  .resume-download:hover {
    color: white;
    background: black;
    font-weight: 500;
  }
</style>
