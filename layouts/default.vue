<template>
  <div class="root">
    <header>
      <router-link :to="'/'"  class="logo">
        <AppLogo />
      </router-link>
      <nav>
        <ul>
          <li><router-link :to="'/'">Home</router-link></li>
          <li><router-link :to="'/category'">Categories</router-link></li>
          <li><router-link :to="'/vendor'">Vendors</router-link></li>
        </ul>
      </nav>
      <div class="cart" ref="cart">
        <a href="#" class="snipcart-checkout">
          <div class="snipcart-summary">
            🛒
            <span class="snipcart-total-items"></span> items
            <span class="snipcart-total-price"></span>
          </div>
        </a>

      </div>
    </header>

    <section class="sidebar">
      <ul class="categories">
        <li
          v-for="category in this.$store.state.globalData.categories"
          :key="category._id"
          v-if="category.slug"
          class="category"
        >
          <router-link :to="'/category/' + category.slug.current">
            {{category.title}}
          </router-link>
          <ul v-if="category.categories" class="sub-categories">
            <li
              v-for="subCategory in category.categories"
              :key="category._id + subCategory._id"
              v-if="subCategory.slug"
            >
              <router-link :to="'/category/' + category.slug.current + '/' + subCategory.slug.current">
                {{category.title}}
              </router-link>
            </li>
          </ul>
        </li>
      </ul>
    </section>

    <section class="content">
      <nuxt/>  
    </section>

    <div class="footer">A Sanity E-commerce example frontend in vue.js / nuxt.js</div>
  </div>
</template>


<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppLogo
  },
  mounted() {
    if (!window) {
      return
    } else if (window.Snipcart) {
      const cart = this.$refs.cart
      window.Snipcart.subscribe('item.adding', function (ev, item, items) {
        cart.classList.add('pop')
        setTimeout(function() {cart.classList.remove('pop')}, 220)
      })
    }
  }
}
</script>

<style scoped>
  
  @media only screen and (min-width: 500px)  {
    .root {
      display: grid;
      grid-gap: 1em;
      grid-template-columns: 10em auto;
      grid-template-rows: 5em minmax(calc(100vh - 12rem), auto) 5em;
      grid-template-areas:
        "header   header"
        "sidebar  content"
        "footer   footer";
    }
  }

  header {
    grid-area: header;
    padding: 1rem;
    border-bottom: 1px solid #ddd;
    display: flex;
    align-items: center;
  }

  section.sidebar {
    grid-area: sidebar;
    border-right: 1px solid #ddd;
  }

  section.content {
    grid-area: content;
    padding: 1rem;
  }

  @media only screen and (min-width: 500px)  {
    section.content {
      padding: 0rem 1rem 1rem 0rem;
    } 
  }

  .snipcart-checkout {
    text-decoration: none;
    color: inherit;
  }

  .snipcart-total-price {
    font-weight: 600;
  }

  .footer {
    grid-area: footer;
    text-align: center;
    padding: 1em;
    border-top: 1px solid #ddd;
    color: #999;
  }

  .logo {
    display: flex;
    align-items: center;
  }

  @media only screen and (min-width: 500px)  {
    .logo {
      font-size: 1.5em;
      margin-right: 2em;
    }
  }

  nav {
    display: flex;
    align-items: center;
  }
  
  nav > ul {
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0;
  }

  nav > ul > li {
    padding: 0.5em;
  }

  nav > ul > li > a {
    color: inherit;
    text-decoration: inherit;
  }

  .cart {
    padding: 0.5em;
    margin-left: auto;
    transition: all 0.2s linear;
    transform: scale(1);
  }

  .cart.pop {
    color: #3cae21;
    transform: scale(2);
  }

  nav :global(li) {
    display: block;
  }

  ul.categories {
    font-weight: 500;
    display: none;
    margin: 0 0 0.5rem 0;
    padding: 1rem;
  }

  @media only screen and (min-width: 500px)  {
    ul.categories {
      display: block;
    }
  }

  .category {
    display: block;
    margin: 0 0 0.10rem 0;
    padding: 0;
  }

  .category .nuxt-link-active {
    font-weight: 700;
  }

  ul.categories :global(a) {
    color: inherit;
    text-decoration: none;
  }

</style>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
