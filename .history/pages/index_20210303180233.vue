<template>
  <div class="container">
    <div class="flex items-center shadow rounded overflow-hidden bg-gray-100"
      v-for="page in page" :key="page.id">
      <div class="w-1/3">
        <img src="/arnaud.webp" alt="Arnaud" />
      </div>
      <div class="w-2/3 lg:p-5"
        v-html="page.content.rendered">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        pages: null
      }
    },
    async fetch() {
      this.pages = await fetch(
        'http://arnaudgay.re/wp-json/wp/v2/pages?_embed'
      ).then(res => res.json())
    }
  }
</script>
