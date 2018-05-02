import sanity from '~/sanity.js'

function isParentOf(category, possibleParent) {
  if (possibleParent._id === category._id) {
    return false
  }
  return (category.parents || []).some(
    parent => parent._ref === possibleParent._id
  )
}

const attachCategories = (category, allCategories) => {
  return {
    ...category,
    children: allCategories.filter(otherCategory =>
      isParentOf(otherCategory, category)
    )
  }
}

const query = `
  {
    "categories": *[_type == "category"] {
      _id,
      title,
      slug,
      parents
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
export default ({ store }) => {
  return sanity.fetch(query).then(
    data => {
      const categories = data.categories.map(category =>
        attachCategories(category, data.categories)
      )
      data.categoryTree = categories.filter(
        category => (category.parents || []).length === 0
      )
      store.commit("globalData", data)
    },
    error => {
      console.error("Error", error)
      return false
    }
  )
}
