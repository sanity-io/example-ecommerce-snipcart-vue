<template>
  <span class="root">
    <span v-if="price._type === 'discount'">
      <del>${{ price.price }}</del>
      <strong>${{ price.price * (1 - price.discount / 100) }}</strong>
    </span>
  </span>
</template>

<script>
export default {
  props: {
    price: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>
.root :global(del) {
  font-weight: 100;
  opacity: 0.5;
}
</style>
