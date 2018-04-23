import sanity from '~/sanity.js'


const query = `
  {
    "categories": *[_type == "category"] {
      _id,
      title,
      slug,
      "subCategories": categories[]-> {
        _id,
        title,
        slug
      }
    },
    "vendors": *[_type == "vendor"] {
      title,
      slug,
      logo,
      "productQty": count(*[_type == "product" && references(^._id)])
    }
  }
`

/**
 * We do this to achieve server side rendering for
 * content displayed by layouts components
 * ( layouts does not have an asyncData() method )
 */
export default async function( { store } ) {
  const data =  await sanity.fetch(query).then(data => {
    store.commit('globalData', data)
  }, error => {
    console.error('Error', error)
    return false
  })
}