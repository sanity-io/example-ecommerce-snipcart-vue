<template>
  <section class="container"  :key="category.id">
    <div>
      <h1 class="title">{{category.title}}</h1>
      <div v-html="bodyHtml" class="body blockContent" />
      <ProductList :products="category.products" v-if="category.products" />
      <ul class="sub-categories" v-if="category.categories">
        <li v-for="subCat in category.categories" :key="subCat._id">
          <router-link :to="'/category/' + subCat.slug.current">
            {{subCat.title}}
          </router-link>
        </li>
      </ul>
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
    "categories": *[_type == 'category' && references(^._id)],
    title,
    "products": *[_type == "product" && references(^._id)] {
      ...
    }
  }[0]
`

export default {
  asyncData (context) {
    return sanity.fetch(query, context.route.params).then(data => {
      return {category: localize(data, ['nb', 'en'])}
    }, error => {
      console.error('Error', error)
      return {}
    })
  },
  data: function() {
    return {
      category: {
        id: null,
        products: [],
        categories: null
      }
    }
  },
  computed: {
    bodyHtml: function() {
      return this.category && this.category.description && blocksToHtml({
        blocks: this.category.description,
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

<style scoped>
  .sub-categories {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  .sub-categories li {
    display: block;
    padding: 2em;
    text-align: center;
    font-size: 2em;
  }

  .sub-categories a {
    text-decoration: none;
  }
</style>