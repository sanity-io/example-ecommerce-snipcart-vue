<template>
  <section class="container" :key="product._id">
    <div class="sidebar">
      <ImageViewer :images="product.defaultProductVariant.images" class="image-viewer" />
      <router-link :to="'/vendor/' + product.vendor.slug.current" class="vendor">
        <SanityImage :image="product.vendor.logo" class="vendorLogo" />
        <div>{{product.vendor.title}}</div>
      </router-link>
    </div>

    <div>
      <h1 class="title">{{product.title}}</h1>
      <ul class="categories">
        <li v-for="category in product.categories" v-if="product.category" v-bind:key="category._id">
          <router-link :to="'/category/' + category.slug.current">
            {{category.title}}
          </router-link>
        </li>
      </ul>
      <p v-if="product.blurb" class="blurb">{{product.blurb}}</p>
      <div class="sub-head">
        <div class="price">$ {{product.defaultProductVariant.price}}</div>
        <button
          type="button"
          class="snipcart-add-item"
          :data-item-name="product.title"
          :data-item-price="product.defaultProductVariant.price"
          :data-item-id="product._id"
          data-item-url="http://localhost:3000"
        >
          Add to cart
        </button>
      </div>
      <div v-html="bodyHtml" class="body" />
    </div>
  </section>
</template>

<script>
import sanity from '~/sanity.js'
import blocksToHtml from '@sanity/block-content-to-html'
import ImageViewer from '~/components/ImageViewer'
import SanityImage from '~/components/SanityImage'
import Price from '~/components/Price'
import localize from '~/components/localize'

const query = `
  *[_type == "product" && slug.current == $product][0] {
    categories[]->,
    vendor->,
    ...
  }
`

export default {
  asyncData (context) {
    return sanity.fetch(query, context.route.params).then(data => {
      return {product: localize(data)}
    }, error => {
      console.error('Error', error)
      return false
    })
  },
  data: function() {
    return {
      blurb: 'No blurb text to show',
      body: false
    }
  },
  computed: {
    bodyHtml: function() {
      if (!this.product || !this.product.body) {
        return 'No body to show'
      }
      return blocksToHtml({
        blocks: this.product.body,
        dataset: sanity.clientConfig.dataset,
        projectId: sanity.clientConfig.projectId
      })
    }
  },
  components: {
    SanityImage,
    ImageViewer,
    Price
  }
}
</script>

<style scoped>
@media only screen and (min-width: 500px)  {
  .container {
    display: flex;
  }
}

.sub-head {
  display: flex;
  padding: 2em 0;
}

.price {
  font-size: 2.5em;
  line-height: 1.5em;
}

@media only screen and (min-width: 500px)  {
  .price {
    display: block;
    font-size: 5em;
    margin-right: 2rem;
  }

  .snipcart-add-item {
    font-size: 2em;
  }

  .image-viewer {
    min-width: 25vw;
    max-width: 20rem;
  }

  .sidebar {
    margin-right: 1em;
  }
}

.blurb {
  font-size: 1.5em;
}

.categories {
  margin: 0;
  padding: 1em 0;
}

.categories :global(li) {
  display: inline-block;
  margin: 0;
  padding: 0;
}

.categories :global(a) {
  text-decoration: none;
}

.snipcart-add-item {
  border: none;
  color: #000;
  background-color: #fff;
  border: 3px solid #000;
  padding: 1em;
  font-size: 1.2em;
  margin-right: 1em;
  outline: none;
}

.snipcart-add-item:active {
  background-color: #000;
  color: #fff;
}

.links {
  padding-top: 15px;
}

.vendor {
  display: block;
  text-align: center;
  margin: 3em;
  text-decoration: none;
}

.vendorLogo {
  display: block;
  max-height: 3em;
  max-width: 5em;
  margin: 0 auto;
}

.body {
  font-size: 1.1em;
  line-height: 1.3em;
  max-width: 40em;
}
</style>
