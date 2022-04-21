<template>
<h1>МАШИИИИИНААААА {{number}}</h1>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Car',
  props: {
    number: {
      type: String,
      default: '0'
    }
  }
})
</script>

<style scoped>

</style>
