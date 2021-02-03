<template>
  <div class="root">
    <header>
      <NuxtLink :to="'/'" class="logo">
        <AppLogo />
      </NuxtLink>
      <nav>
        <ul>
          <li><NuxtLink :to="'/'">Home</NuxtLink></li>
          <li><NuxtLink :to="'/category'">Categories</NuxtLink></li>
          <li><NuxtLink :to="'/vendor'">Vendors</NuxtLink></li>
        </ul>
      </nav>
      <div class="cart">
        <a href="#" class="snipcart-checkout">
          <div class="snipcart-summary">
            🛒
            <span class="snipcart-items-count" /> items
            <span class="snipcart-total-price" />
          </div>
        </a>
      </div>
    </header>

    <aside class="sidebar">
      <nav>
        <ul class="categories">
          <li
            v-for="category in $store.state.globalData.categoryTree"
            :key="category._id"
            class="category"
          >
            <NuxtLink
              v-if="category.slug"
              :to="'/category/' + category.slug.current"
            >
              {{ category.title }}
            </NuxtLink>
            <ul v-if="category.children" class="sub-categories">
              <li
                v-for="subCategory in category.children"
                :key="category._id + subCategory._id"
              >
                <NuxtLink
                  v-if="subCategory.slug"
                  :to="'/category/' + subCategory.slug.current"
                >
                  {{ subCategory.title }}
                </NuxtLink>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </aside>

    <main class="content">
      <nuxt />
    </main>

    <footer class="footer">
      A Sanity E-commerce example frontend in vue.js / nuxt.js
    </footer>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
@media only screen and (min-width: 500px) {
  .root {
    display: grid;
    grid-gap: 1em;
    grid-template-columns: 10em auto;
    grid-template-rows: 5em minmax(calc(100vh - 12rem), auto) 5em;
    grid-template-areas:
      'header   header'
      'sidebar  content'
      'footer   footer';
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

@media only screen and (min-width: 500px) {
  section.content {
    padding: 0rem 1rem 1rem 0rem;
  }
}

.snipcart-checkout {
  text-decoration: none;
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

@media only screen and (min-width: 500px) {
  .logo {
    font-size: 1.5em;
    margin-right: 0.25em;
  }
}

nav {
  display: flex;
  align-items: center;
}

nav > ul {
  list-style-type: none;
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  font-weight: 700;
}

nav > ul > li {
  padding: 0.5em;
}

nav > ul > li > a {
  text-decoration: inherit;
}

.cart {
  padding: 0.5em;
  margin-left: auto;
  transition: all 0.1s ease-in;
  transform: scale(1);
}

.cart.pop {
  color: #3cae21;
  transform: scale(0.9);
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

.sub-categories {
  padding: 0;
  margin: 0;
  padding-left: 0.8rem;
}

.sub-categories li {
  display: block;
  margin: 0.5em;
  padding: 0;
}

@media only screen and (min-width: 500px) {
  ul.categories {
    display: block;
  }
}

.category {
  display: block;
  margin: 0 0 0.1rem 0;
  padding: 0;
}

.category .nuxt-link-active {
  font-weight: 700;
}

ul.categories :global(a) {
  text-decoration: none;
}
</style>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
