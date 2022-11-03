<template>
  <div>
    <div>
      <v-btn @click="getlocation">
        click me
      </v-btn>
    </div>
    <div>
      {{ getLog }}
    </div>
  </div>
</template>

<script>
import geolocation from 'geolocation'
export default {
  data () {
    return {
      speeds: []
    }
  },
  mounted () {
    // this.getlocation()
  },
  methods: {
    setGps () {
      this.gps = this.$route.query.location
    },
    getlocation () {
      // browserEnv(['navigator'])
      setInterval(() => {
        geolocation.getCurrentPosition((err, position) => {
          if (err) { console.log(err.message) }
          // eslint-disable-next-line no-undef
          speeds.push(position.coords.speed)
        })
      }, 1000)
    },
    computed: {
      getLog () {
        return this.speeds
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
