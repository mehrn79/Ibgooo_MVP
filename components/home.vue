<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <div class="home-page-container">
    <HomePageHeader />
    <div class="card-cantainer">
      <div v-for="item in cardInfo" :key="item.title" class="card">
        <Card
          :buttonText="item.buttonText"
          :icon="item.icon"
          :text="item.text"
          :title="item.title"
        />
      </div>
    </div>
    <div class="img-container">
      <img src="~/assets/img/ibgooo-logo-blue.png" alt="">
    </div>
  </div>
</template>

<script>
import HomePageHeader from '~/components/home-page/header.vue'
import Card from '~/components/home-page/card.vue'
export default {
  components: {
    HomePageHeader,
    Card
  },
  data () {
    return {
      gps: null,
      cardInfo: [
        {
          title: 'آمار تحلیل رانندگی',
          text: 'شما در مسیر هستید! به رانندگی تان ادامه دهید. برای بهبود نتایج تان آمار رانندگی تان را بررسی کنید. ',
          icon: 'card-icon1.png',
          buttonText: 'مشاهده آمار رانندگی'
        },
        {
          title: 'نمره خود را بهبود دهید',
          text: 'شما در مسیر هستید! به رانندگی تان ادامه دهید. برای بهبود نتایج تان آمار رانندگی تان را بررسی کنید. ',
          icon: 'card-icon2.png',
          buttonText: 'مطالعه بیشتر'
        }
      ]
    }
  },
  created () {
    this.setGps()
  },
  methods: {
    setGps () {
      this.gps = this.$route.query.location
    }
  }
}
</script>

  <style lang="scss" scoped>
    .home-page-container{
      background: #e1e1e1;

      .img-container{
        display: flex;
        justify-content: center;
      }

      img{
        width: 40%;
        margin: 10px auto;

        @media (min-width: 900px){
          width: 10%;
          margin: 30px auto;
        }
      }
    }

    @media (min-width: 900px){
      .card-cantainer{
        width: 100%;
        display: flex;
        justify-content: space-around;
      }
      .card{
        width: 45%;
      }
    }
  </style>
