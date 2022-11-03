<template>
  <div class="button-group">
    <button :class="changer1" class="single-button" @click="click1=true ,click2=false , $emit('tripsStatus', 1)">
      سفرهای من
    </button>
    <button :class="changer2" class="single-button" @click="click2=true , click1=false, $emit('tripsStatus', 0)">
      سفرهای اخیر
    </button>
  </div>
</template>

<script>
export default {
  name: 'ChangerButton',
  data () {
    return {
      click1: true,
      click2: false
    }
  },
  computed: {
    // eslint-disable-next-line vue/return-in-computed-property
    changer1 () {
      if (this.click1) { return 'change-color' }
    },
    // eslint-disable-next-line vue/return-in-computed-property
    changer2 () {
      if (this.click2) { return 'change-color' }
    }

  }
}
</script>

<style scoped>
    .button-group{
        direction: rtl;
        background: #0066cc;
        border-radius: 15px;
        width: 60%;
        margin: 10px 70px;
        height: 50px;
        display: flex;
        flex-wrap: nowrap;
        position: absolute;
    }
    .single-button{
        border-radius: 15px;
        height: 100%;
        width: 50%;
        display: inline;
        background: #0066cc;
        border: 1px solid #0066cc;
        cursor: pointer;
        font-family: "Vazir-Bold-FD";
        font-size: 15px;
        font-weight: bold;
        line-height: 1.57;
        color: #f9fcff;
        padding: 5px;
        outline: none;
    }
    .change-color {
      background: #03d682;
    }

</style>
