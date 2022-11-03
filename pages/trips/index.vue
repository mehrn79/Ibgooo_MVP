<template>
  <div>
    <HomePageHeader />
    <ChangerButton @tripsStatus="(val)=>showMyTrips=val" />
    <v-container dir="rtl" class="rating-body">
      <v-row style="margin-top: 50px;">
        <div class="date-colender">
          <p class="travel-date">
            روز مورد نظر را انتخاب کنید:
          </p>
          <v-btn color="#0066cc" @click="show.calendar=true">
            <v-icon
              class="icon"
              color="#9cceff"
              size="20px"
            >
              mdi-calendar-blank
            </v-icon>
            <div class="box-icon">
              {{ date.calendar }}
            </div>
          </v-btn>
          <client-only>
            <date-picker
              v-model="date.calendar"
              format="jYYYY/jMM/jDD"
              element="my-custom-editable-input"
              :editable="true"
              :show="show.calendar"
              @close="show.calendar=false"
            />
          </client-only>
          <v-btn color="#03d682" class="filter-btn">
            تایید
          </v-btn>
        </div>
      </v-row>
      <div v-if="showMyTrips">
        <div v-for="(item,index) in myTrips" :key="index">
          <TripsCard :is-mobile="false" :trips="item" />
        </div>
      </div>

      <div v-for="(item,index2) in trips" v-else :key="index2">
        <TripsCard :is-mobile="true" :trips="item" @mytrip="addTrips" />
      </div>
    </v-container>
  </div>
</template>

<script>
import HomePageHeader from '~/components/home-page/header.vue'
import ChangerButton from '~/components/changer.vue'
import TripsCard from '~/components/trips-card.vue'

export default {
  // middleware: ['check-auth', 'auth'],
  components: {
    HomePageHeader,
    ChangerButton,
    TripsCard
  },

  data () {
    return {
      showMyTrips: true,
      date: {
        calendar: '1400/06/17'
      },
      show: {
        calendar: false,
        start: false,
        end: false
      },
      trips: [
        {
          id: 1,
          title: 'سفر روز شنبه',
          startTime: '8:00',
          endTime: '8:52'
        },
        {
          id: 9,
          title: 'سفر روز شنبه',
          startTime: '13:02',
          endTime: '14:39'
        },
        {
          id: 2,
          title: 'سفر روز دوشنبه',
          startTime: '17:45',
          endTime: '20:00'
        },
        {
          id: 3,
          title: 'سفر روز چهارشنبه',
          startTime: '10:00',
          endTime: '11:00'
        },
        {
          id: 4,
          title: 'سفر روز چهارشنبه',
          startTime: '15:05',
          endTime: '15:58'
        },
        {
          id: 5,
          title: 'سفر روز پنجشنبه',
          startTime: '20:07',
          endTime: '21:00'
        },
        {
          id: 6,
          title: 'سفر روز جمعه',
          startTime: '12:00',
          endTime: '13:40'
        },
        {
          id: 7,
          title: 'سفر روز جمعه',
          startTime: '21:30',
          endTime: '22:00'
        },
        {
          id: 8,
          title: 'سفر روز شنبه',
          startTime: '20:00',
          endTime: '21:00'
        }
      ],
      myTrips: []
    }
  },
  methods: {
    addTrips (elm) {
      this.myTrips.push(elm)
      this.trips.map((item, index) => item.id === elm.id ? this.trips.splice(index, 1) : item)
    }
  }
}
</script>

<style  scoped>
    .rating{
        background: #e1e1e1;
        height: auto;

    }
    .rating-body{
        background: #e1e1e1;
        border-radius: 25px;
        direction: rtl;
    }
    .page-title{
        width: 100%;
        margin: 20px 0;
        text-align: center;
        font-family: "Vazir-Medium-FD";
        font-size:25px;
        font-weight: 700;
        line-height: 1.57;
        color: #004b97;
    }
    .gps-img{
        background: #3f51b5;
        padding: 5px;
        width: 60px;
        height: 60px;
        border-radius:100% ;
    }
    .travel-title{
        font-family: "Vazir-Bold-FD";
        font-size: 15px;
        font-weight: 700;
        line-height: 3;
        text-align: right;
        color: #fff;
        direction: rtl;
        padding: 0 10px;
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
        padding: 0 20px;
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
        font-family: "Vazir-Bold";
        font-size: 15px;
        font-weight: 700;
        line-height: 2;
        text-align: right;
        color: #000;
        direction: rtl;
    }
    .v-menu{
      display: block;
    }
</style>
