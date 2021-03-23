<template>
  <footer>
    <div style="height: 500px; width: 500px;" ref="map"></div>
  </footer>
</template>

<script>
  export default {
    data() {
      return {
        posts: []
      }
    },
    head() {
        return {
            title: 'Properties',
            script: [{
                src: "https://maps.googleapis.com/maps/api/js?key=XXX",
                hid: "map", 
                defer: true,
            }]
        }
    }
  }
</script>