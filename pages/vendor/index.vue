<template>
  <section>
    <h1 class="title">Vendors</h1>
    <ul class="vendors">
      <li
        v-for="vendor in $store.state.globalData.vendors"
        :key="vendor._id"
        class="vendor"
      >
        <NuxtLink
          v-if="vendor.slug"
          :to="'/vendor/' + vendor.slug.current"
          class="link"
        >
          <img
            v-if="vendor.logo"
            :src="$urlFor(vendor.logo).size(180, 80)"
            class="image"
          />
          <div class="meta">
            <span class="vendorTitle">{{ vendor.title }} </span
            ><span class="qty">({{ vendor.productQty }})</span>
          </div>
        </NuxtLink>
      </li>
    </ul>
  </section>
</template>

<script>
export default {}
</script>

<style scoped>
.vendors {
  display: grid;
  margin: 0;
  padding: 0;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 4em;
  margin-top: 4em;
}

.vendor {
  display: block;
  margin: 0;
  padding: 0;
}

.meta {
  padding-top: 1rem;
  text-align: center;
}

.link {
  text-decoration: none;
  display: subgrid;
  grid-template-rows: 3fr 1fr;
}

.vendorTitle {
  font-size: 1.5em;
}

.image {
  display: block;
  max-height: 5em;
  max-width: 10em;
  margin: 0 auto;
}
</style>
