<!-- eslint-disable no-undef -->
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
        // eslint-disable-next-line no-undef
        const map = L.map('map', {
          minZoom: 1,
          maxZoom: 20,
          // eslint-disable-next-line no-undef
          crs: L.CRS.EPSG3857,
          center: [31, 52],
          zoom: 5,
          drawControl: false,
          zoomControl: false
        })

        // eslint-disable-next-line no-undef
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 19,
          attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'
        }).addTo(map)
        // eslint-disable-next-line no-undef
        L.control.zoom({
          position: 'bottomleft'
        }).addTo(map)

        // this.showRoute(map)
      }
    }
    // showRoute (map) {
    //   let matchedPoints = []                                                                                                                             02:49:37

    //   points.map(elm => matchedPoints.push(L.latLng(elm.lat, elm.lng)))

    //   const route = new L.polyline.antPath(matchedPoints, {
    //     delay: 400,
    //     weight: 5,
    //     color: '#009459',
    //     pulseColor: '#fff',
    //     paused: false,
    //     reverse: false,
    //     hardwareAccelerated: true
    //   })

    //   map.addLayer(route)
    //   map.fitBounds(route.getBounds())

    //   const startMarker = L.icon({
    //     iconUrl: require('~/assets/img/start.png'),
    //     iconSize: [100, 70],
    //     iconAnchor: [40, 70],
    //     popupAnchor: [-3, -76]
    //   })

    //   L.marker(matchedPoints[0], { icon: startMarker }).addTo(map)

    //   const finishMarker = L.icon({
    //     iconUrl: require('~/assets/img/finish.png'),
    //     iconSize: [100, 70],
    //     iconAnchor: [40, 70]

    //   })
    //   L.marker(matchedPoints[matchedPoints.length - 1], { icon: finishMarker }).addTo(map)
    // }
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
