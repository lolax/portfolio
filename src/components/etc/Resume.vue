<template>
  <div class='resume-container'>
    <progressive-img
      class='resume'
      alt='Lorelei Heffernan Resume'
      :src="require('../../assets/resume.png')"
    />
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
</style>
