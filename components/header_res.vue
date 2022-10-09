<template>
  <div class="header">
    <img class="img" src="~/assets/img/ibgooo-logo-white.png" alt="logo">
  </div>
</template>

<script>
export default {
  name: 'HeaderRes'
}
</script>

<style scoped>
  .header{
    background: #0066cc;
    padding: 10px 20px;
    direction: ltr;
  }
  .img{
    width: 40%;
  }
  @media (min-width: 480px){
    .img{
      width: 20%;
    }
  }
</style>
