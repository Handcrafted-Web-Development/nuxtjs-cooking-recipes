<script setup lang="ts">
import { useCounterStore } from '@/store/counter';
import { storeToRefs } from 'pinia';

const inputVal = ref('');
const counterStore = useCounterStore();
const { increment } = counterStore;
const { count } = storeToRefs(counterStore);
</script>

<template>
  <h2>Store pinia</h2>
  <button @click="increment">increment</button>
  <p>{{ count }}</p>
</template>
