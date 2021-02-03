<template>
  <section>
    <nav>
      <h1 class="title">Categories</h1>
      <ul class="categories">
        <li
          v-for="category in $store.state.globalData.categories"
          :key="category._id"
        >
          <NuxtLink
            v-if="category.slug"
            :to="'/category/' + category.slug.current"
          >
            {{ category.title }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </section>
</template>

<style scoped>
ul {
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

li {
  display: block;
}
a {
  padding: 1em;
  display: block;
  font-size: 1em;
  text-decoration: none;
  text-align: center;
}

@media only screen and (min-width: 500px) {
  ul {
    grid-template-columns: repeat(3, 1fr);
  }

  a {
    font-size: 2em;
  }
}
</style>
