<template>
  <section>
    <div>
      <h1 class="title">
        <a href="http://sanity.io">
          <AppLogo />
        </a>
      </h1>
      <h2 class="subtitle">
        A minimal front-end for the sanity e-commerce example schema,
        written on <a href="https://vuejs.org/">vue.js</a> and <a href="https://nuxtjs.org/">nuxt.js</a> with a client-side shopping cart from <a href="https://snipcart.com/">Snipcart</a>.
      </h2>
    </div>
  </section>
</template>

<script>

import AppLogo from '~/components/AppLogo'

export default {
  components: {
    AppLogo
  }
}

</script>

<style scoped>

  section {
    /* background: url('/el-alce-web-544198-unsplash.jpg'); */
    background: url('/adam-birkett-216660-unsplash.jpg');
    background-size: cover;
  }

  .title, .subtitle {
    text-align: center;
    padding: 1em;
  }

  .title {
    font-size: 10vw; 
    padding-bottom: 0.5em;
  }

  .subtitle {
    padding-bottom: 3em;
  }

</style>