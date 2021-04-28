<template>
  <div class='writing-container'>
    <div class='options'>
      <a 
        class='option code' 
        href='https://github.com/lolax/'
        target='_blank'
      >
        <div class='code-text'>code</div>
      </a>
      <a 
        class='option blog' 
        href='https://blog.lorelei.dev/'
        target='_blank'
      >
        <div class='blog-text'>blog</div>
      </a>
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
    display: flex;
    margin: 10px -100px;
    width: 200px;
    padding: 10px;
    height: 200px;
    cursor: pointer;
    background: #bcdcea;
    color: black;
    text-decoration: none;
    position: relative;
  }
  .option:hover {
    background: black;
    color: white;
  }
  .code {
    clip-path: polygon(0 0, 0 100%, 100% 0);
  }
  .blog {
    clip-path: polygon(100% 0, 0 100%, 100% 100%);
  }
  .code-text {
    font-size: 24px;
    position: absolute;
    z-index: 2;
    top: 10px;
    left: 10px;
  }
  .blog-text {
    font-size: 24px;
    position: absolute;
    z-index: 2;
    bottom: 10px;
    right: 10px;
  }
</style>
