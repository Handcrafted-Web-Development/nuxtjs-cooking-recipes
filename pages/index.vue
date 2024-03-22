<script setup>
const username = ref();
const isActive = ref(true);
const hasError = ref(false);

const { pending, data } = useLazyFetch(
  'https://data.nantesmetropole.fr/api/explore/v2.1/catalog/datasets/244400404_parkings-publics-nantes-disponibilites/records?limit=20',
);

// useServerSeoMeta({
//   ogTitle: () => `${data.results?.grp_identifiant} - My Site`,
//   description: () => data.results?.grp_nom,
//   ogDescription: () => data.results?.disponibilite,
// })
</script>

<template>
  <div>
    <AppInfo> This is an auto-imported component </AppInfo>
    <div class="image">
      <img src="~assets/chat.jpg" alt="chat" />
    </div>
    <Counter></Counter>
    <input type="text" v-model="username" />
    <p>rendu: {{ username }}</p>
    <div class="static" :class="{ active: isActive, 'text-danger': hasError }"></div>
  </div>
  <Computed />
  <div v-if="pending">Loading ...</div>
  <div v-else>
    <div v-for="item in data.results" :key="item.grp_identifiant">
      {{ item.grp_nom }}
    </div>
  </div>
</template>

<style>
.static {
  border: 2px solid black;
}

.active {
  color: green;
}

.text-danger {
  color: red;
}
</style>
