<template>
  <section>
    <div>
      <h1 class="title">
        Products
      </h1>
      <div v-show="products">
        <h3>Products</h3>
        <ProductList :products="products" />
      </div>
    </div>
  </section>
</template>

<script>
import sanity from "~/sanity.js"
import localize from "~/utils/localize"
import ProductList from "~/components/ProductList"

const query = `
  {
    "products": *[_type == "product"]
  }
`

export default {
  asyncData() {
    return sanity.fetch(query).then(data => localize(data, ["en", "nb"]))
  },
  components: {
    ProductList
  }
}
</script>
