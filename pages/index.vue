<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <div class="home-page-container">
    <HomePageHeader />
    <div class="card-cantainer">
      <div class="card-info" style="background:#03d682;color:#fff">
        <img src="~/assets/Landing Assets/Icon4.png" alt="">
        <h2> مسافت طی شده</h2>
        <span class="number">250 کیلومتر</span>
        <span class="number" style="font-size:12px">شمادر ماه گذشته به اندازه نرمال پیمایش داشته اید</span>
      </div>
      <div class="card-info" style="background:#fff">
        <img src="~/assets/Landing Assets/Icon3 - 2.png" alt="">
        <span class="number"> 82%</span>
        <h2>میزان سرعت مجاز</h2>
        <span style="font-size:12px">شما در ۸۲٪ از مسیر سرعت مجاز را رعایت کرده اید</span>
      </div>
      <div class="card-info" style="background:#fff">
        <img src="~/assets/Landing Assets/Icon2 - 2.png" alt="">
        <span class="number"> 91%</span>
        <h2>میزان شتاب مجاز</h2>
        <span class="number" style="font-size:12px">شما در ۹۱٪ از مسیر با شتاب مناسب رانندگی کرده اید</span>
      </div>
      <div class="card-info" style="background:#ff5252;color:#fff">
        <img src="~/assets/Landing Assets/Icon01.png" alt="">
        <span class="number"> 79%</span>
        <h2>میزان ترمز مجاز</h2>
        <span class="number" style="font-size:12px">شما در ۷۹٪ از مسیر با شدت مناسب ترمز کرده اید</span>
      </div>
    </div>
    <div class="img-container">
      <img src="~/assets/img/ibgooo-logo-blue.png" alt="">
    </div>
  </div>
</template>

<script>
import geolocation from 'geolocation'
import HomePageHeader from '~/components/home-page/header.vue'
import { submitLocations } from '~/firebase/firebaseUtils'
// import browserEnv from 'browser-env';
export default {
  components: {
    HomePageHeader
  },
  data () {
    return {
      gps: null,
      locations: [{ lat: 1 }]
    }
  },
  created () {
    this.setGps()
  },
  mounted () {
    this.getlocation()
    this.sendlocations()
  },
  methods: {
    setGps () {
      this.gps = this.$route.query.location
    },
    getlocation () {
      // browserEnv(['navigator'])
      setInterval(() => {
        geolocation.getCurrentPosition((err, position) => {
          if (err) { console.log(err.message) }
          const { latitude, longitude, speed } = position.coords
          const time = Date()
          this.locations.push({ latitude, longitude, speed, time })
          console.log(this.locations)
        })
      }, 1000)
    },
    sendlocations () {
      setInterval(() => {
        submitLocations(this.locations, 'test_1')
      }, 6000)
    }
  }
}
</script>

<style lang="scss" scoped>

  .card-cantainer{
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  .home-page-container{
    background: #e1e1e1;

    .img-container{
      display: flex;
      justify-content: center;
    }

    .card-info{
      padding: 20px;
      width: 45%;
      border-radius: 25px;
      margin-top: 20px;
      font-family:"Vazir-Bold-FD" ;
      text-align: center;
      .number{
        width: 100%;
        text-align: center;
        font-size:25px;
        font-weight: 900;
        display: block;
      }
      img{
        width: 35%;
      }
      h2{
        font-size: 20px;
        margin-bottom: 10px;
      }
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

</style>
