# The Transglobal Candy Store

A frontend example in [Vue.js](https://vuejs.org/) and [Nuxt.js](https://nuxtjs.org) for the Sanity.io e-commerce schema

🔗 [Read the blog post](https://www.sanity.io/blog/e-commerce-vue-nuxt-snipcart)

![Short animated preview of the app](https://public.sanity.io/github-assets/snipcart-for-github.gif 'Short animated preview of the app')

## Quickstart on local

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev
```

Tips:

- Make sure you are running on http://localhost:3000. If not sanity and snipcart will fail due to CORS origins.
- This project requires a recent Node version 12 or later, so if it fails on startup you might need an upgrade.

## Using your own backend data (Sanity Studio)

You're about five minutes away from running this example with your own data. You'll need to set up a Sanity Studio for this so:

- If you don't have Sanity CLI version 2.3.2 or later, install it with `yarn global add @sanity/cli` or upgrade it with `yarn global upgrade @sanity/cli`
- Initialize a new project with `sanity init` and select the e-commerce schema
- `sanity start` will start your studio and let you start adding your products!
- Go to `sanity.json` and locate your `projectId` and `dataset`

Head back to this project and in `nuxt.config.js` scroll down and change the `projectId` and `dataset` values to the ones you found above.

Tips:

- Remember to allow CORS for your project URLs in manage.sanity.io (ex. http://localhost:3000 to run locally)
- You can `sanity deploy` the Studio to share it with others

## Install your own snipcart

- Go to http://snipcart.com
- Register (Snipcart is free in Test mode) and copy your public test API key from your [snipcart dashboard](https://app.snipcart.com/dashboard/account/credentials)
- In `nuxt.config.js` scroll down und past it into the `snipcart` option
- Remember to add your domain/url in your Snicart settings (https://app.snipcart.com/dashboard/account/domains)

## Build production server or static project

```bash
# generate static project and test locally
$ yarn generate
$ yarn start
```

## Note on Nuxt crawler

This project is built in the [Nuxt Full Static mode](https://nuxtjs.org/blog/going-full-static/), using the Nuxt crawler to detect every relative link and generat it.
It means that, in production, the website won't make any API call to Sanity. However, it will make an API call for every pages during build time. And those calls aren't made to the CDN because we always want to have the freshest data when content editors trigger a rebuid.

This approach is fine for websites with not too many pages. If your datastore contains 5000 products, then you'd better turn off the crawler and fetch all routes with a single API request:

```js
// nuxt.config.js
generate: {
  fallback: true,
  crawler: false,
  async routes() {
      const paths = await client.fetch(`{
        "product": *[_type == "product"].slug.current,
        "category": *[_type == "category"].slug.current,
        "vendor": *[_type == "vendor"].slug.current
      }`)
      return Object.keys(paths).reduce(
        (acc, key) => [
          ...acc,
          ...paths[key].reduce((acc, curr) => [...acc, `${key}/${curr}`], []),
        ],
        []
      )
    },
},
```

Note that this project is using a lightweight version of the `@sanity/client`, which uses the Fetch API and thus only works in the browser. Since the routes generation is done in the Node runtime, we need to either patch the global object in Node or use the `@sanity/client`.

```js
// nuxt.config.js
import { createClient } from '@nuxtjs/sanity'
import fetch from 'node-fetch'
if (!globalThis.fetch) {
  globalThis.fetch = fetch
}

const client = createClient({
  projectId: 'xxxxxx',
  minimal: true,
  useCdn: false,
  dataset: 'production',
})
```

## Note on GROQ query default limit

The queries are by default limited to 100 items. This project is just an example, but it is possible to expand it with pagination or forever-scroll. To get more items, just add ex [0..1000] to the end of your query https://www.sanity.io/docs/data-store/query-cheat-sheet#slice-operations
