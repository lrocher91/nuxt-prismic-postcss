<template>
  <section class="presentation h-screen flex items-center relative justify-center"
    :style="{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(' + slice.primary.background.url + ')' }">
    <div class="container px-3">
      <div class="text-center">
        <h1 class="text-6xl text-white font-bold border-b-4 inline-flex">
          <prismic-rich-text :field="slice.primary.title" />
        </h1>
        <h2 class="text-4xl text-white font-bold">
          <prismic-rich-text :field="slice.primary.description" />
        </h2>
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
</template>

<script>
export default {
  props: {
    slice: {
      type: Object,
      required: true,
      default() {
        return {}
      },
    },
  },
}
</script>

<style scoped>
.presentation {
  background-image: url('/bg.jpg');
  background-size: auto;
  background-repeat: no-repeat;
}
</style>
