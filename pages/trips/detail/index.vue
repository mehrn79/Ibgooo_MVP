<!-- eslint-disable vue/html-self-closing -->
<!-- eslint-disable no-undef -->
<template>
  <div>
    <v-container dir="rtl" class="rating-body">
      <v-row>
        <div class="page-title">
          <p>چهارشنبه 01/06/14</p>
          <v-icon
            color="#0066cc"
            size="50px"
            @click="$router.push('/trips')"
          >
            mdi-chevron-left
          </v-icon>
        </div>
      </v-row>
      <div class="trips-container">
        <p class="travel-title" style="color:#3192c6;direction: ltr;">
          زمان پایان: 9:20
        </p>
        <p class="travel-title" style="color:#8e269c">
          زمان شروع: 8:00
        </p>
      </div>
      <v-row>
        <v-col v-if="!$vuetify.breakpoint.xs && !$vuetify.breakpoint.sm" sm="0" md="1" />
        <v-col cols="12" md="10">
          <Map />
          <div class="info-container">
            <div class="info-item">
              <div class="title">
                مسافت طی شده
              </div>
              <span class="number">15km</span>
            </div>
            <div class="info-item">
              <div class="title">
                شتاب سریع
              </div>
              <span class="number">2</span>
            </div>
            <div class="info-item">
              <div class="title">
                ترمز ناگهانی
              </div>
              <span class="number">0</span>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Map from '~/components/map.vue'
export default {
  // middleware: ['check-auth', 'auth'],
  components: {
    Map
  },
  data () {
    return {
      date: {
        calendar: '1400/06/17'
      },
      show: {
        calendar: false,
        start: false,
        end: false
      },
      map: null
    }
  }

}
</script>

<style lang="scss"  scoped>
    .rating{
        background: #f9fcff;
        height: auto;

    }
    .rating-body{
        background: white;
        border-radius: 25px;
    }
    .page-title{
        width: 100%;
        margin: 20px 0;
        font-family: "Vazir-Medium-FD";
        font-size:17px;
        font-weight: 700;
        line-height: 1.57;
        color: #004b97;
        direction: rtl;
        padding: 0 15px;
        display: flex;
        justify-content: space-between;
    }
    .gps-img{
        background: #3f51b5;
        padding: 5px;
        width: 60px;
        height: 60px;
        border-radius:100% ;
    }
    .travel-title{
        width: 100%;
        font-family: "Vazir-Bold-FD";
        font-size: 16px;
        font-weight: 700;
        line-height: 3;
        direction: rtl;
        color: #000;
        margin-bottom: 20px;
    }
    .btn{
        font-family: "Vazir-Bold-FD";
        font-size: 15px;
        font-weight: bold;
        line-height: 1.57;
        text-align: center;
        color: #ffffff;
        border-radius: 15px;
        border: none;
        outline:none;
    }
    .box-icon{
        font-family: "Vazir-FD";
        font-size: 15px;
        line-height: 1.59;
        text-align: center;
        font-weight: bold;
        color: #ffffff;
    }
    .date-colender{
        width: 100%;
        display: flex;
        justify-content: center;
        margin: 30px 0;
    }
    .filter-btn{
         font-family: "Vazir-Bold-FD";
        font-size: 15px;
        font-weight: bold;
        line-height: 1.57;
        text-align: center;
        color: #ffffff;
        border: none;
        outline:none;
        margin-right: 20px;
    }
    .travel-date{
        font-family: "Vazir-Bold-FD";
        font-size: 15px;
        font-weight: bold;
        line-height: 2;
        text-align: right;
        color: #000;
        direction: rtl;
        margin-left: 20px;
    }
    .trips-container{
      width: 100%;
      display: flex;
      justify-content: space-between;
      display: rtl;
    }
    .info-container{
      display: flex;
      justify-content: space-around;
      direction: rtl;
      font-family: "Vazir-Bold-FD";

      .title{
        color: #004b97;
        font-size: 17px;
        font-weight: 900;
        margin: 25px 0 15px 0;
      }

      .number{
        color: #004b97;
        font-size: 35px;
        font-weight: 900;
        margin-right: 20px;
      }
    }
</style>
