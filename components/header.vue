<template>
  <div>
    <HeaderRes v-if="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm" />
    <v-row v-else class="header-container">
      <v-col cols="3">
        <img class="img-logo" src="~/assets/img/ibgooo-logo-blue.png" alt="">
      </v-col>
    </v-row>
  </div>
</template>

<script>
import HeaderRes from '~/components/header_res.vue'

export default {
  name: 'Header',
  components: {
    HeaderRes
  }
}
</script>

<style scoped>
    .img-logo{
        width: 60%;
    }
    .header-container{
        direction: rtl;
        padding: 30px 50px 0 50px;
    }
</style>
