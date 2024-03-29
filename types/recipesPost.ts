export type ResponsiveImage = {
  width: string
  webpSrcSet: string
  title: string
  srcSet: string
  src: string
  sizes: string
  height: string
}

export type Preparation = {
  id: string
  title: string
  description: string
  ingredientImg: ResponsiveImage
}

export type RecipesPost = {
  id: string
  recipesSlug: string
  content: string
  preparation: Array<Preparation>
}
