<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <div class="home-page-container">
    <HomePageHeader />
    <div v-for="item in cardInfo" :key="item.title">
      <Card
        :buttonText="item.buttonText"
        :icon="item.icon"
        :text="item.text"
        :title="item.title"
      />
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
    }
  }
</style>
