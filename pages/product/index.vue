<template>
  <section>
    <div>
      <h1 class="title">
        Products
      </h1>
      <div v-show="products">
        <h3>Products</h3>
        <ProductList v-bind:products="products"  />
      </div>
    </div>
  </section>
</template>

<script>
import sanity from '~/sanity.js'
import ProductList from '~/components/ProductList'
import localize from '~/components/localize'

const query = `
  {
    "products": *[_type == "product"]
  }
`

export default {
  asyncData (context) {
    return sanity.fetch(query).then(data => {
      return localize(data)
    }, error => {
      console.error('Error', error)
      return false
    })
  },
  components: {
    ProductList
  }
}
</script>