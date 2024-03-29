export default gql`
  query RecipesPost($slug: String) {
    recipesPost(filter: { recipesSlug: { eq: $slug } }) {
      id
      recipesSlug
      content
      preparation {
        id
        title
        description
        ingredientImg {
          responsiveImage {
            width
            webpSrcSet
            title
            srcSet
            src
            sizes
            height
          }
        }
      }
    }
  }
`
