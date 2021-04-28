<template>
  <div class='nav-container'>
    <div class='link-group'>
      <router-link class='link' to='/about'>about</router-link>
      <div class='separator'>/</div>
      <router-link class='link' to='/connect'>connect</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Nav',
}
</script>

<style scoped>
.nav-container {
  margin-top: 3rem;
  width: 30%;
  max-width: 40rem;
  min-width: 30rem;
  display: flex;
  flex-direction: column;
}
.router-link-active {
  border-bottom: 4px double black;
}
.link-group {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 1rem 0;
  text-decoration: none;
  color: black;
}
.link {
  font-size: 1.6rem;
  text-decoration: none;
  color: black;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 2rem;
  padding: 0.2rem 0;
  outline: none;
}
.link:active {
  border-bottom: 4px double black;
}
.separator {
  font-size: 2rem;
}
.letter {
  font-size: 2.6rem;
  padding: 0.5rem;
  cursor: default;
  border-bottom: 4px double transparent;
}
.name {
  height: 5rem;
}

@media (max-width: 400px) {
  .nav-container {
    width: 90%;
  }
}
/* @media (max-width: 400px) {
  .nav-container {
    width: 90%;
    max-width: 90rem;
  } 
  .letter {
    font-size: 5rem;
  }
  .link {
    font-size: 4rem;
    height: 4.5rem;
    padding: 0.2rem 0;
  }
  .separator {
    font-size: 4rem;
  }
  .name {
    margin: 1rem 0 3rem;
  } */
/* } */
</style>
