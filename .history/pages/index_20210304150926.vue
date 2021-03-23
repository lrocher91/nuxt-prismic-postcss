<template>
  <div class="container">
    <div class="flex items-center shadow rounded overflow-hidden bg-gray-100"
      v-for="post in posts" :key="post.id">
      <div class="w-1/3">
        <!-- <img src="/arnaud.webp" alt="Arnaud" /> -->
      </div>
      <div class="w-2/3 lg:p-5">
        <h2>{{ post.title.rendered }}</h2>
        <span v-html="post.content.rendered"></span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        posts: []
      }
    },
    async fetch() {
      this.posts = await fetch(
        'http://arnaudgay.re//wp-json/wp/v2/posts?categories=7&_embed'
      ).then(res => res.json())
    }
  }
</script>
