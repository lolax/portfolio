<template>
  <div class='nav-container'>
    <div class='name-group link-group'>
      <div class='name'>L</div>
      <div class='name'>O</div>
      <div class='name'>L</div>
      <div class='name'>A</div>
    </div>
    <div class='link-group'>
      <router-link class='link' to='/about'>about</router-link>
      <div class='separator'>/</div>
      <router-link class='link' to='/portfolio'>portfolio</router-link>
      <div class='separator'>/</div>
      <router-link class='link' to='/writing'>writing</router-link>
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
  justify-content: start;
  align-items: center;
  height: 2rem;
  padding: 0.2rem 0.5rem;
  outline: none;
}
.link:hover {
  background: #bcdcea;
}
.link:active {
  border-bottom: 4px double black;
}
.separator {
  font-size: 2rem;
}
.name {
  font-size: 2.6rem;
  padding: 0.5rem;
  cursor: default;
  border-bottom: 4px double transparent;
}
.name-group {
  height: 5rem;
}
</style>
