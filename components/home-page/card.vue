<template>
  <div class="card-container">
    <div class="title">
      <h3>
        {{ title }}
      </h3>
    </div>
    <v-divider />
    <div class="card-body">
      <v-row>
        <v-col cols="8">
          <p class="text">
            {{ text }}
          </p>
        </v-col>
        <v-col cols="4" style="padding:0">
          <img class="card-icon" :src="require(`~/assets/img/${icon}`)" alt="icon">
        </v-col>
      </v-row>
    </div>
    <div class="card-btn">
      <span>{{ buttonText }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    title: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    },
    buttonText: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss"  scoped>
  .card-container{
    padding: 20px;
    margin: 20px;
    background: #fff;
    direction: rtl;

    .title{
      font-family: "Vazir-Bold-FD";
      color: #0066cc;
      font-weight: 700;
      margin-bottom: 10px;
    }

    .card-body{
      font-family: "Samim-FD";

      .text{
        margin-top: 20px;
        font-weight: 700;
        font-size: 14px;
      }

      .card-icon{
        width: 100%;
        margin-top: 20px;
      }
    }

    .card-btn{
      background: #2b5062;
      text-align: center;
      padding: 10px 0;
      font-family: "Vazir-Bold-FD";
      color: #fff;
      margin: 30px -20px -20px;
    }
  }
</style>
