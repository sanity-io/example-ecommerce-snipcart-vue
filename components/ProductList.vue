<template>
  <div>
    <div v-if="products.length > 0" class="switchView">
      <button
        :class="displayView === 'grid' ? 'switchViewButton switchViewButtonActive' : 'switchViewButton'"
        @click="setView('grid')"
      >
        Grid
      </button>
      <button
        :class="displayView === 'list' ? 'switchViewButton switchViewButtonActive' : 'switchViewButton'"
        @click="setView('list')"
      >
        List
      </button>
    </div>
    <ul v-if="products.length > 0" :class="displayView">
      <li v-for="product in products" :key="product._id" class="product">
        <router-link :to="'/product/' + product.slug.current" class="link">
          <SanityImage
            v-if="product.defaultProductVariant.images[0]"
            :image="product.defaultProductVariant.images[0]"
            :alt="product.title"
            :width="displayView === 'grid' ? 300 : 50"
            class="image"
          />

          <div class="title">{{ product.title }}</div>
          <p v-if="displayView === 'grid'" class="blurb">{{ product.blurb }}</p>
        </router-link>

        <div class="price-and-button">
          <span class="price">{{ getFormattedPrice(product.defaultProductVariant.price) }}</span>

          <!-- Easy integration with snipcart. See readme for more info -->
          <button :data-item-name="product.title" :data-item-price="product.defaultProductVariant.price"
                  :data-item-id="product._id"
                  type="button"
                  class="snipcart-add-item"
                  data-item-url="/"
          >
            Add to cart
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>


<script>
import SanityImage from "~/components/SanityImage"
import lineClamp from "vue-line-clamp"
import numeral from "numeral"

export default {
  directives: {
    lineClamp
  },
  components: {
    SanityImage
  },
  props: {
    products: {
      type: Array,
      required: true
    },
    view: {
      type: String,
      default: "grid"
    }
  },
  data(context) {
    return {
      displayView: context._props.view || "grid"
    }
  },
  methods: {
    setView(view) {
      this.displayView = view
    },
    getFormattedPrice(price) {
      return numeral(price).format("$0.00")
    }
  }
}
</script>

<style scoped>
.list li {
  padding: 1em;
  justify-content: flex-end;
  align-items: center;
  display: flex;
  margin: 0;
  padding: 1em 0;
}

.switchView {
  display: flex;
  justify-content: flex-end;
}

.switchViewButtonActive {
  font-weight: 700;
}

.switchViewButton {
  background-color: transparent;
  color: #000;
  border: 2px solid #000;
  outline: none;
  text-transform: uppercase;
}

.list .link {
  display: flex;
  align-items: center;
  margin-right: auto;
}

.list .link p {
  font-size: 0.8em;
  max-width: 30em;
}

.list .image {
  margin-right: 1em;
}

.list .price {
  margin-right: 1em;
}

.list .title {
  margin-right: 1em;
}

.list .snipcart-add-item {
  white-space: nowrap;
}

.list .price-and-button {
  margin-left: auto;
  display: flex;
  align-items: center;
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2em;
}

.grid .title {
  font-weight: 600;
}

.grid li {
  display: flex;
  flex-direction: column;
}

.grid .link {
  display: flex;
  flex-direction: column;
}

.grid .image {
  display: block;
  max-width: 100%;
  width: auto;
  height: 13rem;
  margin: 0 auto;
  margin-bottom: 1rem;
  object-fit: contain;
}

.grid .price {
  display: block;
  font-size: 2em;
}

.grid .price-and-button {
  display: flex;
  justify-content: space-between;
  padding-top: 1em;
  margin-top: auto;
}

.link {
  display: block;
}

.price {
  display: block;
}

.title {
  font-size: 1.2em;
}

.snipcart-add-item {
  font-size: 1.1em;
  padding: 0.5em 1em;
}

.link {
  text-decoration: none;
}

ul {
  display: block;
  margin: 0;
  padding: 0;
}

.product {
  display: flex;
}

.grid .product {
  padding-bottom: 3rem;
  position: relative;
}

.no-products {
  text-align: center;
  font-size: 1.5em;
  padding: 1em;
}
</style>
