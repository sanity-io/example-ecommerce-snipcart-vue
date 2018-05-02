<template>
  <section class="container">
    <div>
      <h1 class="title">{{ title }}</h1>
      <div class="body blockContent" v-html="bodyHtml" />
      <ProductList v-if="products" :products="products" />
    </div>
  </section>
</template>

<script>
import sanity from "~/sanity.js"
import blocksToHtml from "@sanity/block-content-to-html"
import ImageViewer from "~/components/ImageViewer"
import Price from "~/components/Price"
import localize from "~/components/localize"
import ProductList from "~/components/ProductList"

const query = `
  *[_type == "vendor" && slug.current == $vendor] {
    _id,
    title,
    logo,
    description,
    "products": *[_type == "product" && references(^._id)] {
      ...
    }
  }[0]
`

export default {
  asyncData(context) {
    return sanity
      .fetch(query, context.route.params)
      .then(data => ({
        ...data,
        bodyHtml:
          data.description &&
          blocksToHtml({
            blocks: data.description,
            dataset: sanity.clientConfig.dataset,
            projectId: sanity.clientConfig.projectId
          })
      }))
      .then(data => localize(data, ["nb", "en"]))
  },
  components: {
    ImageViewer,
    Price,
    ProductList
  }
}
</script>
