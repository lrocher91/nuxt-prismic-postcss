<template>
    <div>
        <button class="btn rounded-tl rounded-bl p-3 shadow z-20 bg-yellow-600 text-white border-b-2 border-white"
            @click="show = !show">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                v-if="!show">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                v-if="show">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>
        <nav class="navigation z-10 w-full lg:w-1/2 bg-white shadow flex items-center"
            v-if="show">
            <ul class="p-5">
                <li class="text-2xl uppercase mb-4">
                    <nuxt-link :to="{ path: '/',hash:'#about'}">A propos</nuxt-link>
                </li>
                <li class="text-2xl uppercase mb-4">
                    <nuxt-link :to="{ path: '/',hash:'#presentation'}">Méthodologie</nuxt-link>
                </li>
                <li class="text-2xl uppercase mb-4">
                    <nuxt-link :to="{ path: '/',hash:'#stages'}">Stages</nuxt-link>
                </li>
                <li class="text-2xl uppercase mb-4">
                    <nuxt-link :to="{ path: '/',hash:'#contact'}">Contact</nuxt-link>
                </li>
            </ul>
        </nav>
    </div>
</template>

<style scoped>
    svg {
        width: 2rem;
    }
    .btn {
        position: fixed;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
    }
    nav {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
    }
    a {
        color: black;
        text-decoration: none;
    }
    a:link, a:visited, a:hover, a:active {
        color:black;
    }
    .navigation {
        position: fixed;
    }
</style>

<script>
  export default {
    data() {
      return {
        show: false
      }
    },
  }
</script>
