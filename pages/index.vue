<template>
  <div>
    <section class="presentation h-screen flex items-center relative justify-center">
      <div class="container">
        <div class="text-center">
          <h1 class="text-6xl text-white font-bold border-b-4 inline-flex">Arnaud Gay</h1>
          <h2 class="text-4xl text-white font-bold">Psychothérapeute</h2>
        </div>
      </div>
      <button class="absolute bottom-0">
        <nuxt-link :to="{ path: '/',hash:'#about'}">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
            class="text-white w-12 h-12">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </nuxt-link>
      </button>
    </section>

    <div class="container"> 
      <div class="grid grid-flow-row lg:grid-flow-col gap-3 mt-5"
        id="about">
        <div v-for="post in posts[9]" :key="post.id">
          <div class="flex items-center shadow rounded overflow-hidden bg-gray-100 mt-2">
            <div class="w-1/3">
              <img :src="post['_embedded']['wp:featuredmedia'][0]['media_details']['sizes']['large']['source_url']" alt="Arnaud"
                v-if="post['_embedded']['wp:featuredmedia'] && post['_embedded']['wp:featuredmedia'].length > 0 && post['_embedded']['wp:featuredmedia'][0]['media_details']['sizes']['large']"/>
            </div>
            <div class="w-2/3 lg:p-5">
              <h2 class="my-3 font-bold text-2xl">{{ post.title.rendered }}</h2>
              <span v-html="post.content.rendered"></span>
            </div>
          </div>
        </div>
      </div>  
      <div class="grid grid-flow-row lg:grid-flow-col gap-3 mt-10"
        id="who">
        <div v-for="post in posts[11]" :key="post.id">
          <h2 class="my-3 font-bold text-4xl text-black">{{ post.title.rendered }}</h2>
          <div class="flex items-center shadow rounded overflow-hidden bg-gray-100 mt-2">
            <div class="p-3" v-html="post.content.rendered"></div>
          </div>
        </div>
      </div>  

      <h2 id="tools" class="my-3 font-bold text-4xl text-black mt-10">Comment ?</h2>
      <div class="grid grid-flow-row lg:grid-flow-col gap-3 ">
        <div v-for="post in posts[8]" :key="post.id">
          <div class="shadow rounded overflow-hidden bg-gray-100 mt-2">
            <div class="flex items-center">
              <div class="w-1/3">
              <img :src="post['_embedded']['wp:featuredmedia'][0]['media_details']['sizes']['full']['source_url']" alt="Arnaud"
                v-if="post['_embedded']['wp:featuredmedia'] && post['_embedded']['wp:featuredmedia'].length > 0 && post['_embedded']['wp:featuredmedia'][0]['media_details']['sizes']['full']"/>
              </div>
              <div class="w-2/3 lg:p-5">
                {{ post.title.rendered }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2 id="stages" class="my-3 font-bold text-4xl text-black mt-10">Stages et ateliers</h2>
      <div class="grid grid-flow-row gap-3 mt-5"
        id="stages">
        <div v-for="post in posts[10]" :key="post.id">
          <div class="flex items-center shadow rounded overflow-hidden bg-gray-100 mt-2">
            <div class="w-1/3">
              <img :src="post['_embedded']['wp:featuredmedia'][0]['media_details']['sizes']['full']['source_url']" alt="Arnaud"
                v-if="post['_embedded']['wp:featuredmedia'] && post['_embedded']['wp:featuredmedia'].length > 0 && post['_embedded']['wp:featuredmedia'][0]['media_details']['sizes']['full']"/>
            </div>
            <div class="w-2/3 p-3">
              <span v-html="post.content.rendered"></span>
              <button class="bg-blue-400 rounded text-white font-bold p-3 mt-3 mx-auto">
                <nuxt-link :to="{ path: '/',hash:'#contact'}">
                  En savoir plus
                </nuxt-link>
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>

    <footer class="mt-24 relative">
      <div class="w-full" style="height: 500px" ref="map"></div>
        <div class="contact-content"
          v-for="post in posts[12]" :key="post.id">
          <h2 id="contact" class="my-3 font-bold text-4xl text-white mt-10 block text-left">Contact</h2>
          <div class="bg-white rounded shadow p-3"
            v-html="post.content.rendered"></div>
          <a class="bg-red-400 text-white p-3 font-bold rounded px-6 mt-4 block text-center"
            href="mailto:san@antonio.net">Contact</a>
        </div>
    </footer>
  </div>
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
            script: [{
                src: "https://maps.googleapis.com/maps/api/js?key=AIzaSyDY2pxq3v7y9FS9neOKJU4AtPlB_xU-ItI",
                hid: "map", 
                defer: true,
            }]
        }
    },
    async fetch() {
      const results = await fetch(
        'http://arnaudgay.re//wp-json/wp/v2/posts?categories=7&_embed'
      ).then(res => res.json());
      results.map(result => {
        const catID = result.categories.filter(cat => cat !== 7)[0];
        if (!this.posts[catID]) {
          this.posts[catID] = [];
        }
        this.posts[catID].push(result);
      })
    },
    mounted(){
        const mapOptions = {
            zoom: 18,
            center: new window.google.maps.LatLng(-21.158540, 55.296580),
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
        const position = new window.google.maps.LatLng(-21.158540, 55.296580)
        const marker = new window.google.maps.Marker({ position })
        marker.setMap(map)
    },
  }
</script>