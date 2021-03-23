<template>
  <div>
    <Header />
    <Nav />
    <Nuxt />
  </div>
</template>

<style>
html {
  font-family:
    'Inter',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  font-size: 1em;
}

body {
  background-image: url('/bg.jpg');
  background-size: 100% auto;
  background-position: fixed;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.container {
  margin: 0 auto;
}
</style>
