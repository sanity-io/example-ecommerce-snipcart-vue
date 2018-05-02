<template>
  <div class="root">
    <div style="cursor: pointer" @click="setActiveImage(images[0])">
      <SanityImage
        :image="images[0]"
        :width="mainImageWidth"
        class="mainImage"    
      />
    </div>
    <ul class="list">
      <li
        v-for="image in images"
        :key="image._key"
        class="item"
        @click="setActiveImage(image)"
      >
        <SanityImage :image="image" :width="imageWidth" class="image" />
      </li>
    </ul>

    <div v-if="activeImage" class="activeImage">
      <svg class="close" viewBox="0 0 96 96" @keyup.esc="close" @click="close">
        <polygon fill="currentColor" points="96,14 82,0 48,34 14,0 0,14 34,48 0,82 14,96 48,62 82,96 96,82 62,48 "/>
      </svg>
      <SanityImage :image="activeImage" class="image" width="1000" />
    </div>
  </div>
</template>

<script>
import SanityImage from "./SanityImage"

export default {
  components: {
    SanityImage
  },
  props: ["images"],
  data() {
    return {
      mainImageWidth: 500,
      imageWidth: 200,
      activeImage: null
    }
  },
  computed: {
    mainImage: function() {
      return this.images[0]
    }
  },
  methods: {
    setActiveImage(image) {
      this.activeImage = image
    },
    close() {
      this.activeImage = null
    }
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
  cursor: pointer;
}

.item:first-child {
  display: none;
}

.image {
  max-width: 100%;
}

.activeImage {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.3);
}

.activeImage .image {
  max-width: 90%;
  max-height: 90%;
}

.close {
  cursor: pointer;
  position: absolute;
  width: 4em;
  height: 4em;
  top: 1em;
  right: 1em;
}
</style>
