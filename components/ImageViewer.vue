<template>
  <div class="root">
    <SanityImage v-bind:image="images[0]" class="mainImage" :width="mainImageWidth" />
    <ul class="list">
      <li v-for="image in images" v-bind:key="image._key" class="item">
        <SanityImage v-bind:image="image" class="image" :width="imageWidth" />
      </li>
    </ul>
  </div>
</template>

<script>
  import SanityImage from './SanityImage'

  export default {
    props: ['images'],
    data() {
      return {
        mainImageWidth: 500,
        imageWidth: 200
      }
    },
    components: {
      SanityImage
    }
  }
</script>

<style scoped>
  .root {
    width: 20em;
  }

  .mainImage {
    display: block;
    width: 100%;
    height: auto;
    margin-bottom: 1rem;
  }

  .list {
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(3, 1fr);
    margin: 0;
    padding: 0;
  }

  .item {
    display: block;
    border: 1px solid #ccc;
  }

  .image {
    max-width: 100%;
  }


</style>
