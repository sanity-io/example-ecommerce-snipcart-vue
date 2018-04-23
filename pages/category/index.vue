<template>
  <section>
    <div>
      <h1 class="title">
        Categories
      </h1>
      <ul class="categories">
        <li v-for="category in this.$store.state.globalData.categories" v-bind:key="category._id"  v-if="category.slug">
          <router-link :to="'/category/' + category.slug.current">
            {{category.title}}
          </router-link>
          <ul v-if="category.categories" class="sub-categories">
            <li v-for="subCategory in category.categories" v-bind:key="category._id + subCategory._id"  v-if="subCategory.slug">
              <router-link :to="'/category/' + category.slug.current + '/' + subCategory.slug.current">
                {{category.title}}
              </router-link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </section>
</template>