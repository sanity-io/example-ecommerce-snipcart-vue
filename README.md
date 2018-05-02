# Frontend example in Vue.js and Nuxt.js for the Sanity.io e-commerce schema 

## Quick start development

``` bash
# install dependencies
$ npm install # Or yarn

# serve with hot reload at localhost:3000
$ npm run dev
```

Tips:
- Make sure you are running on http://localhost:3000. If not sanity and snipcart will fail due to CORS origins.
- Vue.js requires a recent Node version so if it fails on startup you might need an upgrade.

## Using your own sanity.io data

You're about five minutes away from running this example with your own data. You'll need to set up a Sanity studio for this so:

- If you don't have it, install the Sanity CLI with `npm install -g @sanity/cli`
- Initialize a new project with `sanity init` and select the e-commerce schema
- `sanity start` will start your studio and let you start adding your products!
- Go to `sanity.json` and locate your `projectId` and `dataset`

Head back to this project and in `sanity.js` change the `projectId` and `dataset` values to the ones you found above

Tips:
- Remember to add CORS manage.sanity.io (ex. http://localhost:3000 to run locally)
- You can `sanity deploy` your editor to share it with others

## Install your own snipcart
- Go to http://snipcart.com
- Register and copy your API-key from snipcart
- In `nuxt.config.js` paste it into `data-api-key` 
- Remember to add your domain/url in your Snicart settings (https://app.snipcart.com/dashboard/account/domains)

## Build production server or static project
``` bash
# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

The queries are by default limited to 100 items. This project is just an example, but
it is possible to expand it with pagination or forever-scroll. To get more items, 
just add ex [0..1000] to the end of your query https://www.sanity.io/docs/data-store/query-cheat-sheet#slice-operations

For detailed explanations on how Nuxt.js work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).
