<template>
  <section>
    <h1 class="title">Products</h1>
    <ProductList :products="products" />
  </section>
</template>

<script>
import localize from '~/utils/localize'

const query = `
  {
    "products": *[_type == "product"]
  }
`

export default {
  asyncData({ $sanity }) {
    return $sanity.fetch(query).then((data) => localize(data, ['en', 'nb']))
  },
}
</script>
