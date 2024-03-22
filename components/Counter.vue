<script setup>
import { reactive } from 'vue';

const state = reactive({ count: 0 });
const msg = 'Text';

function increment() {
  state.count++;
}
</script>
<template>
  <button @click="increment">
    {{ state.count }}
  </button>
  <span v-text="msg"></span>
  <div v-if="Math.random() > 5">Now you see me</div>
  <div v-else>Now you don't</div>
  <PropsComponents greeting-message="item.title" />
</template>
<style>
.image img {
  width: 100px;
}
</style>
