export default gql`
  query RecipesPost {
    allRecipesPosts {
      content
      recipesPost
      recipesSlug
      id
      _createdAt
      _allContentLocales {
        value
      }
      _seoMetaTags {
        content
        attributes
      }
      _status
      slider {
        id
      }
      preparation {
        description
        title
      }
    }
  }
`
