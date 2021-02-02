<template>
  <section class="container">
    <h1 class="title">{{ title }}</h1>
    <SanityContent
      v-if="description"
      class="body blockContent"
      :blocks="description"
    ></SanityContent>
    <ProductList :products="products" />
  </section>
</template>

<script>
import localize from '~/utils/localize'

const query = `
  *[_type == "vendor" && slug.current == $vendor] {
    _id,
    title,
    logo,
    description,
    "products": *[_type == "product" && references(^._id)]
  }[0]
`

export default {
  name: 'Vendor',
  asyncData({ $sanity, params }) {
    return $sanity
      .fetch(query, params)
      .then((data) => data)
      .then((data) => localize(data, ['nb', 'en']))
  },
}
</script>
