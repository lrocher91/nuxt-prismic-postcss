<template>
  <footer class="mt-24 relative" id="contact">
    <div class="w-full" style="height: 500px" ref="map"></div>
      <div class="contact-content">
        <h2 id="contact" class="my-3 font-bold text-4xl text-white mt-10 block text-left">
          {{ slice.primary.title }}
        </h2>
        <div class="bg-white rounded shadow p-3">
          <span class="text-sm">
            <prismic-rich-text :field="slice.primary.description" />
          </span>
        </div>
        <a class="bg-red-400 text-white p-3 font-bold rounded px-6 mt-4 block text-center"
          :href="'mailto:' + slice.primary.mail ">{{ slice.primary.cta }}</a>
      </div>
  </footer>
</template>

<script>
export default {
  head() {
      return {
          script: [{
              src: "https://maps.googleapis.com/maps/api/js?key=AIzaSyDY2pxq3v7y9FS9neOKJU4AtPlB_xU-ItI",
              hid: "map", 
              defer: false,
              callback: () => {
                this.gmap();
              }
          }]
      }
  },
  props: {
    slice: {
      type: Object,
      required: true,
      default() {
        return {}
      },
    },
  },
  methods: {
    gmap() {
      const mapOptions = {
        zoom: 18,
        center: new window.google.maps.LatLng(this.slice.primary.location.latitude, this.slice.primary.location.longitude),
        disableDefaultUI: true,
        zoomControl: false,
        draggable: false,
        scaleControl: false,
        scrollwheel: false,
        navigationControl: false,
        streetViewControl: false,
        mapTypeControl: false,
      };

      const map = new window.google.maps.Map(this.$refs.map, mapOptions);
      const position = new window.google.maps.LatLng(this.slice.primary.location.latitude, this.slice.primary.location.longitude)
      const marker = new window.google.maps.Marker({ position })
      marker.setMap(map)
    },
  }
}
</script>

<style scoped>
footer {
    &:after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        background: rgba(0,0,0, .55);
    }
    .contact-content {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: 9;
    }
}
</style>
