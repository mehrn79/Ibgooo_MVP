<template>
  <v-col :cols="cols" :sm="sm">
    <label class="label">{{ label }}</label>
    <input
      v-model="revicedText"
      class="box"
      :class="disabledInput"
      :type="type"
      :readonly="disabled"
      @input="handleInput"
    >
  </v-col>
</template>

<script>
export default {
  name: 'CustomInput',
  props: {
    label: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    cols: {
      type: String,
      required: true
    },
    sm: {
      type: String,
      required: true
    },
    // eslint-disable-next-line vue/require-default-prop
    text: {
      type: String,
      required: false
    },
    disabled: {
      type: Boolean,
      default: false
    }

  },
  data () {
    return {
      revicedText: this.text
    }
  },
  computed: {
    // eslint-disable-next-line vue/return-in-computed-property
    disabledInput () {
      if (this.disabled) { return 'disabled-input' }
    }
  },
  methods: {
    handleInput () {
      this.$emit('inputText', this.revicedText)
    }
  }

}
</script>

<style scoped>
    .label{
        width: 100%;
        display:block;
        margin-right: 25px;
        font-family: 'Vazir-Medium-FD';
        font-size: 17px;
        font-weight: 500;
        line-height: 1.56;
        text-align: right;
        color: #707070;
    }
    input:focus {
        outline: none;
    }
    .box{
        width: 100%;
        height: 40px;
        border-radius: 14px;
        background-color: #f1f6fc;
        border:1px solid #f1f6fc;
        padding: 10px;
    }
    .disabled-input{
        background-color: #e0e0e0;
        border:1px solid #e0e0e0;
    }

</style>
