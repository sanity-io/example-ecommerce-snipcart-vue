<template>
  <div>
    <div class="switchView">
      <button
        @click="setView('list')"
        :class="displayView === 'list' ? 'switchViewButton switchViewButtonActive' : 'switchViewButton'"
      >
        List
      </button>
      <button
        @click="setView('grid')"
        :class="displayView === 'grid' ? 'switchViewButton switchViewButtonActive' : 'switchViewButton'"
      >
        Grid
      </button>
    </div>
    <ul v-bind:class="displayView" v-if="products.length > 0">
      <li v-for="product in products" v-bind:key="product._id">
        <router-link :to="'/product/' + product.slug.current" class="link">
          <SanityImage
            class="image"
            :image="product.defaultProductVariant.images[0]"
            :width="displayView === 'grid' ? 300 : 50"
            v-if="product.defaultProductVariant.images[0]"
          />
          
          <div class="title">{{product.title}}</div>
          <p v-if="displayView === 'grid'" class="blurb">{{product.blurb}}</p>
        </router-link>

        <span class="price">$ {{product.defaultProductVariant.price}}</span>

        <!-- Easy integration with snipcart. See readme for more info -->
        <button type="button" class="snipcart-add-item"
          :data-item-name="product.title"
          :data-item-price="product.defaultProductVariant.price"
          :data-item-id="product._id"
          data-item-url="http://localhost:3000"
        >
          Add to cart
        </button>
      </li>
    </ul>
    <p v-else>
      No products to show
    </p>
  </div>
</template>


<script>
  import SanityImage from '~/components/SanityImage'
  import lineClamp from 'vue-line-clamp'


  export default {
    data(context) {
      return {
        displayView: context._props.view || 'list'
      }
    },
    directives: {
      lineClamp
    },
    props: {
      products: {
        type: Array,
        required: true
      },
      view: {
        type: String,
        default: 'list'
      }
    },
    methods: {
      setView(view) {
        console.log('view', view, this)
        this.displayView = view
      }
    },
    components: {
      SanityImage
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

  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1em;
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
    width: 100%;
    height: auto;
  }

  .grid .price {
    font-size: 2em;
  }

  .image {
    grid-area: image;
  }

  .link {
    display: sub-grid;
  }

  .price {
    grid-area: price;
  }
  
  .title {
    font-size: 1.2em;
    grid-area: header;
  }

  .snipcart-add-item {
    grid-area: cart;
    font-size: 1.1em;
    padding: 0.5em 1em;
  }

  .blurb {
    grid-area: info;
  }

  .link {
    text-decoration: none;
    color: inherit;
  }

  ul {
    display: block;
    margin: 0;
    padding: 0;
  }


</style>
