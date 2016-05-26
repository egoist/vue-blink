<style>
  html {
    font-size: 16px;
  }
  body {
    font-size: 1rem;
    line-height: 1.5;
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  }
  .app {
    padding-top: 120px;
    text-align: center;
    & .heading {
      font-size: 3rem;
    }
    & .footer {
      margin-top: 200px;
      font-size: 2rem;
    }
  }
</style>

<template>
  <div class="app">
    <h2 class="heading">
      That's right — <Blink text="<blink/>"></Blink> is back!
    </h2>
    <footer class="footer">
      <a href="https://github.com/egoist/vue-blink">
        Checkout the source code on GitHub.
      </a>
    </footer>
  </div>
</template>

<script>
  import Blink from '../src'

  export default {
    components: {
      Blink
    }
  }
</script>
