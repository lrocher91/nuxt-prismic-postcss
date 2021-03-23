<template>
  <p v-if="$fetchState.pending">Fetching mountains...</p>
  <p v-else-if="$fetchState.error">An error occurred :(</p>
  <div v-else>
    <h1>Nuxt Mountains</h1>
    <ul>
      <li v-for="mountain of mountains">{{ mountain.title }}</li>
    </ul>
    <button @click="$fetch">Refresh</button>
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