<template>
  <div style="position: relative;">
    <Header />
    <v-row class="containers">
      <v-col cols="12" md="5">
        <InfoTitle title="قوانین" sub-title="برای استفاده از برنامه لطفا قوانین را مطالعه و تایید کنید." />
        <v-row>
          <v-card
            data-app
            class="law-card"
            max-height="250"
            dir="rtl"
            @scroll.self="onScroll"
          >
            <v-card-title />
            <v-card-text class="card-text">
              اگر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید به متن های برخورده اید که با نام لورم ایپسوم شناخته می‌شوند. لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) متنی ساختگی و بدون معنی است که برای امتحان فونت و یا پر کردن فضا در یک طراحی گرافیکی و یا صنعت چاپ استفاده میشود. طراحان وب و گرافیک از این متن برای پرکردن صفحه و ارائه شکل کلی طرح استفاده می‌کنند.
              طراحان سایت هنگام طراحی قالب سایت معمولا با این موضوع رو برو هستند که محتوای اصلی صفحات آماده نیست. در نتیجه طرح کلی دید درستی به کار فرما نمیدهد. اگر طراح بخواهد دنبال متن های مرتبط بگردد تمرکزش از روی کار اصلی برداشته میشود و اینکار زمان بر خواهد بود. همچنین طراح به دنبال این است که پس از ارایه کار نظر
              دیگران را در مورد
              طراحی جویا شود
              و نمی‌خواهد افراد روی
              متن های موجود تمرکز کنند.

              از آنجا که لورم ایپسوم، شباهت زیادی به متن های واقعی دارد، طراحان معمولا از لورم ایپسوم استفاده میکنند تا فقط به مشتری یا کار فرما نشان دهند که قالب طراحی شده بعد از اینکه متن در آن قرار میگرد چگونه خواهد بود و فونت ها و اندازه ها چگونه در
              نظر گرفته شده است.

              نکته بعدی در مورد متن ساختگی لورم ایپسوم این است که بعضی از طراحان وبسایت و گرافیست کاران بعد از آنکه قالب و محتوای مورد نظرشون را ایجاد کردند از یاد می‌برند که متن لورم را از قسمتهای مختلف سایت حذف کنند و یا با متن دیگری جایگزین کنند. به همین دلیل اغلب اوقات ما با وبسایتهایی مواجه می‌شویم که در گوشه و کنار صفحات آنها متن لورم ایپسوم هنوز وجود دارد و حذف نشده است که این نشان دهنده بی توجهی طراحان است.
            </v-card-text>
          </v-card>
        </v-row>
        <div class="submit-btn">
          <v-btn
            class="submit"
            color="#0066cc"
            width="100%"
            height="50px"
            @click="submit"
          >
            می پذیرم
          </v-btn>
        </div>
      </v-col>
      <v-col v-if="!$vuetify.breakpoint.xs && !$vuetify.breakpoint.sm" md="6">
        <ImageContainer imgUrl="illustration_register-login.svg" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Header from '~/components/header.vue'
import InfoTitle from '~/components/infoTitle.vue'
import ImageContainer from '~/components/imageContainer.vue'
export default {
  components: {
    Header,
    InfoTitle,
    ImageContainer
  },
  data () {
    return {
    }
  },
  methods: {
    submit () {
      this.$router.push({ path: '/', params: { location: 1 } })
    },
    getPhoneNumber (phoneNumber) {
      this.phoneNumber = phoneNumber
      this.disabled = false
    },
    onScroll () {
      this.scrollInvoked++
    }
  }
}
</script>

    <style scoped>
        .containers{
            direction: rtl;
            padding:20px 30px;
        }

        .input{
          margin-top: 30px;
        }
        .submit-btn{
          margin-top: 40px;
          display: flex;
          justify-content: center;
        }
        .submit{
          color: #fff;
          font-family: "Samim";
          font-size: 17px;
          font-weight: 700;
        }
        .law-card{
            overflow-y: hidden;
            overflow-y: scroll;
            margin-top: 20px;
        }
        .card-text{
            font-family: 'Vazir-FD';
            font-size: 15px;
            line-height: 1.5;
            text-align: right;
            padding: 10px 20px;
            color: #000 !important ;
        }
    </style>
