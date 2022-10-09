<template>
  <div>
    <Header />
    <v-row class="containers">
      <v-col cols="12" md="5">
        <InfoTitle title="ثبت نام" sub-title="لطفا اطلاعات زیرا بادقت پر کنید:" />
        <v-row>
          <customInput
            label="نام"
            type="text"
            cols="12"
            sm="6"
            :text="fname"
            @inputText="addFname"
          />
          <customInput
            label="نام خانوادگی"
            type="text"
            cols="12"
            sm="6"
            :text="lname"
            @inputText="addLname"
          />
        </v-row>
        <v-row>
          <customInput
            label="تلفن همراه"
            type="text"
            cols="12"
            sm="6"
            :text="fname"
            @inputText="addFname"
          />
          <customInput
            label="ایمیل"
            type="text"
            cols="12"
            sm="6"
            :text="fname"
            @inputText="addFname"
          />
        </v-row>
        <div class="submit-btn">
          <v-btn
            class="submit"
            color="#0066cc"
            width="100%"
            height="50px"
            :loading="loading"
            :disabled="disabled"
            @click="$router.push('/auth/law')"
          >
            ثبت
          </v-btn>
        </div>
      </v-col>
      <v-col v-if="!$vuetify.breakpoint.xs && !$vuetify.breakpoint.sm" md="6">
        <ImageContainer imgUrl="Illustration_signup_detail.svg" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Header from '~/components/header.vue'
import InfoTitle from '~/components/infoTitle.vue'
import CustomInput from '~/components/customeInput.vue'
import ImageContainer from '~/components/imageContainer.vue'

export default {
  components: {
    Header,
    InfoTitle,
    CustomInput,
    ImageContainer
  }
}
</script>

<style  scoped>
    .containers{
        direction: rtl;
        padding: 50px;
    }
    .submit-btn{
        margin-top: 80px;
        display: flex;
        justify-content: center;
    }
    .submit{
        color: #fff;
        font-family: "Samim";
        font-size: 17px;
        font-weight: 700;
    }
</style>
