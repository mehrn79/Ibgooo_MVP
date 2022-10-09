<template>
  <div>
    <h2 class="title">
      {{ title }}
    </h2>
    <h4 class="sub-title">
      {{ subTitle }}
    </h4>
  </div>
</template>

<script>
export default {
  name: 'InfoTitle',
  props: {
    title: {
      type: String,
      required: true
    },
    subTitle: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
    .title{
        font-family: "Vazir";
        font-size: 35px;
        font-weight: 900;
        color: #004bb2;
    }
    .sub-title{
        font-family: "Samim";
        font-size: 20px;
        font-weight: 700;
        color: #0066cc;
        margin: 15px 0;
    }
</style>
