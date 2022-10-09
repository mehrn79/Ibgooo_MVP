<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <div style="position: relative;">
    <Header />
    <v-row class="containers">
      <v-col cols="12" md="6">
        <InfoTitle title="ارسال کد" sub-title="لطفا شماره تلفن همراه خود را وارد کنید." />
        <div slot="VerificationCode" class="input">
          <VerificationCodeInput
            color="#3198ff"
            :amount="10"
            @onCompleted="getPhoneNumber"
          />
        </div>
        <div class="submit-btn">
          <v-btn
            class="submit"
            color="#0066cc"
            width="100%"
            height="50px"
            :loading="loading"
            :disabled="disabled"
            @click="submit"
          >
            ثبت
          </v-btn>
        </div>
      </v-col>
      <v-col v-if="!$vuetify.breakpoint.xs && !$vuetify.breakpoint.sm" md="6">
        <ImageContainer imgUrl="Illustration_code.svg" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Header from '~/components/header.vue'
import VerificationCodeInput from '~/components/pinInput.vue'
import InfoTitle from '~/components/infoTitle.vue'
import ImageContainer from '~/components/imageContainer.vue'
export default {
  components: {
    Header,
    VerificationCodeInput,
    InfoTitle,
    ImageContainer
  },
  data () {
    return {
      phoneNumber: null,
      loading: false,
      disabled: true
    }
  },
  methods: {
    submit () {
      /* if(!this.disabled){
                    this.loading=true
                    this.$store.dispatch('login',this.phoneNumber)
                    .then(()=>{
                        this.loading=false
                        this.$router.push('/auth/code')
                    })
                } */
      this.$router.push('/auth/code')
    },
    getPhoneNumber (phoneNumber) {
      this.phoneNumber = phoneNumber
      this.disabled = false
    }
  }
}
</script>

<style scoped>
    .containers{
        direction: rtl;
        padding: 50px
    }

    .input{
      margin-top: 30px;
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
