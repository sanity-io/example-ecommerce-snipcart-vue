<template>
  <section class="container">
    <div>
      <h1 class="title">{{title}}</h1>
      <div v-html="bodyHtml" class="body blockContent" />
      <ProductList v-bind:products="products" v-if="products" />
    </div>
  </section>
</template>

<script>
import sanity from '~/sanity.js'
import blocksToHtml from '@sanity/block-content-to-html'
import ImageViewer from '~/components/ImageViewer'
import Price from '~/components/Price'
import localize from '~/components/localize'
import ProductList from '~/components/ProductList'

const query = `
  *[_type == "category" && slug.current == $category] {
    _id,
    title,
    "products": *[_type == "product" && references(^._id)] {
      ...
    }
  }[0]
`

export default {
  asyncData (context) {
    return sanity.fetch(query, context.route.params).then(data => {
      return localize(data, ['nb', 'en'])
    }, error => {
      console.error('Error', error)
      return false
    })
  },
  data: function() {
    return {
      products: []
    }
  },
  computed: {
    bodyHtml: function() {
      return this.description && blocksToHtml({
        blocks: this.description,
        dataset: sanity.clientConfig.dataset,
        projectId: sanity.clientConfig.projectId
      })
    }
  },
  components: {
    ImageViewer,
    Price,
    ProductList
  }
}
</script>