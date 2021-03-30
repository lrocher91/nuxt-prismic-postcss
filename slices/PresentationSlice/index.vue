<template>
  <section class="section py-10 lg:py-20" id="presentation">
    <div class="container px-3">
      <h2 class="font-bold text-4xl text-black mb-5">
        {{ slice.primary.title }}
      </h2>
      <span class="text-sm mb-10 block"><prismic-rich-text :field="slice.primary.description" /></span>
      <div v-for="(item, i) in slice.items" :key="`slice-item-${i}`">
        <div class="shadow rounded overflow-hidden bg-gray-100 my-4">
          <div class="flex flex-col md:flex-row items-center">
            <div class="w-full md:w-1/3">
              <prismic-image class="rounded" :field="item.image"/>
            </div>
            <div class="w-full md:w-2/3 p-3 lg:p-5">
              <h3 class="text-xl border-b-2 mb-3">
                {{ item.title }}
              </h3>
              <span class="text-sm"> <prismic-rich-text :field="item.description"></prismic-rich-text></span>
            </div>
          </div>
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
  mounted(){
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
