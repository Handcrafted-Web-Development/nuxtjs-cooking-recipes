<template>
  <!--  <section v-for="post in recipesPosts.allRecipesPosts" :key="post.id">-->
  <!--    <h1>{{ post.content }}</h1>-->
  <!--  </section>-->
  <!--  <div v-if="headerPending">-->
  <!--    <p>Loading data</p>-->
  <!--  </div>-->
  <!--  <div v-else-if="headerError">-->
  <!--    <p>error: {{ headerError }}</p>-->
  <!--  </div>-->
  <!--  <div v-else>-->
  <!--    <p>Site name: {{ cmsHeader?.header?.siteName }}</p>-->
  <!--  </div>-->
  <pre>
<!--    {{ recipesPosts }}-->
  </pre>

  <h2>Recipes results</h2>
  <div v-if="recipesPending">
    <p>Loading data</p>
  </div>
  <div v-else-if="recipesError">
    <p>error: {{ recipesError }}</p>
  </div>
  <div v-else>
    <h2>{{ recipesPost.recipesPost.id }}</h2>
    <div>{{ recipesPost.recipesPost.content }}</div>
    <ul>
      <li
        v-for="preparationStep in recipesPost.recipesPost.preparation"
        :key="preparationStep.id"
      >
        <h5>{{ preparationStep.title }}</h5>
        <p>{{ preparationStep.description }}</p>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div class="grid gap-4">
            <div>
              <DatocmsImage
                v-for="image in preparationStep.ingredientImg"
                :key="image.responsiveImage.title"
                class="h-auto max-w-full rounded-lg"
                :data="image.responsiveImage"
              />
            </div>
          </div>
        </div>
      </li>
    </ul>
    <!--    <ul>-->
    <!--      <li v-for="post in recipesPosts.allRecipesPosts" :key="post.id">-->
    <!--        <nuxt-link :to="{ name: 'recipes-slug', params: { slug: post.recipesSlug } }">{{ post.recipesPost }}</nuxt-link>-->
    <!--      </li>-->
    <!--    </ul>-->
  </div>

  <!--  <h2>Blog footer</h2>-->
  <!--  <div v-if="footerPending">-->
  <!--    <p>Loading data</p>-->
  <!--  </div>-->
  <!--  <div v-else-if="footerError">-->
  <!--    <p>error: {{ footerError }}</p>-->
  <!--  </div>-->
  <!--  <div v-else>-->
  <!--    <p v-for="item in cmsFooter.footer.differentUsage" :key="item.id">{{ item.title }}</p>-->
  <!--  </div>-->
</template>
<script setup>
import recipes_post from '~/cms/queries/recipes_post.ts';
import { Image as DatocmsImage } from 'vue-datocms';
// import { RecipesPost } from '~/types/recipesPost.js';
// import { RecipesPost } from '~/types/recipesPost.js'
// : { recipesPost: RecipesPost }
const route = useRoute();

const {
  data: recipesPost,
  pending: recipesPending,
  error: recipesError,
} = await useLazyAsyncQuery(recipes_post, { slug: route.params.slug });
</script>
