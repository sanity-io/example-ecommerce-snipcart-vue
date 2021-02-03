<template>
  <section :key="product._id">
    <ul class="categories">
      <li>
        <NuxtLink :to="'/vendor/' + product.vendor.slug.current" class="vendor">
          <img :src="$urlFor(product.vendor.logo)" class="vendorLogo" />
        </NuxtLink>
        {{ product.vendor.title }}
      </li>
      <li v-for="category in product.categories" :key="category._id">
        <NuxtLink :to="'/category/' + category.slug.current">
          {{ category.title }}
        </NuxtLink>
      </li>
    </ul>

    <div class="container">
      <div>
        <h1 class="title">{{ product.title }}</h1>
        <p v-if="product.blurb" class="blurb">{{ product.blurb }}</p>
        <div class="sub-head">
          <div class="price-and-button">
            <div class="price">{{ formattedPrice }}</div>
            <button
              :data-item-name="product.title"
              :data-item-price="product.defaultProductVariant.price"
              :data-item-id="product._id"
              :data-item-url="'/product/' + product.slug.current"
              :data-item-image="
                $urlFor(product.defaultProductVariant.images[0]).size(120)
              "
              type="button"
              class="snipcart-add-item"
            >
              Add to cart
            </button>
          </div>
        </div>
        <SanityContent
          v-if="product.body"
          class="body"
          :blocks="product.body"
        />
      </div>
      <div class="sidebar">
        <ImageViewer
          :images="product.defaultProductVariant.images"
          class="image-viewer"
        />
      </div>
    </div>
  </section>
</template>

<script>
import localize from '~/utils/localize'

const query = `
  *[_type == "product" && slug.current == $product][0] {
    ...,
    categories[]->,
    vendor->
  }
`

export default {
  name: 'Product',
  asyncData({ $sanity, params }) {
    return $sanity
      .fetch(query, params)
      .then((data) => ({ product: localize(data) }))
  },
  computed: {
    formattedPrice() {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(this.product.defaultProductVariant.price)
    },
  },
}
</script>

<style scoped>
.price {
  line-height: 1.5em;
}

@media only screen and (min-width: 500px) {
  .container {
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-end;
  }
}

@media only screen and (max-width: 1000px) {
  .container {
    flex-direction: column;
  }
  .sidebar {
    display: flex;
  }
}

@media only screen and (min-width: 500px) {
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
    margin-bottom: 1em;
  }
}

.blurb {
  font-size: 1.5em;
  margin: 1em 0;
}

.price-and-button {
  display: flex;
  align-items: center;
}

.categories {
  list-style-type: none;
  margin: 0;
  display: flex;
  align-items: center;
  padding: 0;
}

.categories :global(li) {
  display: block;
  margin-right: 0.5em;
  padding: 0;
  font-weight: 600;
}

.categories :global(a) {
  text-decoration: none;
  display: block;
  padding: 1em 0;
}

.categories :global(img) {
  display: block;
}

.snipcart-add-item {
  border: none;
  color: #000;
  background-color: #fff;
  border: 2px solid #000;
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
  display: inline-block;
}

.vendorLogo {
  display: inline-block;
  margin: 0 auto;
  max-height: 1.5em;
  max-width: 8em;
}

.body {
  margin: 1em 0;
  font-size: 1em;
  line-height: 1.3em;
  max-width: 40em;
}
</style>
