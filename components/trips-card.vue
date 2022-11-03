<template>
  <div>
    <v-card style="margin-bottom:20px">
      <v-card-title style="background:#0066cc">
        <v-row>
          <v-col cols="6">
            <p class="travel-title">
              {{ trips.title }}
            </p>
          </v-col>
          <v-spacer />
          <v-col cols="3">
            <v-btn color="#03d682" class="btn" @click="$router.push('/trips/detail')">
              جزئیات
            </v-btn>
          </v-col>
        </v-row>
      </v-card-title>
      <v-card-text style="padding: 30px">
        <v-row>
          <v-col cols="6">
            <v-row>
              <p class="travel-title" style="color:#8e269c">
                زمان شروع: {{ trips.startTime }}
              </p>
            </v-row>
            <v-row v-if="isMobile">
              <p class="travel-title" style="color:#8e269c">
                وضعیت سفر :
              </p>
            </v-row>
          </v-col>
          <v-col dir="ltr" cols="6">
            <v-row>
              <p class="travel-title" style="color:#3192c6">
                زمان پایان: {{ trips.endTime }}
              </p>
            </v-row>
            <v-row v-if="isMobile">
              <v-menu
                top
                :close-on-content-click="closeOnContentClick"
              >
                <template #activator="{ on, attrs }">
                  <v-btn
                    color="#3192c6"
                    v-bind="attrs"
                    style="color:#fff"
                    class="travel-title"
                    v-on="on"
                  >
                    {{ selectName }}
                  </v-btn>
                </template>

                <v-list>
                  <v-list-item-group v-model="select">
                    <v-list-item
                      v-for="(item, index) in items"
                      :key="index"
                    >
                      <v-list-item-title @click="driver(index,trips)">
                        {{ item.title }}
                      </v-list-item-title>
                    </v-list-item>
                  </v-list-item-group>
                </v-list>
              </v-menu>
            </v-row>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'TripsCard',
  props: {
    trips: {
      type: Object,
      required: true
    },
    isMobile: {
      type: Boolean,
      required: true
    }
  },
  data () {
    return {
      select: 1,
      items: [
        { title: 'راننده بودم' },
        { title: 'مسافر بودم' }
      ],
      closeOnContentClick: true
    }
  },
  computed: {
    selectName () {
      if (this.select === 0) { return 'راننده بودم' }
      return 'مسافر بودم'
    }
  },
  methods: {
    driver (index, elm) {
      if (index === 0) { this.$emit('mytrip', elm) }
    }
  }
}
</script>

<style lang="scss" scoped>
    .rating{
        height: auto;

    }
    .rating-body{
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
