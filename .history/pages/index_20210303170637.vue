<template>
  <div>
    {{ home.title }}
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