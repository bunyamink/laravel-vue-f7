<script setup>
import { ref } from 'vue'
 
const counter = ref(0)
</script>
 
<template>
  <button
    type="button"
    @click="counter++"
    style="color: white; font-size: 20px;"
  >
    Counter is: {{ counter }}
  </button>
</template>