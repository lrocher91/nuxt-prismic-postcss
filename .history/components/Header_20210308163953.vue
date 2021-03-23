<template>
  <header>
      <div class="container">
        <div class="flex items-center">
            <div class="w-1/3">
                <Logo />
            </div>
            <div class="w-2/3">
                <ul class="flex flex-row justify-end">
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
            </div>
        </div>
      </div>
  </header>
</template>

<style>
.NuxtLogo {
  animation: 1s appear;
  margin: auto;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>
