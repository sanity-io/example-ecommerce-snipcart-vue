# The Transglobal Candy Store

A frontend example in Vue.js and Nuxt.js for the Sanity.io e-commerce schema

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
- Nuxt.js requires a recent Node version (≥ 12) so if it fails on startup you might need an upgrade.

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

## Hosting on Netlify

If you want to host this on Netlify, as a static build, follow [these steps](https://www.sanity.io/blog/tutorial-host-your-sanity-based-next-js-project-on-netlify#3-deploy-your-blog-on-netlify) while switching out the `generate` command above and changing the output directory from `out` to `dist`. Note: Nuxt is intended to run as a universal/isomorphic app and will make calls to the Sanity CDN.

The queries are by default limited to 100 items. This project is just an example, but it is possible to expand it with pagination or forever-scroll. To get more items, just add ex [0..1000] to the end of your query https://www.sanity.io/docs/data-store/query-cheat-sheet#slice-operations

For detailed explanations on how Nuxt.js work, checkout the [Nuxt.js docs](https://nuxtjs.org).
