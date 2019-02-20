<template>
  <section>
    <div>
      <h1 class="title">
        Vendors
      </h1>
      <ul class="vendors">
        <li
          v-for="vendor in this.$store.state.globalData.vendors"
          :key="vendor._id"
          class="vendor"
        >
          <router-link
            v-if="vendor.slug"
            :to="'/vendor/' + vendor.slug.current"
            class="link"
          >
            <SanityImage
              v-if="vendor.logo"
              :image="vendor.logo"
              class="image"
            />
            <div class="meta">
              <span class="vendorTitle">{{ vendor.title }}</span>
              &nbsp;<span class="qty">({{ vendor.productQty }})</span>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import SanityImage from "~/components/SanityImage"

export default {
  components: {
    SanityImage
  }
}
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
