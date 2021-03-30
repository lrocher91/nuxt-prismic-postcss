<template>
  <section class="section py-10 lg:py-20" id="about">
    <div class="container px-3"> 
      <h2 class="capitalize text-2xl lg:text-4xl font-black text-black mb-5">à propos</h2>
      <div class="flex flex-col lg:flex-row items-center shadow rounded overflow-hidden bg-gray-100">
        <div class="w-full lg:w-1/3">
          <prismic-image :field="slice.primary.image"/>
        </div>
        <div class="w-full lg:w-2/3 p-3 lg:p-5">
          <h2 class="my-3 font-bold text-2xl text-yellow-700">
            {{ slice.primary.title }}
          </h2>
          <prismic-rich-text :field="slice.primary.description" />
        </div>
      </div>
    </div>
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

</style>
