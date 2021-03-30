<template>
  <section class="section py-10 lg:py-20" id="stages">
    <div class="container px-3">
      <h2 class="font-bold text-4xl text-black mb-5">
        {{ slice.primary.title }}
      </h2>
      <span class="text-sm"><prismic-rich-text :field="slice.primary.description" /></span>
      <div v-for="(item, i) in slice.items" :key="item.uid">
        <div class="shadow rounded bg-gray-100 my-4 text-left p-3 flex flex-col">
          <h3 class="text-xl border-b-2 inline-flex px-3 my-3 justify-center pb-5">
            {{ item.title }}
          </h3>
          <span class="inline-flex text-sm"> <prismic-rich-text :field="item.description" /> </span>
          <prismic-link :field="item.link" class="inline-flex bg-blue-400 rounded text-white p-3 mb-3 mx-auto focus:text-white link:text-white">
            <button class="text-sm text-white">{{ item.cta }}</button>
          </prismic-link>
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
  mounted() {
    console.log(this.slice)
  }
}
</script>

<style scoped>

  * {
    font-family: 'Open Sans', sans-serif;
  }
  .section {
    position: relative;
  }
  .section::before {
    position: absolute;
    content: '';
    width: 20%;
    height: .15rem;
    background: rgba(0, 0, 0, .85);
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 25rem;
  }
  .title {
    margin-bottom: 2em;
  }
</style>
