<template>
  <div class="describe">
    <v-row>
      <v-col cols="12">
        <div>
          <img class="describe-img" :src="require(`~/assets/img/${imgUrl}`)" alt="describe">
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'ImageContainer',
  props: {
    imgUrl: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
 .describe{
    background: #0066cc;
    padding:20px 40px;
    position: absolute;
    top: 0;
    left: 0;
  }
  .describe-img{
    width: 100%;
    height:95vh;
  }
  @media (max-width: 1264px){
    .describe{
      width:50%
    }
  }
</style>
