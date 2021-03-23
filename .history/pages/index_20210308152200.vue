<template>
  <div class="container">
    <section v-for="post in posts[9]" :key="post.id">
      <h2 class="mt-5 mb-3 font-bold text-2xl text-center">{{ post.title.rendered }}</h2>
      <div class="flex items-center shadow rounded overflow-hidden bg-gray-100 mt-2">
        <div class="w-1/3">
          <img :src="post['_embedded']['wp:featuredmedia'][0]['media_details']['sizes']['large']['source_url']" alt="Arnaud"
            v-if="post['_embedded']['wp:featuredmedia'] && post['_embedded']['wp:featuredmedia'].length > 0 && post['_embedded']['wp:featuredmedia'][0]['media_details']['sizes']['large']"/>
        </div>
        <div class="w-2/3 lg:p-5">
          <span v-html="post.content.rendered"></span>
        </div>
      </div>
    </section>
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
      console.log(this.posts)
    }
  }
</script>
