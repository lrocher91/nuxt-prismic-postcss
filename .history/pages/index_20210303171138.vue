<template>
  <div class="container">
    <div class="flex items-center shadow rounded overflow-hidden bg-gray-100">
      <div class="w-1/3">
        <img src="/arnaud.webp" alt="Arnaud" />
      </div>
      <div class="w-2/3 lg:p-5"
        v-html="home.content.rendered">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        home: null
      }
    },
    async fetch() {
      this.home = await fetch(
        'http://arnaudgay.re/wp-json/wp/v2/pages/25?_embed'
      ).then(res => res.json())
    }
  }
</script>
