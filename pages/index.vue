<template>
  <section>
    <div>
      <h1 class="title">
        <a href="http://sanity.io">
          <AppLogo />
        </a>
      </h1>
      <h2 class="subtitle">
        A front-end based on the sanity e-commerce example studio,
        written in <a href="https://vuejs.org/">vuejs</a> and <a href="https://nuxtjs.org/">nextjs</a>
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
  .title {
    font-size: 10vw; 
  }
  .title, .subtitle {
    text-align: center;
    padding: 1em;
    padding-bottom: 0.5em;
  }
</style>