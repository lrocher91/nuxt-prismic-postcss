<template>
    <div>
        <button class="btn rounded-tl rounded-bl p-3 shadow"
            @click="show = !show">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
        </button>
        <nav class="navigation z-10 w-full lg:w-1/2 bg-black"
            v-if="show">
            <ul>
                <li class="text-md font-bold mr-5">
                    <nuxt-link :to="{ path: '/',hash:'#about'}">A propos</nuxt-link>
                </li>
                <li class="text-md font-bold mr-5">
                    <nuxt-link :to="{ path: '/',hash:'#who'}">Pour qui ?</nuxt-link>
                </li>
                <li class="text-md font-bold mr-5"
                    @click="$nuxt.$emit('click', 'tools')">
                    <nuxt-link :to="{ path: '/',hash:'#tools'}">Outils</nuxt-link>
                </li>
                <li class="text-md font-bold mr-5">
                    <nuxt-link :to="{ path: '/',hash:'#stages'}">Ateliers et stages</nuxt-link>
                </li>
                <li class="text-md font-bold">
                    <nuxt-link :to="{ path: '/',hash:'#contact'}">Contact</nuxt-link>
                </li>
            </ul>
        </nav>
    </div>
</template>

<style>
    svg {
        width: 2rem;
    }
    .btn {
        background: #f6ad55;
        position: fixed;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
    }
    nav {
        position: fixed;
        top: 0;
        right: 0;
        transform: translateY(-50%);
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
