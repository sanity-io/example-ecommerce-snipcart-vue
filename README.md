# Sanity.io frontend example for E-commerce written in Vue.js and nuxt

## Quick start development

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev
```

Make sure you are running on http://localhost:3000. If not sanity and snipcart will fail.

## Use your own sanity.io data
- Change the `projectId` and `dataset` in `sanity.json`
- Remember to add CORS manage.sanity.io (ex. http://localhost:3000 to run locally)

## Install your own snipcart
- Go to http://snipcart.com
- Register and find API-key
- Change `data-api-key` in `nuxt.config.js`
- Remember to add your domain/url in your Snicart settings (https://app.snipcart.com/dashboard/account/domains)

## Build production server or static project
``` bash
# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```


For detailed explanation on how nuxt work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).
