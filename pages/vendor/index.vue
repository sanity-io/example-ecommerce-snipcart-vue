<template>
  <section>
    <div>
      <h1 class="title">
        Vendors
      </h1>
      <ul class="vendors">
        <li class="vendor" v-for="vendor in this.$store.state.globalData.vendors" v-bind:key="vendor._id"  v-if="vendor.slug">
          <router-link class="link" :to="'/vendor/' + vendor.slug.current">
            <SanityImage class="image" v-bind:image="vendor.logo" v-if="vendor.logo" />
            <div class="meta">
              <span class="vendorTitle">{{vendor.title}}</span>
              &nbsp;<span class="qty">({{vendor.productQty}})</span>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import SanityImage from '~/components/SanityImage'

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
    width: 100%;
    height: 5em;
  }
</style>