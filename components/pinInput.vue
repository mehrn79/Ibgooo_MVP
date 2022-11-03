<template>
  <div class="ys-verification">
    <div v-for="item in amount" :key="item" class="input-wrapper">
      <input
        v-model="code[item-1]"
        v-focus="(item - 1) === currentIndex"
        :style="inputColor"
        onwheel="this.blur()"
        type="tel"
        lang="fa"
        maxlength="1"
        size="1"
        @paste="handlePaste"
        @input="handleInput($event,(item-1))"
        @keyup.delete="onDelete($event,(item-1))"
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'VerificationCodeInput',
  directives: {
    focus: {
      componentUpdated (el, obj) {
        obj.value && el.focus()
      }
    }
  },
  props: {
    amount: {
      type: Number,
      default: 4
    },
    color: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      code: [],
      currentIndex: 0
    }
  },
  computed: {
    inputColor () {
      return {
        'border-color': this.color
      }
    }
  },
  created () {
    this.code = new Array(this.amount).fill('')
  },
  methods: {
    handleInput (e, index) {
      this.currentIndex = index
      e.target.value = this.validateNumber(this.code[index])
      e.target.value !== '' && ++this.currentIndex
      !this.code.includes('') && this.$emit('onCompleted', this.code.join(''))
    },
    onDelete (e, index) {
      if (e.target.value === '') {
        this.currentIndex = index - 1
        this.code[index - 1] = ''
      }
    },
    validateNumber (val) {
      return val.replace(/\D/g, '')
    },
    handlePaste (e) {
      e.preventDefault()
    }
  }
}
</script>

  <style scoped>
    .ys-verification{
      width:100%;
      display: flex;
      justify-content: center;
      direction: ltr;
    }
    .input-wrapper{
      width: 15%;
      margin-right: 10px;
      padding-bottom:12%;
      position: relative;
      }
    input{
      position: absolute;
      width: 100%;
      height: 100%;
      text-align: center;
      transition: all 0.3s;
      font-size: 3.8vw;
      font-family: "Vazir-FD";
      font-weight: 700;
      border-bottom: 5px solid ;
    }
    input:focus{
      outline: none;
    }
    input[type="number"]::-webkit-outer-spin-button,
    input[type="number"]::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    input[type="number"] {
        -moz-appearance: textfield;
    }
  </style>
