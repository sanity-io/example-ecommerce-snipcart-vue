function isParentOf(category, possibleParent) {
  if (possibleParent._id === category._id) {
    return false
  }
  return (category.parents || []).some(
    (parent) => parent._ref === possibleParent._id
  )
}

const attachCategories = (category, allCategories) => {
  return {
    ...category,
    children: allCategories.filter((otherCategory) =>
      isParentOf(otherCategory, category)
    ),
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

export const state = () => ({
  globalData: {},
})

export const mutations = {
  setGlobalData(state, data) {
    state.globalData = data
  },
}

export const actions = {
  // Asynchronous nuxtServerInit actions MUST RETURN a Promise to allow the nuxt server to wait on them.
  nuxtServerInit({ commit }, { $sanity }) {
    return $sanity
      .fetch(query)
      .then((data) => {
        const categories = data.categories.map((category) =>
          attachCategories(category, data.categories)
        )
        data.categoryTree = categories.filter(
          (category) => (category.parents || []).length === 0
        )
        commit('setGlobalData', data)
      })
      .catch((error) => console.error(error))
  },
}
