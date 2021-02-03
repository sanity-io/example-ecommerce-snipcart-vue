<template>
  <div class="root">
    <div style="cursor: pointer" @click="setActiveImage(images[0])">
      <img
        :src="$urlFor(images[0]).size(500)"
        width="500"
        height="500"
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
        <img :src="$urlFor(image).size(200)" width="200" class="image" />
      </li>
    </ul>

    <div v-if="activeImage" class="activeImage">
      <svg class="close" viewBox="0 0 96 96" @keyup.esc="close" @click="close">
        <polygon
          fill="currentColor"
          points="96,14 82,0 48,34 14,0 0,14 34,48 0,82 14,96 48,62 82,96 96,82 62,48 "
        />
      </svg>
      <img :src="$urlFor(activeImage).size(1000)" class="image" width="1000" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    images: { type: Array, required: true },
  },
  data() {
    return {
      activeImage: null,
    }
  },
  methods: {
    setActiveImage(image) {
      this.activeImage = image
    },
    close() {
      this.activeImage = null
    },
  },
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
