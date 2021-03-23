<template>
  <div class="container">
    <div class="flex items-center shadow rounded overflow-hidden bg-gray-100">
      <div class="w-1/3">
        <img src="/arnaud.webp" alt="Arnaud" />
      </div>
      <div class="w-2/3 lg:p-5">
        {{ home.content.rendered }}
        <!-- <span class="block font-bold mb-3">Bonjour,</span>
        <span class="block mb-3">
          Je mets en place une thérapie brève qui allie prise de conscience, gestion des chocs émotionnels et déprogrammation de nos schémas limitants (comportements et croyances toxiques, mémoires des ancêtres...)
        </span>
        <span class="block mb-3">
          Nous avons la capacité de sortir de notre zone de confort, modifier nos perceptions afin de continuer le chemin. qui nous mène vers notre propre force intérieure.
        </span>
        <span class="block mb-3">
          Mon accompagnement est fondé sur quatre outils thérapeutiques: la psychogénéalogie, le mouvement oculaire, la psycho-biologie ainsi que la Programmation Neuro Linguistique (PNL).
        </span>
        <div class="inline-flex rounded overflow-hidden bg-white pr-3 mt-5 text-sm">
          <span class="inline-flex bg-blue-400 text-white items-center p-3 mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
              class="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76" />
            </svg>
          </span>
          <span class="inline-flex">
            Contact : 06 93 407 361 <br />
            arnaudgay.contact@gmail.com
          </span>
        </div> -->
      </div>
    </div>
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
