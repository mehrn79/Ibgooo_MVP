<template>
  <div>
    <HomePageHeader />
    <v-container dir="rtl" class="rating-body">
      <v-row>
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
      <v-row>
        <v-col cols="12" md="5">
          <v-card>
            <v-card-title>
              <v-row>
                <v-col cols="2">
                  <img class="gps-img" src="~/assets/img/icon_car_geo.svg" alt="car_geo">
                </v-col>
                <v-col cols="6">
                  <p class="travel-title">
                    سفر چهارشنبه صبح
                  </p>
                </v-col>
                <v-col cols="3">
                  <v-btn color="#03d682" class="btn" @click="$router.push('/trips/detail')">
                    جزئیات
                  </v-btn>
                </v-col>
              </v-row>
            </v-card-title>
            <v-card-text>
              <v-row>
                <v-col cols="6">
                  <v-row>
                    <p class="travel-title" style="color:#8e269c">
                      زمان شروع: 8:00
                    </p>
                  </v-row>
                  <v-row>
                    <p class="travel-title" style="color:#8e269c">
                      تاریخ شروع: 00/06/17
                    </p>
                  </v-row>
                </v-col>
                <v-col cols="6">
                  <v-row>
                    <p class="travel-title" style="color:#3192c6">
                      زمان پایان: 9:20
                    </p>
                  </v-row>
                  <v-row>
                    <p class="travel-title" style="color:#3192c6">
                      تاریخ پایان: 00/06/17
                    </p>
                  </v-row>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="5">
          <v-card>
            <v-card-title>
              <v-row>
                <v-col cols="2">
                  <img class="gps-img" src="~/assets/img/icon_car_geo.svg" alt="car_geo">
                </v-col>
                <v-col cols="6">
                  <p class="travel-title">
                    سفر چهارشنبه صبح
                  </p>
                </v-col>
                <v-col cols="3">
                  <v-btn color="#03d682" class="btn" @click="$router.push('/trips/detail')">
                    جزئیات
                  </v-btn>
                </v-col>
              </v-row>
            </v-card-title>
            <v-card-text>
              <v-row>
                <v-col cols="6">
                  <v-row>
                    <p class="travel-title" style="color:#8e269c">
                      زمان شروع: 8:00
                    </p>
                  </v-row>
                  <v-row>
                    <p class="travel-title" style="color:#8e269c">
                      تاریخ شروع: 00/06/17
                    </p>
                  </v-row>
                </v-col>
                <v-col cols="6">
                  <v-row>
                    <p class="travel-title" style="color:#3192c6">
                      زمان پایان: 9:20
                    </p>
                  </v-row>
                  <v-row>
                    <p class="travel-title" style="color:#3192c6">
                      تاریخ پایان: 00/06/17
                    </p>
                  </v-row>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col sm="0" md="1" />
        <v-col cols="12" md="5">
          <v-card>
            <v-card-title>
              <v-row>
                <v-col cols="2">
                  <img class="gps-img" src="~/assets/img/icon_car_geo.svg" alt="car_geo">
                </v-col>
                <v-col cols="6">
                  <p class="travel-title">
                    سفر چهارشنبه صبح
                  </p>
                </v-col>
                <v-col cols="3">
                  <v-btn color="#03d682" class="btn">
                    جزئیات
                  </v-btn>
                </v-col>
              </v-row>
            </v-card-title>
            <v-card-text>
              <v-row>
                <v-col cols="6">
                  <v-row>
                    <p class="travel-title" style="color:#8e269c">
                      زمان شروع: 8:00
                    </p>
                  </v-row>
                  <v-row>
                    <p class="travel-title" style="color:#8e269c">
                      تاریخ شروع: 00/06/17
                    </p>
                  </v-row>
                </v-col>
                <v-col cols="6">
                  <v-row>
                    <p class="travel-title" style="color:#3192c6">
                      زمان پایان: 9:20
                    </p>
                  </v-row>
                  <v-row>
                    <p class="travel-title" style="color:#3192c6">
                      تاریخ پایان: 00/06/17
                    </p>
                  </v-row>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="5">
          <v-card>
            <v-card-title>
              <v-row>
                <v-col cols="2">
                  <img class="gps-img" src="~/assets/img/icon_car_geo.svg" alt="car_geo">
                </v-col>
                <v-col cols="6">
                  <p class="travel-title">
                    سفر چهارشنبه صبح
                  </p>
                </v-col>
                <v-col cols="3">
                  <v-btn color="#03d682" class="btn">
                    جزئیات
                  </v-btn>
                </v-col>
              </v-row>
            </v-card-title>
            <v-card-text>
              <v-row>
                <v-col cols="6">
                  <v-row>
                    <p class="travel-title" style="color:#8e269c">
                      زمان شروع: 8:00
                    </p>
                  </v-row>
                  <v-row>
                    <p class="travel-title" style="color:#8e269c">
                      تاریخ شروع: 00/06/17
                    </p>
                  </v-row>
                </v-col>
                <v-col cols="6">
                  <v-row>
                    <p class="travel-title" style="color:#3192c6">
                      زمان پایان: 9:20
                    </p>
                  </v-row>
                  <v-row>
                    <p class="travel-title" style="color:#3192c6">
                      تاریخ پایان: 00/06/17
                    </p>
                  </v-row>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col sm="0" md="1" />
        <v-col cols="12" md="5">
          <v-card>
            <v-card-title>
              <v-row>
                <v-col cols="2">
                  <img class="gps-img" src="~/assets/img/icon_car_geo.svg" alt="car_geo">
                </v-col>
                <v-col cols="6">
                  <p class="travel-title">
                    سفر چهارشنبه صبح
                  </p>
                </v-col>
                <v-col cols="3">
                  <v-btn color="#03d682" class="btn">
                    جزئیات
                  </v-btn>
                </v-col>
              </v-row>
            </v-card-title>
            <v-card-text>
              <v-row>
                <v-col cols="6">
                  <v-row>
                    <p class="travel-title" style="color:#8e269c">
                      زمان شروع: 8:00
                    </p>
                  </v-row>
                  <v-row>
                    <p class="travel-title" style="color:#8e269c">
                      تاریخ شروع: 00/06/17
                    </p>
                  </v-row>
                </v-col>
                <v-col cols="6">
                  <v-row>
                    <p class="travel-title" style="color:#3192c6">
                      زمان پایان: 9:20
                    </p>
                  </v-row>
                  <v-row>
                    <p class="travel-title" style="color:#3192c6">
                      تاریخ پایان: 00/06/17
                    </p>
                  </v-row>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="5">
          <v-card>
            <v-card-title>
              <v-row>
                <v-col cols="2">
                  <img class="gps-img" src="~/assets/img/icon_car_geo.svg" alt="car_geo">
                </v-col>
                <v-col cols="6">
                  <p class="travel-title">
                    سفر چهارشنبه صبح
                  </p>
                </v-col>
                <v-col cols="3">
                  <v-btn color="#03d682" class="btn">
                    جزئیات
                  </v-btn>
                </v-col>
              </v-row>
            </v-card-title>
            <v-card-text>
              <v-row>
                <v-col cols="6">
                  <v-row>
                    <p class="travel-title" style="color:#8e269c">
                      زمان شروع: 8:00
                    </p>
                  </v-row>
                  <v-row>
                    <p class="travel-title" style="color:#8e269c">
                      تاریخ شروع: 00/06/17
                    </p>
                  </v-row>
                </v-col>
                <v-col cols="6">
                  <v-row>
                    <p class="travel-title" style="color:#3192c6">
                      زمان پایان: 9:20
                    </p>
                  </v-row>
                  <v-row>
                    <p class="travel-title" style="color:#3192c6">
                      تاریخ پایان: 00/06/17
                    </p>
                  </v-row>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import HomePageHeader from '~/components/home-page/header.vue'

export default {
  // middleware: ['check-auth', 'auth'],
  components: {
    HomePageHeader
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
      }
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
        color: #000;
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
</style>
