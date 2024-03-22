<script setup>
defineProps({
  greetingMessage: String
})
// classic function
const showName = () => 'John Doe'
const consoleName = () => console.log('John doe')

</script>

<template>
  <span>{{ greetingMessage }}</span>
  <p>{{ showName() }}</p>
  <button @click="consoleName()">Console name</button>
</template>

<style scoped>

</style>