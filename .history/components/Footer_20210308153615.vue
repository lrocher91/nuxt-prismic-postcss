<template>
  <footer>
    <div style="height: 500px; width: 500px;" ref="map"></div>
  </footer>
</template>

<script>
  export default {
    data() {
      return {
        
      }
    },
    head() {
        return {
            script: [{
                src: "https://maps.googleapis.com/maps/api/js?key=AIzaSyDY2pxq3v7y9FS9neOKJU4AtPlB_xU-ItI",
                hid: "map", 
                defer: true,
            }]
        }
    },
    mounted(){
        const mapOptions = {
            zoom: 18,
            center: new window.google.maps.LatLng(43.758773, -79.391785),
            disableDefaultUI: true,
            zoomControl: true
        };

        const map = new window.google.maps.Map(this.$refs.map, mapOptions);
        const position = new window.google.maps.LatLng(43.758773, -79.391785)
        const marker = new window.google.maps.Marker({ position })
        marker.setMap(map)
    },
  }
</script>