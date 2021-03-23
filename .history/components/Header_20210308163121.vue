<template>
  <header>
      <div class="container">
        <div class="flex items-center">
            <div class="w-1/3">
                <Logo />
            </div>
            <div class="w-2/3">
                <ul class="flex flex-row justify-end">
                    <li class="text-md font-bold mr-5"
                      @click="alert('ok')">Accueil</li>
                    <li class="text-md font-bold mr-5">Pour qui ?</li>
                    <li class="text-md font-bold mr-5">Outils</li>
                    <li class="text-md font-bold mr-5">Ateliers et stages</li>
                    <li class="text-md font-bold">Contact</li>
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
