<template>
  <div class='writing-container'>
    <div class='options'>
      <a 
        class='option code' 
        href='https://github.com/lolax/'
        target='_blank'
      >code</a>
      <a 
        class='option blog' 
        href='https://blog.lola.dev/'
        target='_blank'
      >blog</a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Writing',
  }
</script> 

<style scoped>
  .options {
    display: flex;
    justify-content: center;
  }
  .option {
    font-size: 24px;
    display: flex;
    margin: 10px -100px;
    width: 200px;
    padding: 10px;
    height: 200px;
    cursor: pointer;
    background: #bcdcea;
    color: black;
    text-decoration: none;
  }
  .option:hover {
    background: black;
    color: white;
  }
  .code {
    justify-content: start;
    align-items: start;
    clip-path: polygon(0 0, 0 100%, 100% 0);
  }
  .blog {
    justify-content: end;
    align-items: end;
    clip-path: polygon(100% 0, 0 100%, 100% 100%);
  }
</style>
