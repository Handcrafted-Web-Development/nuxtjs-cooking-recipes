export default gql`
  fragment link on NavigationItemRecord {
    recipesPost {
      recipesSlug
    }
    title
  }
`
