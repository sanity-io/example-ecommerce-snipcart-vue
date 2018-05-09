<template>
  <section :key="category.id" class="container">
    <div>
      <h1 class="title">{{ category.title }}</h1>
      <div class="description">{{ category.description }}</div>
      <ProductList v-if="category.products" :products="category.products" />
      <ul v-if="category.categories" class="sub-categories">
        <li v-for="subCat in category.categories" :key="subCat._id">
          <router-link :to="'/category/' + subCat.slug.current">
            {{ subCat.title }}
          </router-link>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import sanity from "~/sanity.js"
import localize from "~/utils/localize"
import ImageViewer from "~/components/ImageViewer"
import Price from "~/components/Price"
import ProductList from "~/components/ProductList"

const query = `
  *[_type == "category" && slug.current == $category] {
    _id,
    "categories": *[_type == 'category' && references(^._id)],
    title,
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
      .then(data => ({ category: localize(data, ["nb", "en"]) }))
  },
  components: {
    ImageViewer,
    Price,
    ProductList
  },
  data: function() {
    return {
      category: {
        id: null,
        products: [],
        categories: null
      }
    }
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

.description {
  margin: 1em 0;
  max-width: 50em;
}
</style>
