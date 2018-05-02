import sanity from '~/sanity.js'

const attachCategory = (category, categories) => {
  if (category.categories) {
     category.children = []
     category.categories.map(child => {
       const orgCat = find(categories, item => {
           return item._id === child._ref
       })
       category.children.push(attachCategory(orgCat, categories))
     })
  }
  return category
}

const query = `
  {
    "categories": *[_type == "category"] {
      _id,
      title,
      slug,
      parent
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
export default function( { store } ) {
  return sanity.fetch(query).then(data => {
   
    const root = data.categories.filter(cat => {
      if (!cat.parent) {
        return true
      }
    
      // Note; mutating inside of a filter, not the prettiest
      cat.parent.forEach(parentRef => {
        const parent = data.categories.find(candidate => candidate._id === parentRef._ref)
        if (!parent.children) {
          parent.children = []
        }
    
        parent.children.push(cat)
      })
    
      // Might want to keep this? Up to you
      //delete cat.parent
    
      return false
    })
    data.categoryTree = root
    store.commit('globalData', data)
  }, error => {
    console.error('Error', error)
    return false
  })
}