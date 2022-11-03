<template>
  <div class="header">
    <h3 class="user-name">
      مهران آدوند
    </h3>
    <div class="button-container">
      <nuxt-link to="/trips" class="button" @click="$router.push('/trips')">
        <v-icon class="icon" size="55" color="#066cc0">
          mdi-road-variant
        </v-icon>
        <span class="title">
          سفر ها
        </span>
      </nuxt-link>
      <nuxt-link to="/" class="button">
        <v-icon class="icon" size="55" color="#0066cc">
          mdi-chart-box
        </v-icon>
        <span class="title">
          آمار ها
        </span>
      </nuxt-link>
      <nuxt-link to="/" class="button">
        <v-icon class="icon" size="55" color="#066cc0">
          mdi-steering
        </v-icon>
        <span class="title">
          صدور بیمه
        </span>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePageHeader'
}
</script>

<style scoped>
     a{
         text-decoration: none;
         color: #000;
     }
     a:hover {
         text-decoration:none;
         cursor:pointer;
     }
    .header{
        background: url('../../assets/img/home-page-header-bg.png');
        padding: 30px 10px;
    }
    .button-container{
        width: 100%;
        display: flex;
        justify-content: space-around;
    }
    .user-name{
        color: #fff;
        font-family: "Vazir-Bold-FD";
        width: 100%;
        text-align: center;
        font-size: 24px;
        font-weight: 900;
        margin-bottom: 40px;
    }
    .button{
        background: #fff;
        border-radius: 100%;
        padding: 15px;
        width: 100px;
        height: 100px;
    }
    .icon{
        width: 100%;
        text-align: center;
    }
    .title{
        display: block;
        width: 100%;
        text-align: center;
        font-family: "Samim-FD";
        font-weight: 700;
        font-size: 15px;
        display: block;
    }
</style>
