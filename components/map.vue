/* eslint-disable no-undef */
<template>
  <div>
    <v-row>
      <div id="map" />
    </v-row>
  </div>
</template>

<script>
import 'leaflet/dist/leaflet.css'
export default {
  name: 'Map',
  mounted () {
    this.createMap()
  },
  methods: {

    createMap () {
      // eslint-disable-next-line no-undef
      if (process.client) {
        const map = L.map('map', {
          minZoom: 1,
          maxZoom: 20,
          crs: L.CRS.EPSG3857,
          center: [31, 52],
          zoom: 5,
          drawControl: false,
          zoomControl: false
        })

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 19,
          attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'
        }).addTo(map)
        L.control.zoom({
          position: 'bottomleft'
        }).addTo(map)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
    #map{
        height: 72vh;
        width: 100%;
        margin: 0 15px;
    }
</style>
